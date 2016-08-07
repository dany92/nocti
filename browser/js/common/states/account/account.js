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
        controller: function($scope, user){
        	$scope.user = user;
        	$scope.events = user.events;
        }
 	})
})