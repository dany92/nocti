'use strict';
var crypto = require('crypto');
var _ = require('lodash');
var Sequelize = require('sequelize');
var geolib = require('geolib');

var db = require('../_db');

module.exports = db.define('business', {
    name: {
        type: Sequelize.STRING
    },
    address: {
    	type: Sequelize.STRING
    },
    lat:{
        type: Sequelize.FLOAT
    },
    long:{
        type: Sequelize.FLOAT
    },
    category: {
        type: Sequelize.ENUM('bar', 'nightclub')
    },
    email: {
    	type: Sequelize.STRING
    },
    phone: {
    	type: Sequelize.STRING
    },
    website: {
    	type: Sequelize.STRING
    }
}, {timestamps: false,
    instanceMethods: {
        getDistance: function(currentCoor){
            return geolib.convertUnit('mi', geolib.getDistance(currentCoor, {longitude: this.long, latitude: this.lat}));
        }
    }
});

