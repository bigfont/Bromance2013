/*global window, angular*/
var cardApp = (function (window) {

    'use strict';

    function AppCtrl($scope) {
        $scope.title = "AngularJS Tutorial";
    }
    AppCtrl.$inject = ['$scope'];
    window.AppCtrl = AppCtrl; // add AppCtrl to the THE GLOBAL OBJECT

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

    var cardApp = angular.module('cardApp', ['ngRoute', 'ngSanitize']).config(function ($routeProvider) {
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

