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
        },
        timeRemaining: function(){
            var one_day=1000*60*60*24;
            return parseInt((this.start_date - new Date())/one_day); 
        }
    },
    defaultScope: {
        include: [db.model('business'), db.model('user')]
    }
});
