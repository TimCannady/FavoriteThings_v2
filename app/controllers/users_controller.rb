class UsersController < ApplicationController
	include ApplicationHelper # include methods from application_helper.rb

	def index
		users = User.all
		render json: users
	end

	def show
		user_profile = User.find(params[:id]) # the id of the profile being viewed
		user = User.find(params[:userID]) # the ID of the logged-in user
		user_items = user_profile.items # the items liked by the user who's profile is being viewed
		user_items.each do |item|
			item.like_status = get_like_status(user, item)
			item.save
		end
		
		user_name = user_profile.f_name + " " + user_profile.l_name
		photo_url = user_profile.photo_url
		render json: {
			items: user_items,
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

	def categoryitems
		user_items_by_category = []
		user = User.find(params[:user_id])
		category = Category.find(params[:id])
		all_user_items = user.items

		all_user_items.each do |item|
			if category.id == item.categories.first.id
				user_items_by_category << item
			end
		end

		if user_items_by_category.length > 0
			render json: user_items_by_category
		else
			render :status => 404
		end
	end

	private

	def set_s3_direct_post ## calling @s3_direct_post.url will return the url
		@s3_direct_post = S3_BUCKET.presigned_post(key: "items/#{SecureRandom.uuid}/${filename}", success_action_status: '201', acl: 'public-read')
	end
end
