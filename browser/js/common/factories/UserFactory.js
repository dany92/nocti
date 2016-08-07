app.factory('UserFactory', function ($http) {
    var getData = function(res){ return res.data};

    return {

        fetchAll: function () {
            return $http.get('/api/users')
            .then (getData)
        },

        fetchById: function (id) {
            return $http.get('/api/users/' + id)
            .then (getData)
        },

        createUser: function (body) {
            return $http.post('/api/users', body)
            .then(getData)
        },

        updateUser: function (id, body) {
            return $http.put('/api/users/' + id, body)
            .then(getData)
        },

        deleteUser: function (id) {
            return $http.delete('/api/users/' + id)
            .then(getData)
        }

    }
})
