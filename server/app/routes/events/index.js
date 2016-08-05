var router = require('express').Router();
var db = require('../../../../server/db');
var Event = db.model('event');
module.exports = router;


router.get('/', function(req,res,next){
	Event.findAll({where: req.query})
	.then(events => res.json(events))
	.catch(next);
})

router.param('id', function (req, res, next, id) {
	Event.findById(id)
	.then(function (event) {
		if (event) {
			req.event = event;
			next();
			return null; 
		} else {
			throw HttpError(404);
		}
	})
	.catch(next);
});

router.get('/:id', function(req,res,next){
	res.json(req.event);
})

router.post('/', function(req,res,next){
	Event.create(req.body)
	.then(createdEvent => res.json(createdEvent))
	.catch(next);
})

router.put('/:id', function(req,res,next){
	req.event.update(req.body)
	.then(updatedEvent => res.json(updatedEvent))
	.catch(next);
})

router.delete('/:id', function(req,res,next){
	req.event.destroy()
	.then(destroyedEvent => res.send('Event Destroyed'))
	.catch(next);
})