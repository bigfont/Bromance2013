var deepLinking = angular.module('cardApp', ['ngRoute', 'ngSanitize'])
  .config(function($routeProvider) {
        console.log('iinside module declaration');
        $routeProvider.
            when("/home", {
                templateUrl: 'templates/list.html',
                controller: ListCtrl}
            ).
            when('/home/number/:numberID/suit/:suitID', {
                templateUrl: 'templates/detail.html',
                controller: DetailCtrl
            }).
            when('/delete/number/:numberID/suit/:suitID', {
                templateUrl: 'templates/confirm.html',
                controller: DeleteCtrl
            }).
            when('/confirmation/number/:numberID/suit/:suitID/message/:msg', {
                templateUrl: 'templates/confirm.html',
                controller: ConfirmCtrl
            }).
            when('/add', {
                templateUrl: 'templates/add.html',
                controller: AddCtrl
            }).
            when('/addconfirm/number/:numberID/suit/:suitID', {
                templateUrl: 'templates/confirm.html',
                controller: AddConfirmCtrl
            }).
            otherwise({redirectTo: '/home'});
  });

// http://docs.angularjs.org/guide/dev_guide.services.injecting_controllers
// sets services listed in the array to inject.
AppCntl.$inject = ['$scope']
function AppCntl($scope) {

}

AppCntl.$inject = ['$scope', '$route', 'personService']
function ListCtrl($scope,  $route, personService) {
    $scope.$route = $route;
    personService.getCards($scope);
}

var INTEGER_REGEXP = /^([aAkKjJQq23456789]{1}|(10){1})$/;
deepLinking.directive('integer', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {
                if (INTEGER_REGEXP.test(viewValue)) {
                    // it is valid
                    ctrl.$setValidity('integer', true);
                    return viewValue;
                } else {
                    // it is invalid, return undefined (no model update)
                    ctrl.$setValidity('integer', false);
                    return undefined;
                }
            });
        }
    };
});

ConfirmCtrl.$inject = ['$scope', '$routeParams']
function ConfirmCtrl($scope, $routeParams) {
    /*
     FOR HARD CODED DATA
     $scope.card = {};
     $scope.card.suit = $routeParams.suitID;
     $scope.card.number = $routeParams.numberID;
     */
}

DetailCtrl.$inject = ['$scope','$routeParams','personService']
function DetailCtrl($scope, $routeParams, personService) {
    personService.getCard($scope, $routeParams.numberID, $routeParams.suitID );

    /*
    FOR HARD CODED DATA
    $scope.card = {};
    $scope.card.suit = $routeParams.suitID;
    $scope.card.number = $routeParams.numberID;
    */
}

DeleteCtrl.$inject = ['$scope', '$location', '$route', '$routeParams','personService']
function DeleteCtrl($scope, $location, $route, $routeParams, personService) {
    personService.getCard($scope, $routeParams.numberID, $routeParams.suitID);

    /* comment this out for non-live json */
    personService.deleteCard($scope, $routeParams.numberID, $routeParams.suitID);

    /*
    $scope.message = "Deletion Confirmed: ";
    $location.path('/confirm/number/' + $routeParams.numberID
                 + '/suit/' +  $routeParams.suitID);
    */
}

AddConfirmCtrl.$inject = ['$scope', '$location','$route', '$routeParams','personService']
function AddConfirmCtrl($scope, $location, $route, $routeParams, personService) { // **** DO I NEED LOCATION? YES...for redirect.
    personService.addCard($scope, $routeParams.numberID,$routeParams.suitID );
}

AddCtrl.$inject = ['$scope', '$location','$route', '$routeParams','personService']
function AddCtrl($scope, $location, personService) { // **** DO I NEED LOCATION? YES...for redirect.
    $scope.master = {};
    $scope.num    = "";

    $scope.add = function(number,card) {
        //personService.$addCard($scope, number,card.suit );
        $location.path('/addconfirm/number/' + number + '/suit/' + card.suit);
    };

    $scope.reset = function() {
        $scope.card = angular.copy($scope.master);
        $scope.number = angular.copy($scope.num);
    };
}