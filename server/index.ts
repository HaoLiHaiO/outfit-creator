import express from 'express';
import cors from 'cors';
import setupRoutes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
setupRoutes(app);

app.listen(5000, () => {
    console.log('Server started properly and it is running on port 5000');
});