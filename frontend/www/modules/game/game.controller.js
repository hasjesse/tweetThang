angular.module('starter.gameCtrl', [])

  .controller('GameCtrl', function($scope, $timeout, $state, Restangular) {

    $scope.user = {};

    $scope.submitName = function() {
      $timeout(function() {
        $state.go('rooms');
      }, 1000);
    };
  })

  .controller('PlayerCtrl', function($scope, $timeout, $state, Restangular) {

    var hashtagModel = Restangular.all('tags?limit=5&random=1');

    $scope.roundTweet = $state.roundTweet;
    $scope.player = $state.myName;

    hashtagModel.getList().then(function(hashtags) {
      var tags = [];
      for (var i = 0; i < 5; i++) {
        tags.push(hashtags[i].content)
      };
      $scope.hashtags = tags;
    });

  })

  .controller('JudgeCtrl', function($scope, $timeout, $state, Restangular) {

    var hashtagModel = Restangular.all('tags?limit=5&random=1');

    $scope.roundTweet = $state.roundTweet;

    hashtagModel.getList().then(function(hashtags) {
      var tags = [];
      for (var i = 0; i < 5; i++) {
        tags.push(hashtags[i].content)
      };
      $scope.hashtags = tags;
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

  })
  .controller('ScoreCtrl', function($scope, $timeout, $state, Restangular) {

    console.log('score ctrl baby!');

  });
