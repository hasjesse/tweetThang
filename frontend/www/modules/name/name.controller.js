angular.module('starter.nameCtrl', [])

  .controller('NameCtrl', function($scope, $timeout, $state) {
    console.log('nameCtrl working');

    $scope.user = {};

    $scope.submitName = function() {
      console.log($scope.user);

      $timeout(function() {
        $state.go('rooms');
      }, 1000);
    };
  });
