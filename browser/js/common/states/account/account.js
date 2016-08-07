app.config(function ($stateProvider) {
    $stateProvider
    .state('account', {
        url: '/account',
        templateUrl: 'js/common/states/account/account.html',
        resolve: {
        	user: function (AuthService, UserFactory) {
                return AuthService.getLoggedInUser()
                .then(user=> UserFactory.fetchById(user.id));
            }
        },
        controller: function($scope, user, EventAttendeeFactory){
        	$scope.user = user;
        	$scope.events = user.events.filter(event=> !event.isPast);
        	$scope.history = user.events.filter(event=> event.isPast);
        	$scope.cancel = function(event){
        		EventAttendeeFactory.deleteEventAttendee({userId: user.id, eventId: event.id})
        		.then(function(){
        			var num = $scope.events.indexOf(event);
        			$scope.events.splice(num,1);
        		})
        	}
        }
 	})
})