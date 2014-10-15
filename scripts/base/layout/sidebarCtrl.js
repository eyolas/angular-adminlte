'use strict';

(function() {

    function sidebarCtrl($scope, sidebarService) {
        sidebarService.getSidebar()
            .success(function(data, status, headers, config) {
                data = data || {};
                $scope.menus = data.sidebar || [];
            });

    }

    sidebarCtrl.$inject = ['$scope', 'sidebarService'];


    angular.module('adminlte.base.layout')
        .controller('sidebarCtrl', sidebarCtrl);

})();
