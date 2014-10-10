'use strict';

function layoutCtrl($scope) {
    $scope.title = "default title";
    $scope.subtitle = "default subtitle";

}


angular.module('adminlte.base.layout')
    .controller('layoutCtrl', layoutCtrl);
