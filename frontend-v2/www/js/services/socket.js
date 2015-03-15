app.factory('socket',function(socketFactory){
	//Create socket and connect to http://chat.socket.io 
 	var myIoSocket = io.connect('http://10.0.1.4:3000');

  	mySocket = socketFactory({
    	ioSocket: myIoSocket
  	});
  	
	return mySocket;
})