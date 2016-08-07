app.config(function ($stateProvider) {
    $stateProvider
    .state('mybusiness.events', {
        url: '/events',
        templateUrl: 'js/common/states/manage-business/events/events.html',
        resolve: {
        	events: function($stateParams, EventFactory){
                return EventFactory.fetchAll({businessId: $stateParams.id});
            }
        },
        controller: function($scope, events, EventFactory, $stateParams){
        	$scope.events = events;
            $scope.events.past = events.filter(e=> e.isPast);
            $scope.events.upcoming = events.filter(e=> !e.isPast);
            var businessId = $stateParams.id
            $scope.submit = function(){
                $scope.newEvent.businessId = businessId;
                EventFactory.createEvent($scope.newEvent)
                .then(created=>$scope.events.upcoming.push(created))
            }
        }
    })
    
})