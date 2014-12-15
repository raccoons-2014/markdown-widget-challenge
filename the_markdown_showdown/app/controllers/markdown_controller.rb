class MarkdownController < ApplicationController

  def index
    respond_to do |format|
      format.html{render :index}
      format.js{render :index}
    end
  end
end
