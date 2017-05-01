function showModal() {
  $('.modal').fadeIn();
}

function closeModal() {
  $('.modal').fadeOut();
}

function error() {
  $('input').css('outline','2px solid #bc2a39');
}

function mouseoverUser() {
  $('input[type=text]').css('outline','none');
}

function mouseoverPass() {
  $('input[type=password]').css('outline','none');
}
