module ApplicationHelper

	def get_like_status(user, item)
		if user = user
			if item = item
				if Like.where(user_id: user, item_id: item).first
					return true
				else
					return false
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
	    photo: params[:photo]

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

	def create_item
		new_item = Item.create(
		    name: params[:name],
		    description: params[:description],
		    photo: params[:photo],
		)

		p "**************"
		p "**************"
		new_item['photo_url'] = new_item.photo_url
		new_item.save

		user = User.find(params[:userID])
		
		category_1 = Category.where(id: params[:categoryID_1]).first
		category_2 = Category.where(id: params[:categoryID_2]).first

		user.items << new_item
		category_1.items << new_item
		category_2.items << new_item
	end

end
