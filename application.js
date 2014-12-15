$(document).ready(function() {

  Mousetrap.bindGlobal('command+enter', function(event) {
    $text = $('textarea').val();
    $('#live-preview').html($text);
  });
});
