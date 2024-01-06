import Question from '../../db/models/Question.js';
import Answer from '../../db/models/Answer.js';
import { sequelize } from '../../db/index.js';

const getQuestionsToday = async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dateString = today.toISOString().split('T')[0]; // format as YYYY-MM-DD

        const questions = await Question.findAll({
            where: sequelize.where(sequelize.fn('date', sequelize.col('askDate')), '=', dateString)
        });

        res.json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const submitAnswers = async (req, res) => {
    try {
        const answerRef = req.params.answerRef;
        const answerPromises = req.body.answers.map(answer => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const dateString = today.toISOString().split('T')[0];
            
            return Answer.create({
                text: answer.answer, 
                answerReference: answerRef, 
                askDate: dateString, 
                questionId: answer.questionId})
        });
        await Promise.all(answerPromises);
        res.json({"ok" : true, "answerRef": answerRef})
    }
    catch(err) {
        console.log(err)
        res.status(500).send(err.message);
    } 
};

const getAnswers = async (req, res) => {
    try{
        const answerRef = req.params.answerRef;
        const answers = await Answer.findAll({
            where: { answerReference: answerRef }
        });
        res.json(answers);
    }
    catch(err) {
        console.log(err)
        res.status(500).send(err.message);
    } 
}


export { getQuestionsToday, submitAnswers, getAnswers };