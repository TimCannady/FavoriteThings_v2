class UsersController < ApplicationController
	include ApplicationHelper # include methods from application_helper.rb

	def index
		users = User.all
		render json: users
	end

	def show
		user = User.find(params[:id]) 
		items = user.items
		items.each do |item|
			item.like_status = get_like_status(user, item)
			item.save
		end
		
		user_name = user.f_name + " " + user.l_name
		photo_url = user.photo_url
		render json: {
			items: items,
			user_name: user_name,
			photo_url: photo_url
		}
	end

	def create
		if create_user
			render json: {email: params[:email]} #return the email so the user can be logged in 
		else
			render :status => 404
		end
	end

	def id
		user = User.where(email: params[:email]).first
		user_id = user.id
		render json: {user_id: user_id}
	end
end
