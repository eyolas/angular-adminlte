'use strict';

(function() {

    function SidebarCtrl($scope, sidebarService) {
        sidebarService.getSidebar()
            .success(function(data, status, headers, config) {
                data = data || {};
                $scope.menus = data.sidebar || [];
            });

    }


    angular.module('adminlte.base.layout')
        .controller('sidebarCtrl', ['$scope', 'sidebarService', SidebarCtrl]);

})();
