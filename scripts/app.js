'use strict';

angular.module('adminlte', ['ui.router', 'adminlte.base', 'adminlte.home'])

.config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/app');

}]);