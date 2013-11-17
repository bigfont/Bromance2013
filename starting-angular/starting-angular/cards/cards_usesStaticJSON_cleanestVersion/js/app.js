/*global angular */
var cardApp = angular.module('cardApp', ['ngRoute', 'ngSanitize', 'cardAppControllers', 'ui.bootstrap']).config(function ($routeProvider) {

    'use strict';

    $routeProvider.
        when("/home", {
            templateUrl: 'views/list.html',
            controller: 'ListCtrl'
        }).
        when('/home/number/:numberID/suit/:suitID', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
        }).
        when('/delete/number/:numberID/suit/:suitID', {
            templateUrl: 'views/confirm.html',
            controller: 'DeleteCtrl'
        }).
        when('/confirmation/number/:numberID/suit/:suitID/message/:msg', {
            templateUrl: 'views/confirm.html'
        }).
        when('/add', {
            templateUrl: 'views/add.html',
            controller: 'AddCtrl'
        }).
        when('/addconfirm/number/:numberID/suit/:suitID', {
            templateUrl: 'views/confirm.html',
            controller: 'AddConfirmCtrl'
        }).
        otherwise({ redirectTo: '/home' });
});