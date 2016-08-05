'use strict';
var router = require('express').Router();
module.exports = router;


// router.use('/users', require('./users'));
// router.use('/members', require('./members'));
// router.use('/businesses', require('./businesses'));
router.use('/events', require('./events'));
// router.use('/feeds', require('./feeds'));
// router.use('/promotions', require('./promotions'));




// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
