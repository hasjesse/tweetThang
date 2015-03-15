angular.module('starter.nameCtrl', [])

  .controller('NameCtrl', function($scope, Restangular, $timeout, $state, $resource, $http) {
    console.log('nameCtrl working');

    var usersModel = Restangular.all('users');
    var roundsModel = Restangular.all('rounds');

    $scope.user = {};
    $scope.submitName = function() {

      console.log('posting ', $scope.user);

      usersModel.post($scope.user).then(function(user) {
        $state.myUuid = user.uuid;
        $state.myName = user.name;

        roundsModel.post(user).then(function(round) {
          $state.judgeUuid = round.judge.uuid;
          $state.roundTweet = round.tweet;
        });

        $timeout(function() {
          $state.go('rooms');
        }, 1000);
      });
    };
  });
