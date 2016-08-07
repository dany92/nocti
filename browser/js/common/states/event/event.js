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
        controller: function($scope, event, $rootScope, EventAttendeeFactory){
        	$scope.event = event;
            $scope.promotions = event.promotions;
            $scope.attendees = event.users.length;
            $scope.isPast = event.isPast;
            var currentUser = $rootScope.currentUser;
            $scope.isAttending = event.users.map(user=>user.email).indexOf(currentUser.email) !== -1;

            $scope.$watch('isAttending', function(newValue, oldValue) {
              if (newValue !== oldValue) {
                if($scope.isAttending){
                    EventAttendeeFactory.createEventAttendee({userId: currentUser.id, eventId: event.id});
                    $scope.attendees++;
                }else{
                    EventAttendeeFactory.deleteEventAttendee({userId: currentUser.id, eventId: event.id});
                    $scope.attendees--;
                }
              }
            });
        }
    })
})