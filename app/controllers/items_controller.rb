class ItemsController < ApplicationController
	def index
		items = Item.all
		render json: items
	end

	def show
		item = Item.find(params[:id]) 
		render json: item
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
		  		p "************"
		  		p "************"
		  		p "unliked!"
		  		render json: {head: :ok}
	  		end
	  	else
	  		render :status => 404
	  	end
	end
end

