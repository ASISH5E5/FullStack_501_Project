const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_db', 'postgres', 'postgres', {
    
    dialect: 'postgres',
    logging:false
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database: new1', error.message);
    }
};

module.exports = { connection, sequelize };

