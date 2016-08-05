var router = require('express').Router();
var db = require('../../../../server/db');
var User = db.model('user');
module.exports = router;


router.get('/', function(req,res,next){
	User.findAll({where: req.query})
	.then(users => res.json(users))
	.catch(next);
})

router.param('id', function (req, res, next, id) {
	User.findById(id)
	.then(function (user) {
		if (user) {
			req.user = user;
			next();
			return null; 
		} else {
			throw HttpError(404);
		}
	})
	.catch(next);
});

router.get('/:id', function(req,res,next){
	res.json(req.user);
})

router.post('/', function(req,res,next){
	User.create(req.body)
	.then(createdUser => res.json(createdUser))
	.catch(next);
})

router.put('/:id', function(req,res,next){
	req.user.update(req.body)
	.then(updatedUser => res.json(updatedUser))
	.catch(next);
})

router.delete('/:id', function(req,res,next){
	req.user.destroy()
	.then(destroyedUser => res.send('User Destroyed'))
	.catch(next);
})