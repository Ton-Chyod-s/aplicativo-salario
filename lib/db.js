const { Sequelize } = require('sequelize');

// Configurações da conexão com o banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // Arquivo onde o banco de dados SQLite será armazenado
});

module.exports = sequelize;