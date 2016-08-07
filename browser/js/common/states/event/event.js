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
            var currentUser = $rootScope.currentUser;
            console.log("ATTENDEES",event.users);
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

            // $scope.$watch('isAttending', function(){
            //     console.log("switched!!");
            //     if($scope.isAttending){
            //         EventAttendeeFactory.createEventAttendee({userId: currentUser.id, eventId: event.id});
            //     }else{
            //         EventAttendeeFactory.deleteEventAttendee({userId: currentUser.id, eventId: event.id});
            //     }
            // })
            


        }
    })
})