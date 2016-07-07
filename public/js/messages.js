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


// VARIOUS INTERACTIVITY

// nav movement
hamburger.click(function(){
  $(this).toggleClass('open');
  $('ul#messages').css('opacity','50%')
});

$(document).click(function(e) {
  if( e.target.id != 'hamburger') {
    hamburger.removeClass('open')
    $('ul#messages').css('opacity','100%')
  }
});

// color changes
$('#light').click(function(){
  $('html').addClass('light');
});

$('#dark').click(function(){
  $('html').removeClass('light');
});
