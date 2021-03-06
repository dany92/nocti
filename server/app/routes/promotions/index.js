var router = require('express').Router();
var db = require('../../../../server/db');
var Promotion = db.model('promotion');
module.exports = router;


router.get('/', function(req,res,next){
	Promotion.findAll({where: req.query})
	.then(promotions => res.json(promotions))
	.catch(next);
})

router.param('id', function (req, res, next, id) {
	Promotion.findById(id)
	.then(function (promotion) {
		if (promotion) {
			req.promotion = promotion;
			next();
			return null; 
		} else {
			throw HttpError(404);
		}
	})
	.catch(next);
});

router.get('/:id', function(req,res,next){
	res.json(req.promotion);
})

router.post('/', function(req,res,next){
	Promotion.create(req.body)
	.then(createdPromotion => res.json(createdPromotion))
	.catch(next);
})

router.put('/:id', function(req,res,next){
	req.promotion.update(req.body)
	.then(updatedPromotion => res.json(updatedPromotion))
	.catch(next);
})

router.delete('/:id', function(req,res,next){
	req.promotion.destroy()
	.then(destroyedPromotion => res.send('Promotion Destroyed'))
	.catch(next);
})