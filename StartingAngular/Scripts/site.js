(function () {

    var myApp = angular.module('myApp', []);

    // This isn't working for me. 
    ////myApp.config(['$routeProvider', function ($routeProvider) {

    ////    /**
    ////     * $routeProvider
    ////     */
    ////    $routeProvider
    ////    .when('/', {
    ////        templateUrl: '_views/main.html'
    ////    })
    ////    .otherwise({
    ////        redirectTo: '/'
    ////    });

    ////}]);


    myApp.controller('MainCtrl', ['$scope', 'Math', 'Server', function ($scope, Math, Server) {

        $scope.text = 'Hello, Angular fanatic.';

        $scope.greeting = 'Todd Motto';

        // use a filter in a controller
        $scope.numbers = [10, 25, 35, 45, 60, 80, 100];

        $scope.lowerBound = 42;

        $scope.greaterThanNum = function (item) {
            return item > $scope.lowerBound;
        };


        // use a service
        var a = 12;
        var b = 24;

        // outputs 288
        var result = Math.multiply(a, b);
        window.alert(result);

        // use a factory
        var jsonGet = 'http://localhost:2298/_ajax/user.html';
        var jsonPost = 'http://myserver/postURL';
        Server.get(jsonGet);
        Server.post(jsonPost);

    }]);

    myApp.controller('UserCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.user = {};
        $scope.user.details = {};
        $scope.user.details.username = '';
        $scope.user.details.id = 0;

        $http({ method: 'get', url: 'http://localhost:2298/_ajax/user.html' })
            .success(function (data, status, headers, config) {
                $scope.user.details.username = data.user.name;
                $scope.user.details.id = data.user.id;
            })
            .error(function () {
                // do something
            });



    }]);

    myApp.controller('EmailsCtrl', ['$scope', function ($scope) {

        // add a scope function
        $scope.deleteEmail = function (index) {
            $scope.emails.messages.splice(index, 1)
        };

        // create a emails Object
        $scope.emails = {};

        // pretend data we just got back from the server
        // this is an ARRAY of OBJECTS
        $scope.emails.messages = [{
            "from": "Steve Jobs",
            "subject": "I think I'm holding my phone wrong :/",
            "sent": "2013-10-01T08:05:59Z"
        }, {
            "from": "Ellie Goulding",
            "subject": "I've got Starry Eyes, lulz",
            "sent": "2013-09-21T19:45:00Z"
        }, {
            "from": "Michael Stipe",
            "subject": "Everybody hurts, sometimes.",
            "sent": "2013-09-12T11:38:30Z"
        }, {
            "from": "Jeremy Clarkson",
            "subject": "Think I've found the best car... In the world",
            "sent": "2013-09-03T13:15:11Z"
        }];

    }]);


    // automatic hyphen splitting
    myApp.directive('customButton', function () {
        return {
            restrict: 'C',
            replace: true,
            transclude: true,
            templateUrl: '_templates/customButton.html',
            link: function (scope, element, attrs) {
                // DOM manipulation/events here!
            }
        };
    });

    myApp.service('Math', function () {
        this.multiply = function (x, y) {
            return x * y;
        };
    });

    myApp.factory('Server', ['$http', function ($http) {
        return {
            get: function (url) {
                return $http.get(url);
            },
            post: function (url) {
                return $http.post(url);
            },
        };
    }]);

    myApp.filter('reverse', function () {

        return function (input, uppercase) {
            var out = '';
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            if (uppercase) {
                out = out.toUpperCase();
            }
            return out;
        }

    });

}());



