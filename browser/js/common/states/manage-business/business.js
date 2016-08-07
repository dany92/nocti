app.config(function ($stateProvider) {
    $stateProvider
    .state('mybusiness', {
        url: '/mybusiness/:id',
        templateUrl: 'js/common/states/manage-business/business.html'
    })

})