var router = require('express').Router();
var db = require('../../../../server/db');
var Business = db.model('business');
var _ = require('lodash');
module.exports = router;


router.get('/', function(req,res,next){
	//category will be req.query
	Business.findAll({where: req.query})
	.then(businesses => {
		var filtered = sortBusiness(businesses, {latitude: 40.729749, longitude: -74.033530});
		// console.log("filtered!!!", filtered);
		res.json(filtered);
	})
	.catch(next);
})

function sortBusiness(businesses, currentCoor){
	var filtered = _.filter(businesses, function(business){
			return business.getDistance(currentCoor)<=4;
		})
	return filtered;
}



router.param('id', function (req, res, next, id) {
	Business.findById(id)
	.then(function (business) {
		if (business) {
			req.business = business;
			next();
			return null; 
		} else {
			throw HttpError(404);
		}
	})
	.catch(next);
});

router.get('/:id', function(req,res,next){
	res.json(req.business);
})

router.post('/', function(req,res,next){
	Business.create(req.body)
	.then(createdBusiness => res.json(createdBusiness))
	.catch(next);
})

router.put('/:id', function(req,res,next){
	req.business.update(req.body)
	.then(updatedBusiness => res.json(updatedBusiness))
	.catch(next);
})

router.delete('/:id', function(req,res,next){
	req.business.destroy()
	.then(destroyedBusiness => res.send('Business Destroyed'))
	.catch(next);
})