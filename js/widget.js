function MarkdownWidget(sourceId, previewDiv){
  this.input = $(sourceId);
  this.output = $(previewDiv);
  $(this.input).on("keyup", function(event){
    var userInput = $(event.target).val()
    var parsedInput = this.parseMarkdown(userInput)
    $(previewDiv).text(parsedInput)
  })
};


MarkdownWidget.prototype.parseMarkdown = function(input) {
  return "PARSED" + this.input

};

