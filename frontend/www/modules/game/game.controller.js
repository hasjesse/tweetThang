angular.module('starter.gameCtrl', [])

  .controller('GameCtrl', function($scope, $timeout, $state, Restangular) {
    console.log('gameCtrl working');

    var tweetsModel = Restangular.all('tweets');
    var hashtagModel = Restangular.all('hashtags');

    $scope.tweets = [];
    $scope.hashtags = [];

    tweetsModel.getList().then(function(tweets) {

      $scope.tweets = tweets;
      console.log('tweets', $scope.tweets);
    });

    hashtagModel.getList().then(function(hashtags) {
      $scope.hashtags = hashtags;
      console.log('hashtags', $scope.hashtags);
    });

    $scope.user = {};

    $scope.submitName = function() {
      console.log($scope.user);

      $timeout(function() {
        $state.go('rooms');
      }, 1000);
    };
  });
