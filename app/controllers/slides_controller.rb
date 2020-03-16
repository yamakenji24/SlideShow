class SlidesController < ApplicationController
  def index
    @chats = ChatMessage.all
  end
end
