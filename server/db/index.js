'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
var Event = require('./models/event');
var Promotion = require('./models/promotion');
var Business = require('./models/business');
var Feed = require('./models/feed');
var EventAttendee = require('./models/event_attendee')

Business.belongsTo(User);
User.hasMany(Business);

Event.belongsTo(Business);
Business.hasMany(Event);

Promotion.belongsTo(Business);
Business.hasMany(Promotion);

Promotion.belongsTo(Event);
Event.hasMany(Promotion);

User.belongsToMany(Event, {through: EventAttendee});
Event.belongsToMany(User, {through: EventAttendee});


