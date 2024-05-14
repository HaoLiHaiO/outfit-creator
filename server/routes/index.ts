import { Express } from 'express';
import commonRoutes from './commonRoutes';

const setupRoutes = (app: Express) => {
    app.use('/api', commonRoutes);
};

export default setupRoutes;
