class SlidesController < ApplicationController
  def index
    @rooms = Room.all.order(:id)
  end

  def show
    @room = Room.find(params[:id])
    @user = session[:nickname] != "" ? session[:nickname] : "guest"
  end
end
