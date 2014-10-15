'use strict';

(function() {

    function sidebarMenuCtrl($scope, sidebarMenuService) {
        sidebarMenuService.getSidebar()
            .success(function(data, status, headers, config) {
                data = data || {};
                $scope.menus = data.sidebar || [];
            });

    }

    sidebarMenuCtrl.$inject = ['$scope', 'sidebarMenuService'];


    angular.module('adminlte.base.layout')
        .controller('sidebarMenuCtrl', sidebarMenuCtrl);

})();
