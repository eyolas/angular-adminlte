'use strict';

(function() {
    function layoutCtrl($scope) {
        $scope.title = "default title";
        $scope.subtitle = "default subtitle";

    }

    layoutCtrl.$inject = ['$scope'];



    angular.module('adminlte.base.layout')
        .controller('layoutCtrl', layoutCtrl);
})();
