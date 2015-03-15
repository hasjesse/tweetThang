angular.module('starter.roomCtrl', [])

  .controller('RoomCtrl', function($scope, $state) {
    console.log('roomCtrl working');
    console.log('room ctrl tweet',$state.testTweet);

    $scope.enterRoom = function() {
      // get round information and determine
      // if user is judge or vote
      // dont need the && != undefined it is just for when the app is refreshing
      // it causes the uuids to not be set anymore.
      if ($state.judgeUuid === $state.myUuid && $state.myUuid != undefined) {
        $state.go('judge');
      } else {
        $state.go('player');
      };
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
