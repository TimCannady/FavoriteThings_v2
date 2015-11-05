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
		user = User.find(params[:userID])
		item = Item.where(id: params[:itemID]).first
		user.items << item
	end
end

