class SessionsController < ApplicationController
	include ApplicationHelper # include methods from application_helper.rb

	def create
		if login
			render json: {email: params[:email]}
		else
			render json: {email: "no such user"}	
		end
	end
end
