app.factory('promotionFactory', function ($http) {
    var getData = function(res){ return res.data};

    return {

        fetchAll: function () {
            return $http.get('/api/promotions')
            .then (getData)
        },

        // fetchByCategory: function (category) {
        //     return $http.get('/api/promotions/category/' + category)
        //     .then (getData)
        // },

        fetchById: function (id) {
            return $http.get('/api/promotions/' + id)
            .then (getData)
        },

        createPromotion: function (body) {
            return $http.post('/api/promotions', body)
            .then(getData)
        },

        updatePromotion: function (id, body) {
            return $http.put('/api/promotions/' + id, body)
            .then(getData)
        },

        deletePromotion: function (id) {
            return $http.delete('/api/promotions/' + id)
            .then(getData)
        }

    }
})
