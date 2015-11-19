class Category < ActiveRecord::Base
	has_attached_file :photo
	
	validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/

	has_many :labels
	has_many :items, through: :labels

	def photo_url
		photo.url
	end
end
