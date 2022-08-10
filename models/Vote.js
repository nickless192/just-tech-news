const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Voteinit(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // what needs to go here
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }, 
            post_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'post',
                    key: 'id'
                }
        }
    }, {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote'
    }
);

module.exports = Vote;