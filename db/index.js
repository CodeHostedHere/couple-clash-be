import sequelize from './sequelize.js';
import Question from './models/Question.js';
import Answer from './models/Answer.js';


const models = {
    Question,
    Answer,
};



export { sequelize, models };