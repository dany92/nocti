var router = require('express').Router();
var db = require('../../../../server/db');
var Feed = db.model('feed');
module.exports = router;


router.get('/', function(req,res,next){
	Feed.findAll({where: req.query})
	.then(feeds => res.json(feeds))
	.catch(next);
})

router.param('id', function (req, res, next, id) {
	Feed.findById(id)
	.then(function (feed) {
		if (feed) {
			req.feed = feed;
			next();
			return null; 
		} else {
			throw HttpError(404);
		}
	})
	.catch(next);
});

router.get('/:id', function(req,res,next){
	res.json(req.feed);
})

router.post('/', function(req,res,next){
	Feed.create(req.body)
	.then(createdFeed => res.json(createdFeed))
	.catch(next);
})

router.put('/:id', function(req,res,next){
	req.feed.update(req.body)
	.then(updatedFeed => res.json(updatedFeed))
	.catch(next);
})

router.delete('/:id', function(req,res,next){
	req.feed.destroy()
	.then(destroyedFeed => res.send('Feed Destroyed'))
	.catch(next);
})