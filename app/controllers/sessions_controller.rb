class SessionsController < ApplicationController
	include ApplicationHelper # include methods from application_helper.rb

	def create
		if login
			render json: {email: params[:email]}
		else
			render :status => 404
		end
	end

end
