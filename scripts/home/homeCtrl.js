'use strict';

(function() {

    function homeCtrl($scope) {
        $scope.$parent.title = 'Blank page';
        $scope.$parent.subtitle = 'Blank page';
    }

    homeCtrl.$inject = ['$scope'];


    /**
     * adminlte.home Module
     *
     * Description
     */
    angular.module('adminlte.home')

    .controller('homeCtrl', homeCtrl);


    
})();
