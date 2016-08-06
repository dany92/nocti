'use strict';
var crypto = require('crypto');
var _ = require('lodash');
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('event', {
    title: {
        type: Sequelize.STRING
    },
    description: {
    	type: Sequelize.TEXT
    },
    start_date: {
    	type: Sequelize.DATE
    },
    end_date:{
    	type: Sequelize.DATE
    }
    //maybe include filter here too?
}, {
    getterMethods: {
        isPast: function(){
            return this.end_date < new Date();
        }
    }
});
