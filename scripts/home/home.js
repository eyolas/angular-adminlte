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
            views: {
                '@app': {
                    templateUrl: 'views/home.html',
                    controller: 'homeCtrl'
                }
            }

        });

}]);
