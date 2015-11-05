class UsersController < ApplicationController
	# include ApplicationHelper # include methods from application_helper.rb

	def index
		users = User.all
		render json: users
	end

	def show
		user = User.find(params[:id]) 
		user_name = user.f_name + " " + user.l_name
		photo_url = user.photo_url
		items = user.items
		render json: {
			items: items,
			user_name: user_name,
			photo_url: photo_url
		}
	end
end
