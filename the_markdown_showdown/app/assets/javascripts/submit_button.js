function markdownShowdown(textArea, markedArea ){
  this.textArea = textArea;
  this.markedArea = markedArea;
  var that = this;

  $(this.textArea).on('keyup', function(event){
    console.log(this.markedArea);
  })
}

$(function(){
  new markdownShowdown(".showdown", ".bang");
})
