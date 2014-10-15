'use strict';

(function() {

    function sidebarService($http) {
        function getSidebar() {
            return $http.get('data/sidebar.json');
        }


        return {
            getSidebar: getSidebar
        };

        
    }

    sidebarService.$inject = ['$http'];


    angular.module('adminlte.base.layout')

    .service('sidebarService', sidebarService);


})();
