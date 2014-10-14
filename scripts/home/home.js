/**
 * adminlte.home Module
 *
 * Description
 */
angular.module('adminlte.home', [])

.config(['$stateProvider', function($stateProvider) {
    console.log("home page")
    $stateProvider
        .state('app.home', {
            url: '/app',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        });

}]);
