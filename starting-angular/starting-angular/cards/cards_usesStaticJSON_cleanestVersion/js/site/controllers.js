/*global angular, cardApp */
var cardAppControllers = (function () {

    'use strict';

    /* 
        Find the documentation for this pattern here:
        http://docs.angularjs.org/tutorial/step_07#controllers
    */

    var cardAppControllers = angular.module('cardAppControllers', []);

    cardAppControllers.controller('AppCtrl', ['$scope', function ($scope) {
        $scope.title = "AngularJS Tutorial";
    }]);

    cardAppControllers.controller('ListCtrl', ['$scope', '$route', 'cardService', function ($scope, $route, cardService) {
        $scope.$route = $route;
        cardService.getCards($scope);
    }]);

    cardAppControllers.controller('DetailCtrl', ['$scope', '$routeParams', 'cardService', function ($scope, $routeParams, cardService) {
        cardService.getCard($scope, $routeParams.numberID, $routeParams.suitID);
    }]);

    cardAppControllers.controller('DeleteCtrl', ['$scope', '$routeParams', 'cardService', function ($scope, $routeParams, cardService) {
        cardService.deleteCard($scope, $routeParams.numberID, $routeParams.suitID);
    }]);

    cardAppControllers.controller('AddConfirmCtrl', ['$scope', '$routeParams', 'cardService', function ($scope, $routeParams, cardService) {
        cardService.addCard($scope, $routeParams.numberID, $routeParams.suitID);
    }]);

    cardAppControllers.controller('AddCtrl', ['$scope', '$location', '$route', '$routeParams', 'cardService', function ($scope, $location) {
        $scope.master = {};
        $scope.num = "";

        $scope.add = function (number, card) {
            //cardService.$addCard($scope, number,card.suit );
            $location.path('/addconfirm/number/' + number + '/suit/' + card.suit);
        };
        $scope.reset = function () {
            $scope.card = angular.copy($scope.master);
            $scope.number = angular.copy($scope.num);
        };
    }]);

    cardAppControllers.controller('TabsCtrl', ['$scope', '$location', function ($scope, $location) {

        $scope.tabs = [{
            title: "Card List",
            view: 'home'
        }, {
            title: "Add Card",
            view: 'add'
        }];

        $scope.changeView = function (view) {
            $location.path(view); // path not hash
        };

    }]);

    cardAppControllers.controller('DropdownCtrl', ['$scope', function ($scope) {
        $scope.items = [
            {
                text: "Download - updated 11/11 9:44AM",
                href: "cards.zip"
            },
            {
                text: "Web API Project for REST",
                href: "webapi.zip"
            }
        ];

    }]);

    cardAppControllers.controller('AlertDemoCtrl', ['$scope', function ($scope) {
        $scope.alerts = [
            { type: 'error', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        $scope.addAlert = function () {
            $scope.alerts.push({ msg: "Another alert!" });
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };

    }]);


    return cardAppControllers;

}());