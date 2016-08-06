'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
var Business = require('./models/business');
var Event = require('./models/event');
var Promotion = require('./models/promotion');
var Feed = require('./models/feed');
var EventAttendee = require('./models/event_attendee')

Business.belongsTo(User);
User.hasMany(Business);

Business.hasMany(Event);
Event.belongsTo(Business);

Promotion.belongsTo(Business);
Business.hasMany(Promotion);

Promotion.belongsTo(Event);
Event.hasMany(Promotion);

User.belongsToMany(Event, {through: EventAttendee});
Event.belongsToMany(User, {through: EventAttendee});


