app.factory('socket',function(socketFactory){
	//Create socket and connect to http://chat.socket.io
 	var myIoSocket = io.connect('http://rehash-socket.herokuapp.com');

  	mySocket = socketFactory({
    	ioSocket: myIoSocket
  	});

	return mySocket;
})