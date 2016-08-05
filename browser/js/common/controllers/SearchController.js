app.controller('SearchCtrl', function($scope, BusinessFactory, EventFactory){
	
	BusinessFactory.fetchAll()
	.then(businesses => $scope.businesses = businesses)

	EventFactory.fetchAll()
	.then(events => $scope.events = events)

	
})
