function MarkdownWidget (opts) {

  var _hiddenMDWidget = function(opts) {
    this.sourceSelector  = opts.sourceSel;
    this.previewSelector = opts.resultSel;

    $(this.sourceSelector).on("keyup", function(event) {
      var htmlText = this.markdownTransform($(event.target).val());
      $(this.previewSelector).html(htmlText);
    }.bind(this));
  }

  _hiddenMDWidget.prototype = {
    markdownTransform: function(markdownText) {
      return marked(markdownText);
    }
  }

  new _hiddenMDWidget(opts)
}


$(function() {
  MarkdownWidget({ sourceSel: "#md-src", resultSel: "#md-result" })
});
