'use strict';

/**
 * @ngdoc function
 * @name expenserApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the expenserApp
 */
angular.module('expenserApp')
    .controller('AccountCtrl', ["$scope", "expense", function($scope, expenseService) {

        $scope.expenses = null;

        function setExpenses(expenses) {
            $scope.expenses = [];
            var resRows = expenses.rows;
            for (var i = 0; i < resRows.length;i++) {
                $scope.expenses.push(expenseService.formatExpenseObj(resRows.item(i)));
            }
        }
        expenseService.get().then(setExpenses);
    }]);
