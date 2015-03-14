angular.module('starter.roomCtrl', [])

  .controller('RoomCtrl', function($scope, $state) {
    console.log('roomCtrl working');

    $scope.enterRoom = function() {
      $state.go('game');
    };

    $scope.rooms = [
      {
        name : 'TUNE Demo Room'
      },
      {
        name : 'Fake Room'
      }
    ];
  });
