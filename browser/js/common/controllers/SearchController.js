app.controller('SearchCtrl', function($scope, BusinessFactory, EventFactory){

	//Only the business that are within the limit should be returned. and the upper limit is 20 miles. The router will always return 20 miles and in the front end, you can filter the results.
	BusinessFactory.fetchAll()
	.then(businesses => {
		console.log("business in factory", businesses);
		console.log(businesses[0])
		$scope.businesses = businesses
	})

	EventFactory.fetchAll()
	.then(events => $scope.events = events)

})
