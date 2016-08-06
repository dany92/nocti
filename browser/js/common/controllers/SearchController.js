app.controller('SearchCtrl', function($scope, BusinessFactory, EventFactory){

	//Only the business that are within the limit should be returned. and the upper limit is 20 miles. The router will always return 20 miles and in the front end, you can filter the results.
	var bTotal;
	BusinessFactory.fetchAll()
	.then(businesses => {
		console.log("business in factory", businesses);
		bTotal = businesses;
		$scope.businesses = bTotal.within5.concat(bTotal.within10, bTotal.within15, bTotal.within20);
	})

	$scope.$watch('limit', function(){
		if($scope.limit === 5){
			$scope.businesses = bTotal.within5;
		}else if($scope.limit === 10){
			$scope.businesses = bTotal.within5.concat(bTotal.within10);
		}else if ($scope.limit === 15){
			$scope.businesses = bTotal.within5.concat(bTotal.within10, bTotal.within15);
		}else{
			$scope.businesses = bTotal.within5.concat(bTotal.within10, bTotal.within15, bTotal.within20);
		}
	})

	EventFactory.fetchAll()
	.then(events => $scope.events = events)

})
