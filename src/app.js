import express from 'express';
import cors from 'cors';
import quizRoutes from './routes/quiz.js';
import { sequelize } from '../db/index.js';


const port = 3000

const app = express()

app.use(cors());

app.use(express.json());

app.use('/quiz', quizRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database and tables created!');
        // Start your express app here or perform other startup logic
    })
    .catch(err => {
        console.error('There was a problem syncing the database:', err);
    });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

