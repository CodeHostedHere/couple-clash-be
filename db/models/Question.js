import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';


class Question extends Model {}

Question.init({
    questionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    askDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'question'
});

export default Question;