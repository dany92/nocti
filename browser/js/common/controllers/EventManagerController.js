app.controller('EventMangerCtrl', function($scope, events, EventFactory, $stateParams){
    $scope.events = events;
    $scope.events.past = events.filter(e=> e.isPast);
    $scope.events.upcoming = events.filter(e=> !e.isPast);
    $scope.events.upcoming.forEach(upcoming => {
        upcoming.start_date = new Date(upcoming.start_date);
        upcoming.end_date = new Date(upcoming.end_date);
    })
    var businessId = $stateParams.id;
    
    $scope.editing = {};

    function createEvent(){
        $scope.editing.businessId = businessId;
        EventFactory.createEvent($scope.editing)
        .then(created=>$scope.events.upcoming.push(created))
    }

    function updateEvent(){
        EventFactory.updateEvent($scope.currentEvent.id, $scope.currentEvent)
        .then(updated => console.log(updated));
    }
     $scope.addOrUpdateEvent = function() {
        if ($scope.currentEvent) {
            $scope.currentEvent = $scope.editing;
            updateEvent();
        } else {
           createEvent();
        }
        $scope.editing = {};
    };


    $scope.onChange = function() {
        if ($scope.currentEvent) {
            $scope.editing = $scope.currentEvent;
        } else {
            $scope.editing = {};
        }
    };
})