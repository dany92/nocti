'use strict';
var crypto = require('crypto');
var _ = require('lodash');
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('promotion', {
    title: {
        type: Sequelize.STRING
    },
    secret_code: {
        type: Sequelize.STRING
    },
    start_date: {
        type: Sequelize.DATE
    },
    end_date:{
        type: Sequelize.DATE
    },
    filter: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
});
