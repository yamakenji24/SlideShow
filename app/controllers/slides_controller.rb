class SlidesController < ApplicationController
  def index
    @chat = ChatMessage.all
  end
end
