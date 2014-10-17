'use strict';

(function() {

    function sidebarMenuService($http) {
        function getSidebar() {
            return $http.get('data/sidebar.json');
        }


        return {
            getSidebar: getSidebar
        };

        
    }

    sidebarMenuService.$inject = ['$http'];


    angular.module('adminlte.base.layout')

    .service('sidebarMenuService', sidebarMenuService);


})();
