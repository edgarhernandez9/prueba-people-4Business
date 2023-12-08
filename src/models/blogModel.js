const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

//Campos: titulo, autor, fecha de publicacion, contenido

const Blog = sequelize.define('Blog', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaPublicacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    contenido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updateAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
});

sequelize.sync()
    .then(() => console.log('Base de Datos sincronizada con éxito'))
    .catch(error => console.log('Error al sincronizar la base de datos', error));

module.exports = Blog;
