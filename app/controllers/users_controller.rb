class UsersController < ApplicationController
	skip_before_action :verify_authenticity_token  
	before_action :require_login , :only=>[:home]
 
  
	def home
	end



	def create
		puts("Createss")
		puts(params)
		puts(params[:email])
		user = User.find_by(email:params[:email])
		if user.nil?
			puts("ok")
			user = User.new
			user.email = params[:email]
			user.password = params[:password]
			user.save!
			puts user
		else
			puts("nok")
			puts(user)

		end
		log_in user
		redirect_to home_path

		
	end

	def update
		redirect_to :root
	end
	


	private
 
  	def require_login
	    unless logged_in?
	      flash[:error] = "You must be logged in to access this section"
	      redirect_to new_login_url # halts request cycle
	    end
 	 end

end
