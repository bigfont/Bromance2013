/*global angular */

var cardAppControllers = (function () {
    'use strict';
    var cardAppControllers = angular.module('cardAppControllers', []);

    // Declare the application controller and inject the scope reference.
    cardAppControllers.controller('AppCtrl', ['$scope', function ($scope) {
        // Define the title model.
        $scope.title = "AngularJS Tutorial";
    }]);
    // Declare the controller that populates 'list.html' with data and inject the scope.
    cardAppControllers.controller('ListCtrl', ['$scope',
        function ($scope) {
            // Define the cards model.
            $scope.cards = [
                { "number": "2", "suit": "Hearts", "numOrd": 2 },
                { "number": "10", "suit": "Spades", "numOrd": 10 },
                { "number": "5", "suit": "Spades", "numOrd": 5 },
                { "number": "Q", "suit": "Hearts", "numOrd": 12 }];
        }]);
    return cardAppControllers;
}());
