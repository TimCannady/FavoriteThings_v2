module ApplicationHelper

	def get_like_status(user, item)
		if user = user
			if item = item
				if Like.where(user_id: user, item_id: item).first
					render json: {head: :ok}
				else
					render :status => 404  #this works as a hacky approach but blows up the console
				end
			end
		end
	end

	def create_user
	  @user = User.new(

	    f_name: params[:f_name],
	    l_name: params[:l_name],
	    email: params[:email],
	    city: params[:city],
	    gender: params[:gender],
	    photo_url: params[:photo_url]

	    )
	  @user.password = params[:password]
	  @user.save!
	end

	def login
		if user_from_db = User.where(email: params[:email]).first
		  if user_from_db[:email] == params[:email]
		    if user_from_db.password == params[:password]
		      session[:user_name] = params[:email]
		    end
		  end	
		end
	end

	def logout
	  session[:user_name] = nil
	end


	def logged_in
	  session[:user_name]
	end

	# refactor this
	# refactor this
	def current_user
	  if session[:user_name]
	    @current_user = User.where(email: session[:user_name]).first
	  end
	end
	# refactor this
	# refactor this

	def user_has_liked?
	  all_items[item_id]
	end
end
