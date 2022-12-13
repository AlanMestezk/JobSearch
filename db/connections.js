
const Sequelize = require ('sequelize');

const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: './db/app/app.db'
    }
);

module.exports = sequelize;


