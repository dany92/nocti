app.factory('EventFactory', function ($http) {
    var getData = function(res){ return res.data};

    return {

        fetchAll: function (filter) {
            filter = filter || {};
            return $http.get('/api/events', {params: filter })
            .then (getData)
        },

        fetchById: function (id) {
            return $http.get('/api/events/' + id)
            .then (getData)
        },

        createEvent: function (body) {
            return $http.post('/api/events', body)
            .then(getData)
        },

        updateEvent: function (id, body) {
            return $http.put('/api/events/' + id, body)
            .then(getData)
        },

        deleteEvent: function (id) {
            return $http.delete('/api/events/' + id)
            .then(getData)
        }

    }
})
