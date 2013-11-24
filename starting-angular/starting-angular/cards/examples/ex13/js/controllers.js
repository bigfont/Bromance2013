function Ctrl($scope) {
    $scope.userAddress = 'Vancouver';

    $scope.update = function (input) {
        alert("Updated address to: " + input);
    };
    $scope.cancel = function (input) {
        alert("Cancelled changes to: " + input);
    };
}
