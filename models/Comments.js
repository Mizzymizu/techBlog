const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {};

Comments.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        commenter: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'user',
                key: 'id'
            }
        },
        post_Id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
    sequelize,
    timeStamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
    }
);

module.exports = Comments