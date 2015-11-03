class CategoriesController < ApplicationController
	def index
		categories = Category.all
		render json: categories
	end

	def show
		category = Category.find(params[:id]) 
		category_name = category.name
		items = category.items
		render json: {
			items: items,
			category_name: category_name
		}
	end
end
