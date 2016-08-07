app.factory('BusinessFactory', function ($http) {
    var getData = function(res){ return res.data};

    return {

        fetchAll: function (filter) {
            filter = filter || {};
            return $http.get('/api/businesses', {params: filter})
            .then (getData)
        },

        fetchById: function (id) {
            return $http.get('/api/businesses/' + id)
            .then (getData)
        },

        createBusiness: function (body) {
            return $http.post('/api/businesses', body)
            .then(getData)
        },

        updateBusiness: function (id, body) {
            return $http.put('/api/businesses/' + id, body)
            .then(getData)
        },

        deleteBusiness: function (id) {
            return $http.delete('/api/businesses/' + id)
            .then(getData)
        }

    }
})
