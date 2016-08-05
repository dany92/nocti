app.config(function ($stateProvider) {
    $stateProvider
    .state('search', {
        url: '/search',
        templateUrl: 'js/common/states/search/search.html',
        controller: 'SearchCtrl'
    })
    .state('search.businesses', {
    	url: '/businesses',
    	templateUrl: 'js/common/states/search/search-businesses.html'
    })
    .state('search.events', {
    	url: '/events',
    	templateUrl: 'js/common/states/search/search-events.html'
    });
});

