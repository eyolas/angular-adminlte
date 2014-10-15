'use strict';


(function() {
    function config($stateProvider) {
        $stateProvider
            .state('app.home', {
                url: '/app',
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            });
    }

    config.$inject = ['$stateProvider'];

    /**
     * adminlte.home Module
     *
     * Description
     */
    angular.module('adminlte.home', [])

    .config(config);
})();
