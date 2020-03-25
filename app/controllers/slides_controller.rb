class SlidesController < ApplicationController
  def index
    @chats = ChatMessage.all
    @user = session[:nickname] != "" ? session[:nickname] : "guest"
    p @user
  end
end
