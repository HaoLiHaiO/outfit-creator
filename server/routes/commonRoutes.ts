import { Router, Request, Response } from 'express';
import fetchData from '../utils/fetchData';
import categoryConfig, { CategoryKey } from '../config/categoryConfig';

const router = Router();

type GenderKey = 'male' | 'female';

/**
 * Express Router for fetching outfit data
 * 
 * This router handles GET requests to fetch outfit data based on the category
 * and gender.
 * It validates the category and gender parameters, fetches the corresponding
 * data,
 * and returns the data as a JSON response.
 * 
 * @param {string} category - The category of the outfit (e.g., 'accessories',
 * 'tops', 'bottoms')
 * @param {string} gender - The gender for which to fetch the outfit data
 * (e.g., 'male', 'female')
 * 
 * @returns {Object} The fetched outfit data as a JSON response
 * 
 * @throws {400} If the category or gender is invalid
 * @throws {500} If an internal server error occurs
 */
router.get('/:category', async (req: Request, res: Response) => {
    try {
        const category = req.params.category as CategoryKey;
        const gender = req.query.gender;

        if (!categoryConfig[category] || typeof gender !== 'string' || (gender !== 'male' && gender !== 'female')) {
            res.status(400).json({ message: 'Invalid category or gender' });
            return;
        }

        const genderConfig = categoryConfig[category][gender as GenderKey];

        if (!genderConfig) {
            res.status(400).json({ message: 'Invalid gender configuration' });
            return;
        }

        const data = await fetchData(gender, genderConfig);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
