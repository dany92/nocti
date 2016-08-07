var router = require('express').Router();
var db = require('../../../../server/db');
var EventAttendee = db.model('event_attendee');
module.exports = router;


router.get('/', function(req,res,next){
	EventAttendee.findAll({where: req.query})
	.then(eas => res.json(eas))
	.catch(next);
})


router.post('/', function(req,res,next){
	EventAttendee.findOrCreate({where: req.body, defaults:{}})
	.spread(function(ea, created){
		res.json(ea);
	})
	.catch(next);
})

router.delete('/', function(req,res,next){
	EventAttendee.destroy({where: req.query})
	.then(ea=> res.send('Event attendee destroyed'))
	.catch(next);
})

// router.param('id', function (req, res, next, id) {
// 	EventAttendee.findOne({where: req.body
// 		,include: [{ model: db.model('event')}, { model: db.model('user')}]})
// 	.then(function (eventAttendee) {
// 		if (eventAttendee) {
// 			req.eventAttendee = eventAttendee;
// 			next();
// 			return null; 
// 		} else {
// 			throw HttpError(404);
// 		}
// 	})
// 	.catch(next);
// });

// router.get('/:id', function(req,res,next){
// 	res.json(req.eventAttendee);
// })


// router.put('/:id', function(req,res,next){
// 	req.event.update(req.body)
// 	.then(updatedEventAttendee => res.json(updatedEventAttendee))
// 	.catch(next);
// })
