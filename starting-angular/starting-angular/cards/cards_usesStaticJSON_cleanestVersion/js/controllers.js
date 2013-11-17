/*global window, angular*/
var cardApp = (function (window) {

    /* 
     Place the controller declarations within an immediately invoked functional expression (IIFE), 
     to ensure that they are private (i.e. ensure they are not part of THE GLOBAL OBJECT,
     to avoid having to repeat 'use strict' for each function, and
     to improve performance (maybe).
     */

    'use strict';

    function AppCtrl($scope) {
        $scope.title = "AngularJS Tutorial";
    }
    AppCtrl.$inject = ['$scope'];

    function ListCtrl($scope, $route, cardService) {
        $scope.$route = $route;
        cardService.getCards($scope);
    }
    ListCtrl.$inject = ['$scope', '$route', 'cardService'];

    function DetailCtrl($scope, $routeParams, cardService) {
        cardService.getCard($scope, $routeParams.numberID, $routeParams.suitID);
    }
    DetailCtrl.$inject = ['$scope', '$routeParams', 'cardService'];

    function DeleteCtrl($scope, $routeParams, cardService) {
        cardService.deleteCard($scope, $routeParams.numberID, $routeParams.suitID);
    }
    DeleteCtrl.$inject = ['$scope', '$routeParams', 'cardService'];

    function AddConfirmCtrl($scope, $routeParams, cardService) {
        cardService.addCard($scope, $routeParams.numberID, $routeParams.suitID);
    }
    AddConfirmCtrl.$inject = ['$scope', '$routeParams', 'cardService'];

    function AddCtrl($scope, $location) {
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
    }
    AddCtrl.$inject = ['$scope', '$location', '$route', '$routeParams', 'cardService'];

    function AccordionDemoCtrl($scope) {
        $scope.oneAtATime = true;
        $scope.groups = [{
            title: "Dynamic Group Header - 1",
            content: "Dynamic Group Body - 1"
        }, {
            title: "Dynamic Group Header - 2",
            content: "Dynamic Group Body - 2"
        }];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function () {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };
    }

    function DropdownCtrl($scope) {
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
    }

    /*
        add some controllers to the DOM
        because they are in ng-controller markup
    */
    window.AppCtrl = AppCtrl;
    window.AccordionDemoCtrl = AccordionDemoCtrl;
    window.DropdownCtrl = DropdownCtrl;

    // add the cardApp module
    var cardApp = angular.module('cardApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']).config(function ($routeProvider) {
        $routeProvider.
            when("/home", {
                templateUrl: 'views/list.html',
                controller: ListCtrl
            }).
            when('/home/number/:numberID/suit/:suitID', {
                templateUrl: 'views/detail.html',
                controller: DetailCtrl
            }).
            when('/delete/number/:numberID/suit/:suitID', {
                templateUrl: 'views/confirm.html',
                controller: DeleteCtrl
            }).
            when('/confirmation/number/:numberID/suit/:suitID/message/:msg', {
                templateUrl: 'views/confirm.html'
            }).
            when('/add', {
                templateUrl: 'views/add.html',
                controller: AddCtrl
            }).
            when('/addconfirm/number/:numberID/suit/:suitID', {
                templateUrl: 'views/confirm.html',
                controller: AddConfirmCtrl
            }).
            otherwise({ redirectTo: '/home' });
    });

    return cardApp;

}(window));

