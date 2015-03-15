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
  })

  .controller('JudgeCtrl', function($scope, $timeout, $state, Restangular) {
    console.log('judgeCtrl working');

    var hashtagModel = Restangular.all('hashtags');

    $scope.hashtags = [];

    hashtagModel.getList().then(function(hashtags) {
      $scope.hashtags = hashtags.slice(0, 5);
      console.log('hashtags', $scope.hashtags);
    });

    var tweetsModel = Restangular.all('tweets');
    tweetsModel.getList().then(function(tweets) {
      $scope.tweet = tweets[54];
      console.log($scope.tweet);
    });

  })

  .controller('VoteCtrl', function($scope, $timeout, $state, Restangular) {
    console.log('voteCtrl working');

    var hashtagModel = Restangular.all('hashtags');

    var tweetsModel = Restangular.all('tweets');
    tweetsModel.getList().then(function(tweets) {
      $scope.tweet = tweets[54];
      console.log($scope.tweet);
    });

    $scope.hashtags = [];

    hashtagModel.getList().then(function(hashtags) {
      var shuffledHashtags = shuffle(hashtags);


      $scope.hashtags = shuffledHashtags.slice(0, 5);
      console.log('hashtags', $scope.hashtags);
    });



    var shuffle = function(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

  });
