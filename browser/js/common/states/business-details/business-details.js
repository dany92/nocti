app.config(function ($stateProvider) {
    $stateProvider
    .state('business-details', {
        url: '/businesses/:id',
        templateUrl: 'js/common/states/business-details/business-details.html',
        resolve: {
        	business: function($stateParams, BusinessFactory){
        		return BusinessFactory.fetchById($stateParams.id);
        	 },
        	 events: function($stateParams, EventFactory){
        	 	return EventFactory.fetchAll({businessId: $stateParams.id});
        	 }
        },
        controller: function($scope, business, events){
        	$scope.business = business;
        	$scope.events = events;
        	// $scope.pastEvents = events.filter(event => event.isPast);
        	// $scope.upcomingEvents = events.filter(event => !event.isPast);
        }
    })
    .state('business-upcomingEvents', {
    	parent: 'business-details',
    	url: '/upcomingEvents',
    	templateUrl: 'js/common/states/business-details/business-details-events.html',
    	controller: function($scope){
    		$scope.events = $scope.$parent.events.filter(event => !event.isPast);
    	}
    })
    .state('business-pastEvents', {
    	parent: 'business-details',
    	url: '/pastEvents',
    	templateUrl: 'js/common/states/business-details/business-details-events.html',
    	controller: function($scope){
    		$scope.events = $scope.$parent.events.filter(event => event.isPast);
    	}
    })

})