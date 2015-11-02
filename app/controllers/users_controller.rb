class UsersController < ApplicationController
	def index
		p "*******************"
		p "*******************"
		users = User.all
		# p users
		render json: users
	end
end
