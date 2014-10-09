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
              '@': {
                templateUrl: 'views/home.html'
              }
            }
            
        });

}]);
