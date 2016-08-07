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
        controller: 'EventMangerCtrl'
    })
})