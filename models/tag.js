// models/tag.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Tag = sequelize.define('Tag', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Tag;
