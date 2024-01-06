import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';
import Question from './Question.js';


class Answer extends Model {}

Answer.init({
    answerId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answerReference: {
        type: DataTypes.STRING,
        allowNull: false
    },
    askDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'answer'
});

Answer.belongsTo(Question, { foreignKey: 'questionId' })

export default Answer;