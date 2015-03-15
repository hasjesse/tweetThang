app.factory('socket',function(socketFactory){
	//Create socket and connect to http://chat.socket.io
 	var myIoSocket = io.connect('http://5b385c31.ngrok.com');

  	mySocket = socketFactory({
    	ioSocket: myIoSocket
  	});

	return mySocket;
})