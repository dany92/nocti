var db = require('../../server/db');
var Feed = db.model('feed');

var seedFeed = function () {

    var feeds = [
        {
            date: '2016-02-15 23:05',
            content: 'I met the love of my life through this event'
        },
        {
            date: '2016-02-14 23:25',
            content: 'Full of people. Overcrowded'
        },
        {
            date: '2016-02-16 14:03',
            content: 'Great DJ. Really enjoyed the music. Can dance all night long.'
        },
        {
            date: '2016-12-25 11:28',
            content: 'Joyful experience. Cray cray.'
        },
        {
            date: '2016-03-03 15:32',
            content: 'Ladies got in for free!'
        },
        {
            date: '2016-05-13 19:47',
            content: 'Go Alpha Di.'
        }
    ];


    var creatingFeeds = feeds.map(function (feedObj) {
        return Feed.create(feedObj);
    });

    return Promise.all(creatingFeeds);

};

module.exports = seedFeed;