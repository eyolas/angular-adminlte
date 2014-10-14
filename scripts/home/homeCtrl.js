'use strict';

function homeCtrl($scope) {
    $scope.$parent.title = "Blank page";
    $scope.$parent.subtitle = "Blank page";
}



/**
 * adminlte.home Module
 *
 * Description
 */
angular.module('adminlte.home')

.controller('homeCtrl', homeCtrl);
