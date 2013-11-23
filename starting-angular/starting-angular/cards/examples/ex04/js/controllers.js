function AppCtrl($scope) {
    $scope.title = "AngularJS Hello World!";

    // Define a new model called 'cards' with JSON.
    $scope.cards = [
        { "number": "2", "suit": "Hearts", "numOrd": 2 },
        { "number": "10", "suit": "Spades", "numOrd": 10 },
        { "number": "5", "suit": "Spades", "numOrd": 5 },
        { "number": "Q", "suit": "Hearts", "numOrd": 12 }
    ];
}
// Inject scope into the controller.
AppCtrl.$inject = ['$scope'];
