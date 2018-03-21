// YOUR CODE HERE:
var app={
	friend:[],
  
	server:'http://parse.rbk.hackreactor.com/chatterbox/classes/messages',

	init:function(){
		return;
	},
	send:function(message){
		$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.rbk.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});
	},
	fetch:function(message){
		$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.rbk.hackreactor.com/chatterbox/classes/messages',
  type: 'GET',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});
	},
  clearMessages:function(){
  	$('#chats').empty()
  },
  renderMessage:function(message){
  	$('#chats').append('<p>'+message.text+'</p>')
  },
  renderRoom:function(message){
  	$('#roomSelect').append('<p>'+message.roomname+'</p>')
  },
  handleUsernameClick:function(){
  	$('#main').append('<p>'+message.username+'</p>')
  }	
}





