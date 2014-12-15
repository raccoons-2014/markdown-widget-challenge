$(document).ready(function(){
  $("input").keyup(function() {
    var value = $( this ).val();
    $( "h1").text(value);
  }).keyup();
});
