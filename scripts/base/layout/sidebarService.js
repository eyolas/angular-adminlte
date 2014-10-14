'use strict';

angular.module('adminlte.base.layout')

    .service('sidebarService', ['$http', function($http) {
        return {
            getSidebar: function() {
                return $http.get('data/sidebar.json');
            }
        };
    }]);
