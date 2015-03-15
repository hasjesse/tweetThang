angular.module('starter.nameCtrl', [])

  .controller('NameCtrl', function($scope, Restangular, $timeout, $state, $resource, $http) {
    console.log('nameCtrl working');

    var usersModel = Restangular.all('users');
    var roundsModel = Restangular.all('rounds');

    $scope.user = {};
    $scope.submitName = function() {

      console.log('posting ', $scope.user);

      usersModel.post($scope.user).then(function(user) {
        console.log('wat', user.uuid);

        roundsModel.post(user).then(function(round) {
          console.log('hello', round);
        });

        $timeout(function() {
          $state.go('rooms');
        }, 1000);
      });
    };
  });
