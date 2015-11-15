class Item < ActiveRecord::Base

	# this method associates the attribute ":avatar" with a file attachment
	has_attached_file :photo
	validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
	
	has_many :likes
	has_many :users, through: :likes

	has_many :labels
	has_many :categories, through: :labels

end
