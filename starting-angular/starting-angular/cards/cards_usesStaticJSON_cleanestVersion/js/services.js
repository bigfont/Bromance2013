cardApp.factory("cardService", function ($http) {
    return {
        getCards: function (scope) {
            /*
            // LIVE WEB SERVICE
            $http.get('http://localhost:1353/api/Cards').success(function(data) {
                scope.cards = data;
            });
            */
            scope.cards = [
                { "number": "2", "suit": "Hearts", "numOrd": 2 },
                { "number": "10", "suit": "Spades", "numOrd": 10 },
                { "number": "5", "suit": "Spades", "numOrd": 5 },
                { "number": "Q", "suit": "Hearts", "numOrd": 12 }
            ];
        },
        getCard: function (scope, cardNum, cardSuit) {
            /*
             // LIVE WEB SERVICE
             var url = "http://localhost:1353/api/cards?number=" + cardNum + "&suit=" + cardSuit;
             $http.get(url).success(function(data) {
             scope.card = data;
             }); */
            scope.card = { "number": cardNum, "suit": cardSuit };
        },
        addCard: function (scope, cardNum, cardSuit) {
            /*
             // LIVE WEB SERVICE
            var url = "http://localhost:1353/api/cards?number=" + cardNum + "&suit=" + cardSuit;
            $http.post(url).success(function(data) {
                                scope.message = data;
                            });
            */
            scope.message = {
                "Msg": cardNum.toUpperCase() + ' '
                     + cardSuit + ' has been added.'
            };
        },
        deleteCard: function (scope, cardNum, cardSuit) {
            /*
            // LIVE WEB SERVICE

            var url = "http://localhost:1353/api/cards?number=" + cardNum + "&suit=" + cardSuit;
            $http.delete(url).success(function(data) {
                                scope.message = data;
                            });
             */
            scope.message = {
                "Msg": cardNum.toUpperCase() + ' '
                     + cardSuit + ' has been deleted.'
            };
        }
    }
});
