app.controller('MainCtrl', function ($scope, $rootScope, $state, AuthService, AUTH_EVENTS) {
    
    $rootScope.currentUser = null;
    $scope.getCurrentUser = function () {
        return AuthService.getLoggedInUser()
        .then(function (user) {
            $rootScope.currentUser = user;
        });
    }
    $scope.logout = function () {
        AuthService.logout()
        .then(function () {
            $state.go('login');
        })
    }
    $scope.$on(AUTH_EVENTS.loginSuccess, function (event, args) {
        $scope.getCurrentUser();
    })
    $scope.$on(AUTH_EVENTS.logoutSuccess, function (event, args) {
        $rootScope.currentUser = null;
    })
})