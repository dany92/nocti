app.factory('EventAttendeeFactory', function ($http) {
    var getData = function(res){ return res.data};

    return {

        fetchAll: function (filter) {
            filter = filter || {};
            return $http.get('/api/event-attendees', {params: filter })
            .then (getData)
        },

        // fetchById: function (id) {
        //     return $http.get('/api/event-attendees/' + id)
        //     .then (getData)
        // },

        createEventAttendee: function (filter) {
            return $http.post('/api/event-attendees', filter)
            .then(getData)
        },

        // updateEventAttendee: function (id, filter) {
        //     return $http.put('/api/event-attendees/' + id, filter)
        //     .then(getData)
        // },

        deleteEventAttendee: function (filter) {
            console.log("in here", filter);
            return $http.delete('/api/event-attendees', {params: filter})
            .then(getData)
        }

    }
})
