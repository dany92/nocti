app.config(function ($stateProvider) {
    $stateProvider
    .state('event', {
        url: '/events/:id',
        templateUrl: 'js/common/states/event/event.html',
        resolve: {
        	event: function(EventFactory, $stateParams){
        		return EventFactory.fetchById($stateParams.id);
        	 }
        },
        controller: function($scope, event){
        	$scope.event = event;
            $scope.promotions = event.promotions;
        }
    })
})