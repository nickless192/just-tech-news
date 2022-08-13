// import the sequelizer
const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

// create connection to our db with JawsDB for Heroku
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // create connection to our db locally
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}


module.exports = sequelize;