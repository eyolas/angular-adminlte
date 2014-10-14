'use strict';

angular.module('adminlte', ['ui.router', 'adminlte.base', "adminlte.home"])

.config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/app');

}])

.run(['$rootScope', '$window', function($rootScope, $window) {
    $window.themeLoads();
    $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
            //todo delete all file in js folder (sucks hard)
            $window.themeLoads();
        });
}]);
