cardApp.factory("personService", function($http){
    return{
        getCards : function(scope) {
            $http.get('http://localhost:1353/api/Cards').success(function(data) {
                scope.cards = data;
            });

            /*
            FOR INITIAL HARD-CODED DATA
            return [
                { "number": "2",  "suit": "Hearts", "numOrd":2 },
                { "number": "10", "suit": "Spades","numOrd":10},
                { "number": "5",   "suit": "Spades", "numOrd":5 },
                { "number": "Q",  "suit": "Hearts", "numOrd":12  },
            ]
            */
        },
        getCard : function(scope, cardNum, cardSuit) {
            /*
             FOR INITIAL HARD-CODED DATA
            return [
                { "number": cardNum,    "suit": cardSuit }
            ]
            */
            // http://localhost:1353/api/cards?number=2&suit=Clubs
            var url = "http://localhost:1353/api/cards?number=" + cardNum + "&suit=" + cardSuit;
            $http.get(url).success(function(data) {
                scope.card = data;
            });
        },
        // http://stackoverflow.com/questions/16227644/angularjs-factory-http-service
        // interesting URL style for post.
        addCard : function (scope, cardNum, cardSuit) {
            var url = "http://localhost:1353/api/cards?number=" + cardNum + "&suit=" + cardSuit;
            $http.post(url).success(function(data) {
                                scope.message = data;
                            });
        },
        deleteCard: function(scope, cardNum, cardSuit) {
            var url = "http://localhost:1353/api/cards?number=" + cardNum + "&suit=" + cardSuit;
            $http.delete(url).success(function(data) {
                                scope.message = data;
                            });
        }
}});
