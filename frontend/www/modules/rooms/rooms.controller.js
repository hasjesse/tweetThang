angular.module('starter.roomCtrl', [])

  .controller('RoomCtrl', function($scope, $state) {
    console.log('roomCtrl working');

    $scope.enterRoom = function() {
      $state.go('game');
    };

    $scope.rooms = [
      {
        name : 'TUNE Demo Room',
        description : 'The TUNE Hackathon Demo Room'
      },
      {
        name : 'Fake Room',
        description: 'This is a fake room, dont bother joining it'
      }
    ];
  });
