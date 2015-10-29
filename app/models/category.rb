class Category < ActiveRecord::Base
	has_many :labels
	has_many :items, through: :labels
end
