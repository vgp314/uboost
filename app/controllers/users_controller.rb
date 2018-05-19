class UsersController < ApplicationController
	skip_before_action :verify_authenticity_token  
	def main
	end

	def login
	end

	def update
		puts "XXX";
		redirect_to :root
		
	end
	

end
