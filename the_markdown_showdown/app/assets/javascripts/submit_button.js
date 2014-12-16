function markdownShowdown(textArea, markedArea ){
  this.textArea = textArea;
  this.markedArea = markedArea;
  var that = this;

  $(this.textArea).on('keyup', function(event){
    var text = $(event.target).val();
    $(markedArea).html(marked(text));
  })
}

$(function(){
  new markdownShowdown(".showdown", ".bang");
})
