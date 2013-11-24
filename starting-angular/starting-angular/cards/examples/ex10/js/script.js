/*global window */

function Ctrl($scope) {

    'use strict';

    $scope.userAddress = 'Vancouver';

    $scope.update = function (input) {
        window.alert("Updated address to: " + input);
    };
}
