const tododb = require('../db/index');
const Sequelize = require('sequelize');

const TodoModel = tododb.define(
    'todos', // name of the table
    {
        todo: {
            type: Sequelize.STRING, // data type
            allowNull: false // enabling null value
        },
        urgent: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    },
    {
        timestamps: true // date of the insertion
    }

)

module.exports = TodoModel;