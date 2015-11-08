class CategoriesController < ApplicationController
	include ApplicationHelper # include methods from application_helper.rb

	def index
		categories = Category.all
		render json: categories
	end

	def show
		category = Category.find(params[:id]) 
		user = User.find(params[:userID])
		items = category.items
		items.each do |item|
			item.like_status = get_like_status(user, item)
			item.save
		end
		
		category_name = category.name
		render json: {
			items: items,
			category_name: category_name
		}
	end
end
