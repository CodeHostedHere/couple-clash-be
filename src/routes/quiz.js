import express from 'express';
import { getAnswers, getQuestionsToday, submitAnswers } from '../controllers/quizController.js';

const router = express.Router();

router.get('/questions/today', getQuestionsToday);

router.get('/answers/:answerRef', getAnswers);

router.post('/submit-answers/:answerRef', submitAnswers);

export default router;