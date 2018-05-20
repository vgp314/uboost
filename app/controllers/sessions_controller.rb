class SessionsController < ApplicationController
  def new
  end

  def create
  	puts params
    user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
      log_in user
      redirect_to home_path
      # Log the user in and redirect to the user's show page.
    else
      redirect_to root_path
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end




 
end
