class User < ActiveRecord::Base
	include BCrypt
	has_many :likes
	has_many :items, through: :likes
	has_many :comments

	has_attached_file :photo
	
	validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/

	def password
	  @password ||= Password.new(password_hash)
	end

	def password=(new_password)
	  @password = Password.create(new_password)
	  self.password_hash = @password
	end

	def photo_url
		photo.url
	end

end
