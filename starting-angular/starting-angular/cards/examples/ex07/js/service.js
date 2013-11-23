cardApp.factory("cardService", function ($http) {
    'use strict';
    return {
        getCards: function ($scope) {
            /*
            // LIVE WEB SERVICE
            $http.get('http://localhost:1353/api/Cards').success(function(data) {
                $scope.cards = data;
            });
            */
            $scope.cards = [
                { "number": "2", "suit": "Hearts", "numOrd": 2 },
                { "number": "10", "suit": "Spades", "numOrd": 10 },
                { "number": "5", "suit": "Spades", "numOrd": 5 },
                { "number": "Q", "suit": "Hearts", "numOrd": 12 }];
        },
    }
});
