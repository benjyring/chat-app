var hamburger = $('#hamburger');
var socket = io();

$('form').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});
socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
  $('#messages').scrollTop($('#messages').prop('scrollHeight'));
});

hamburger.click(function(){
  $(this).toggleClass('open');
});

$(document).click(function(e) {
  if( e.target.id != 'hamburger') {
    hamburger.removeClass('open')
  }
});
