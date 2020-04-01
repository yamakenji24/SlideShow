class SlidesController < ApplicationController
  def index
    @user = session[:nickname] != "" ? session[:nickname] : "guest"
  end

  def show

  end
end
