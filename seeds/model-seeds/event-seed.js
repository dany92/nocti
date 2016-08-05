var db = require('../../server/db');
var Event = db.model('event');

var seedEvent = function () {

    var events = [
         {
            title: 'Ladies Night',
            description: 'The night is for ladies',
            start_date: '2016-03-02 23:30',
            end_date: '2016-03-03 4:30'
        },
        {
            title: 'Alpha Di Mixer',
            description: 'Best Frat Party of the Year',
            start_date: '2016-05-11 22:00',
            end_date: '2016-05-12 2:00'
        },
        {
            title: 'Valentine Special',
            description: "Couples, have night of fun. Singles, it's about time to meet someone",
            start_date: '2016-02-14 23:00',
            end_date: '2016-02-15 6:00'
        },
        {
            title: 'Christmas Event',
            description: 'Party of the Year. Join us on White Christmas',
            start_date: '2016-12-24 20:00',
            end_date: '2016-12-25 4:00'
        }
    ];


    var creatingEvents = events.map(function (eventObj) {
        return Event.create(eventObj);
    });

    return Promise.all(creatingEvents);

};

module.exports = seedEvent;