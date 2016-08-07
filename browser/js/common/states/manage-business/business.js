app.config(function ($stateProvider) {
    $stateProvider
    .state('mybusiness', {
        url: '/mybusiness/:id',
        templateUrl: 'js/common/states/manage-business/business.html',
        resolve: {
        	business: function($stateParams, BusinessFactory){
        		return BusinessFactory.fetchById($stateParams.id);
        	 },
        	 events: function($stateParams, EventFactory){
        	 	return EventFactory.fetchAll({businessId: $stateParams.id});
        	 }
        },
        controller: function($scope, business, events, BusinessFactory){
        	$scope.business = business;
        	$scope.events = events;
            $scope.events.past = events.filter(e=> e.isPast);
            $scope.events.upcoming = events.filter(e=> !e.isPast);
            $scope.submit = function(){
                BusinessFactory.updateBusiness(business.id, $scope.business)
                .then(updated=> $scope.business = updated)
            }
        }
    })
    // .state('business.upcomingEvents', {
    // 	parent: 'business-details',
    // 	url: '/upcomingEvents',
    // 	templateUrl: 'js/common/states/business-details/business-details-events.html',
    // 	controller: function($scope){
    // 		$scope.events = $scope.$parent.events.filter(event => !event.isPast);
    // 	}
    // })
    // .state('business-pastEvents', {
    // 	parent: 'business-details',
    // 	url: '/pastEvents',
    // 	templateUrl: 'js/common/states/business-details/business-details-events.html',
    // 	controller: function($scope){
    // 		$scope.events = $scope.$parent.events.filter(event => event.isPast);
    // 	}
    // })

})