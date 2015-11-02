class AppController < ApplicationController
	def index

	end

	def main
		# @location_path = "/#{params[:path]}"
		@items = Item.all.to_json
		p @items
		p "**************"
		p "**************"
	end
end


# Rails.application.routes.draw do

#   ACCEPTS_JSON = lambda {|request|
#     request.accepts.include?(:json)
#   }

#   scope constraints: ACCEPTS_JSON do
#     resources :tours
#     resources :installations, only: [:index]
#   end

#   get '*path', to: "client_app#show"

#   root to: "client_app#show"
# end
