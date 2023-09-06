const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        post_username: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'username'
            }
        },
        date: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
    sequelize,
    timeStamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
    }
);

module.exports = Posts