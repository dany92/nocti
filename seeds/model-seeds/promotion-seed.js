var db = require('../../server/db');
var Promotion = db.model('promotion');

var seedPromotion = function () {

    var promotions = [
        {
            title: 'Ladies Free before 11',
            secret_code: 'SJEKFJS',
            start_date: '2016-03-02 21:00',
            end_date: '2016-03-02 23:30',
            filter: ['Female'],
            eventId: 1
        },
        {
            title: 'Frat Brother 50% Discount',
            secret_code: 'FJLSKE',
            start_date: '2016-05-11 22:00',
            end_date: '2016-05-12 2:00',
            filter: ['Male', 'College'],
            eventId: 3
        },
        {
            title: 'Valentine Singles - 50% off',
            secret_code: 'SORRY1',
            start_date: '2016-02-14 23:00',
            end_date: '2016-02-15 6:00',
            filter: ['Female', 'Male', 'Couple', 'Single'],
            eventId: 4
        },
        {
            title: 'Christmas Wear White Free Entrance',
            secret_code: 'CHRIST16',
            start_date: '2016-12-24 20:00',
            end_date: '2016-12-25 4:00',
            filter: ['All'],
            eventId: 5
        }
    ];


    var creatingPromotions = promotions.map(function (promotionObj) {
        return Promotion.create(promotionObj);
    });

    return Promise.all(creatingPromotions);

};

module.exports = seedPromotion;
