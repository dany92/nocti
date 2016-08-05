app.factory('FeedFactory', function ($http) {
    var getData = function(res){ return res.data};

    return {

        fetchAll: function () {
            return $http.get('/api/feeds')
            .then (getData)
        },

        // fetchByCategory: function (category) {
        //     return $http.get('/api/feeds/category/' + category)
        //     .then (getData)
        // },

        fetchById: function (id) {
            return $http.get('/api/feeds/' + id)
            .then (getData)
        },

        createFeed: function (body) {
            return $http.post('/api/feeds', body)
            .then(getData)
        },

        updateFeed: function (id, body) {
            return $http.put('/api/feeds/' + id, body)
            .then(getData)
        },

        deleteFeed: function (id) {
            return $http.delete('/api/feeds/' + id)
            .then(getData)
        }

    }
})
