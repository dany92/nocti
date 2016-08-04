var db = require('../../server/db');
var Event = db.model('event');

var seedEvent = function () {

    // var users = [
    //     {
    //         username: 'joseph',
    //         email: 'testing@fsa.com',
    //         password: 'password',
    //         isRegistered: true
    //     },
    //     {
    //         username: 'obama',
    //         email: 'obama@gmail.com',
    //         password: 'potus',
    //         isRegistered: true,
    //         isAdmin: true
    //     },
    //     {
    //         username: 'Piper Halliwell',
    //         email: 'phalliwell@gmail.com',
    //         isRegistered: false
    //     }
    // ];


    // var creatingUsers = users.map(function (userObj) {
    //     return User.create(userObj);
    // });

    // return Promise.all(creatingUsers);

};

module.exports = seedEvent;