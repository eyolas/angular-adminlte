'use strict';

/**
 * adminlte.home Module
 *
 * Description
 */
angular.module('adminlte.home', [])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('app.home', {
            url: '/app',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        });

}]);
