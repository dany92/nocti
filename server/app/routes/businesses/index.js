var router = require('express').Router();
var db = require('../../../../server/db');
var Business = db.model('business');
var _ = require('lodash');
module.exports = router;


router.get('/', function(req,res,next){
	//category will be req.query
	var position = JSON.parse(req.cookies.position);
	Business.findAll({where: req.query, include: [{
    model: db.model('event')}]})
	.then(businesses => {
		var filtered = sortBusiness(businesses, position);
		res.json(filtered);
	})
	.catch(next);
})
// latitude: 40.729749, longitude: -74.033530

function sortBusiness(businesses, currentCoor){
	businesses.forEach(business=> {
		business.distance = business.getDistance(currentCoor);
	})
	var result = _.chain(businesses)
	.filter(function(business){
		return business.distance <= 20;
	})
	.sortBy(function(filtered){return filtered.distance})
	.groupBy(function(sorted){
		if(sorted.distance <= 5){
			return 'within5'
		}else if (sorted.distance <= 10){
			return 'within10'
		}else if (sorted.distance <= 15){
			return 'within15'
		}else{
			return 'within20'
		}
	})
	
	return result;
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