$(document).ready(function() {
  $('#input').keyup(function(event) {
    $('#output').html($('#text').val());
  })
});
