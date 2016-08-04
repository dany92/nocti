'use strict';
var crypto = require('crypto');
var _ = require('lodash');
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('business', {
    name: {
        type: Sequelize.STRING
    },
    address: {
    	type: Sequelize.STRING
    },
    category: {
        type: Sequelize.ENUM('bar', 'nightclub')
    }
    email: {
    	type: Sequelize.STRING
    },
    phone: {
    	type: Sequelize.STRING
    },
    website: {
    	type: Sequelize.STRING
    }
}, {timestamps: false});

