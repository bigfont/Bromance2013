/*global cardApp*/
/*jslint unparam: true */

cardApp.directive('integer', function () {

    'use strict';

    // Implements custom validation for card number.
    var INTEGER_REGEXP = /^([aAkKjJQq23456789]{1}|(10){1})$/;

    return {

        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                if (INTEGER_REGEXP.test(viewValue)) {
                    // it is valid
                    ctrl.$setValidity('integer', true);
                    return viewValue;
                }

                // it is invalid, return undefined (no model update)
                ctrl.$setValidity('integer', false);
                return undefined;

            });
        }
    };
});
