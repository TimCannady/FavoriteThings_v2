class UsersController < ApplicationController
	def index
		users = User.all
		render json: users
	end

	def show
		user = User.find(params[:id]) 
		user_name = user.f_name + " " + user.l_name
		items = user.items
		render json: {
			items: items,
			user_name: user_name
		}
	end
end
