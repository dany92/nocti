app.config(function ($stateProvider) {
    $stateProvider
    .state('mybusiness.profile', {
        url: '/profile',
        templateUrl: 'js/common/states/manage-business/profile/profile.html',
        resolve: {
        	business: function($stateParams, BusinessFactory){
        		return BusinessFactory.fetchById($stateParams.id);
        	 }
        },
        controller: function($scope, business, BusinessFactory){
        	$scope.business = business;
            $scope.submit = function(){
                BusinessFactory.updateBusiness(business.id, $scope.business)
                .then(updated=> $scope.business = updated)
            }
        }
    })
    
})