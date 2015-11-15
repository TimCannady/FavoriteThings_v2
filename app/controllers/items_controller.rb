class ItemsController < ApplicationController
	include ApplicationHelper # include methods from application_helper.rb	

	def index
		user = User.find(params[:userID])
		items = Item.all
		items.each do |item|
			item.like_status = get_like_status(user, item)
			item.save
		end
		render json: items
	end

	def show
		item = Item.find(params[:id]) 
		render json: item
	end

	def create
		if create_item
			render json: {head: :ok}
		else
			render :status => 404
		end
	end

	def like
		if user = User.find(params[:userID])
			if item = Item.where(id: params[:itemID]).first
				if Like.where(user_id: user, item_id: item).first  # thrown an error if the user has already liked the item
					return :status => 404
				else
					user.items << item
					render json: {head: :ok}
				end
			end
		else
			render :status => 404
		end
	end

	def unlike # unlike item from the USERS's likes (not from the db entirely)
	  	if user = User.find(params[:userID])
	  		if like = Like.where(user_id: params[:userID], item_id: params[:itemID]).first
		  		like.destroy

		  		render json: {head: :ok}
	  		end
	  	else
	  		render :status => 404
	  	end
	end

	def checkhasliked
		if get_like_status(User.find(params[:userID]),Item.where(id: params[:itemID]).first)
			render json: {head: :ok}
		else
			render :status => 404  #this works as a hacky approach but blows up the console
		end
	end
end

