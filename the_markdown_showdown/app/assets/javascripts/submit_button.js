$(document).ready(function(){
  $(".showdown").on('keyup', function(event){
    $('.bang').html($(event.target).val());
  });
});
