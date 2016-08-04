var db = require('../../server/db');
var EventAttendee = db.model('event_attendee');

var seedEventAttendee = function () {

    var event_attendees = [
        {
            eventId: 1,
            userId: 1,
        },
        {
            eventId: 1,
            userId: 2,
        },
        {
            eventId: 1,
            userId: 3,
        },
        {
            eventId: 2,
            userId: 1,
        },{
            eventId: 2,
            userId: 2,
        },
        {
            eventId: 3,
            userId: 1,
        },
        {
            eventId: 3,
            userId: 3,
        },
        {
            eventId: 4,
            userId: 2,
        }
    ];


    var creatingEventAttendees = event_attendees.map(function (eaObj) {
        return EventAttendee.create(eaObj);
    });

    return Promise.all(creatingEventAttendees);

};

module.exports = seedEventAttendee;