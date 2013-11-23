function Ctrl($scope) {
    $scope.userAddress = 'Vancouver';

    $scope.update = function (input) {
        alert("Updated address to: " + input);
    };
}
