class Label < ActiveRecord::Base
	belongs_to :category
	belongs_to :item
end
