$(document).ready(function(){
  $(".showdown").on('keyup', function(event){
    var text_area = $(event.target).val()
    $('.bang').html(marked(text_area));
  });
});
