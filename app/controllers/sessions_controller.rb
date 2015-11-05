class SessionsController < ApplicationController
	include ApplicationHelper # include methods from application_helper.rb

	def create
		if login
			render json: {email: params[:email]}
		else
			render :status => 404
		end
	end

	# def id
	# 	p "*********"
	# 	p "*********"
	# 	p params
	# 	user_id = User.where(email: params[:email]).first.id
	# 	render json: {id: user_id}
	# end
	
end
