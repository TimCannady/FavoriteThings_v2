class User < ActiveRecord::Base
	include BCrypt
	has_many :likes
	has_many :items, through: :likes
	has_many :comments

end
