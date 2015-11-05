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
				user.items << item
				render json: {head: :ok}
			end
		else
			render :status => 404
		end
	end
end

