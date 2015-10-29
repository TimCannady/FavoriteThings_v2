class Item < ActiveRecord::Base
	has_many :likes
	has_many :users, through: :likes

	has_many :labels
	has_many :categories, through: :labels
end
