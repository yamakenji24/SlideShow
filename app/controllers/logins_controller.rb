class LoginsController < ApplicationController
  def index

  end

  def new
  end
  def show
  end
    
  def create
    session[:nickname] = params[:user]
    redirect_to login_url("show")
  end
end
