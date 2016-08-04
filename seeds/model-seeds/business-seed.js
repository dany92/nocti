var db = require('../../server/db');
var Business = db.model('business');

var seedBusiness = function () {

    var businesses = [
        {
            name: 'Little Branch',
            address: '22 7th Ave S, New York, NY 10014',
            category: 'bar',
            email: 'whatever@gmail.com',
            phone: '203-234-6633',
            website: 'www.thisisgreat.com'
        }
    ];


    var creatingBusinesses = businesses.map(function (businessObj) {
        return Business.create(businessObj);
    });

    return Promise.all(creatingBusinesses);

};

module.exports = seedBusiness;