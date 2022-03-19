const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DB_USERNAME, DB_PSWD, DB_HOST, DB_PORT, DB_NAME } = process.env

const tododb = new Sequelize(`postgres://${DB_USERNAME}:${DB_PSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false
});

tododb.authenticate()
    .then(() => console.log('Connection has been established successfully'))
    .catch((err) => console.log(err))

function syncTodo() {
    return tododb.sync({ force: false })
};
tododb.didSync = syncTodo();

module.exports = tododb;