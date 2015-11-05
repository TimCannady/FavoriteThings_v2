module ApplicationHelper
	def create_user
	  @user = User.new(
	  	email: params[:email]

	    # first_name: params[:first_name],
	    # last_name: params[:last_name],
	    # email: params[:email],
	    # city: params[:city],
	    # gender: params[:gender],
	    # photo_url: params[:photo_url]
	    
	    )
	  @user.password = params[:password]
	  @user.save!
	end

	def login
	  user_from_db = User.where(email: params[:email]).first
	  if user_from_db[:email] == params[:email]
	    if user_from_db.password == params[:password]
	      session[:user_name] = params[:email]
	      current_user
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
