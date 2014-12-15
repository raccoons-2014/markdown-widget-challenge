class TextsController < ApplicationController

  def new
    @text = Text.new
  end

  def create
    @text = Text.new params[text_params]
    if @text.save
      respond_to do |format|
        format.html {redirect_to root_path}
        format.js {redirect_to root_path}
      end
    else
      flash[:error] = @text.errors.full_messages
      redirect_to root_path
    end
  end

  def show
    @texts = Text.all
  end
end
