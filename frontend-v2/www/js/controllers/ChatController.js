var chat = app.controller('ChatController',function($stateParams,socket,$sanitize,$ionicScrollDelegate) {

    var self = this;
    self.autofocus=true
    self.messages=[];
    self.hasntVoted = true;
    self.hashTags = [];
    self.gameNotStarted = true
    self.users = []
    self.score = 0;

    socket.on('connect',function(){
      //Add user
      socket.emit('add user', $stateParams.nickname);
      // On login display welcome message
      socket.on('login', function (data) {
        //Set the value of connected flag
        self.connected = true;
      });
    });

    socket.on('user list', function (data) {
      //Set the value of connected flag
      console.log("users online:", data)
      self.users = data.users
    });

  	socket.on('send hashtag to subscribers', function (data) {
		  self.hashTags.push(data);
    });

    // Lets us know who the winner is
  	socket.on('send winner of round', function (data) {
  	    console.log('winner is: ', data.username);
        if ($stateParams.nickname === data.username) {
          console.log('you won that round my friend');
          self.score++;
        }
  	});

    // Judge is now able to vote
  	socket.on('judge is now voting', function (data) {
  		console.log('judge is now voting');
      self.voteEnabled = true;
  	});

  	self.startGame = function() {
      // Start Game
  		console.log('start game');

      socket.emit('new round', function (data) {
    		self.gameNotStarted = false;
  		});
  	}

    // sets up round and check for who is the judge
  	socket.on('start round', function (data) {
      self.judge = data.judge;
      self.hasntVoted = true;
      self.gameNotStarted = false;

      if ($stateParams.nickname === self.judge) {
        self.hashTags = [];
        self.isJudge = true;
        console.log('judge' + self.hashTags);
      } else {
      	self.hashTags = data.hashtags;
        self.isJudge = false;
        console.log('judge' + self.hashTags);
      }
      self.tweet = data.tweet
    });

    // Player submits hashtag
    self.submitHashtag = function (hashtag) {
      console.log('$stateParams.nickname', $stateParams.nickname)
      // Makes judge not able to vote yet
      self.voteEnabled = false
      hashtag.username = $stateParams.nickname

      socket.emit('send hashtag', hashtag);

      self.hasntVoted = false

      console.log('voted hashtag' + hashtag)
    }

    self.voteForHashtag = function (hashtag) {
      // Can the the judge vote?
    	if (self.voteEnabled) {
    		socket.emit('end round', {
        	username: hashtag.username
        });
    	} else {
    		console.log('not all votes are in');
    	};

    }
});

