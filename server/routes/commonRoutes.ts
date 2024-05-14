import { Router, Request, Response } from 'express';
import fetchData from '../utils/fetchData';
import categoryConfig, { CategoryKey } from '../config/categoryConfig';

const router = Router();

type GenderKey = 'male' | 'female';

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
