/*global angular */

var cardAppControllers = (function () {
    'use strict';
    var cardAppControllers = angular.module('cardAppControllers', []);

    // Declare the application controller and inject the scope reference.
    cardAppControllers.controller('AppCtrl', ['$scope', function ($scope) {
        // Define the title model.
        $scope.title = "AngularJS Tutorial";
    }]);
    // Inject the scope and new cardService reference into the controller.
    cardAppControllers.controller('ListCtrl', ['$scope', 'cardService', function ($scope, cardService) {
        // Define the cards model.
        cardService.getCards($scope);
    }]);

    return cardAppControllers;
}());
