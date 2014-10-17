'use strict';

(function() {
  angular.module('adminlte.base.layout')
    .controller('layoutCtrl', layoutCtrl);


  function layoutCtrl($scope) {
    $scope.title = 'default title';
    $scope.subtitle = 'default subtitle';

  }

  layoutCtrl.$inject = ['$scope'];


})();