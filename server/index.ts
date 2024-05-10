import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log('Server started properly and is running on port 5000');
});