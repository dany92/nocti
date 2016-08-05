var db = require('../../server/db');
var Business = db.model('business');

var seedBusiness = function () {

    var businesses = [
        {
            name: 'Lil Branch',
            address: '22 7th Ave S, New York, NY 10014',
            lat: 40.736040,
            long: -74.001724,
            category: 'bar',
            email: 'whatever@gmail.com',
            phone: '203-234-6633',
            website: 'www.lilbranch.com'
        },
        {
            name: 'Alcohol is my life',
            address: '45 10th Ave S, New York, NY 10014',
            lat: 40.808364,
            long: -73.947161,
            category: 'bar',
            email: 'drinkaway@gmail.com',
            phone: '324-345-7777',
            website: 'www.yay.com'
        },
        {
            name: 'Stony Rock',
            address: '602 Madison Ave, New York, NY 10014',
            lat: 40.739937,
            long: -74.004932,
            category: 'bar',
            email: 'yolo@gmail.com',
            phone: '535-674-8457',
            website: 'www.namingishard.com'
        },
        {
            name: 'Envi',
            address: '160 33th, New York, NY 10014',
            lat: 40.72337,
            long: -74.002432,
            category: 'nightclub',
            email: 'comeweekend@gmail.com',
            phone: '346-466-4667',
            website: 'www.weekendforever.com'
        },
        {
            name: 'Tipsy',
            address: '326 Spring St, New York, NY 10013',
            lat: 40.76337,
            long: -74.001432,
            category: 'nightclub',
            email: 'watchout@gmail.com',
            phone: '758-344-0940',
            website: 'www.onlyslightlytipsy.com'
        },
        {
            name: 'The Legend',
            address: '2533 Fall Hill Dr, San Francisco, CA 94133',
            lat: 37.803722,
            long: -122.415576,
            category: 'nightclub',
            email: 'watchout@gmail.com',
            phone: '758-344-0940',
            website: 'www.onlyslightlytipsy.com'
        }
    ];


    var creatingBusinesses = businesses.map(function (businessObj) {
        return Business.create(businessObj);
    });

    return Promise.all(creatingBusinesses);

};

module.exports = seedBusiness;