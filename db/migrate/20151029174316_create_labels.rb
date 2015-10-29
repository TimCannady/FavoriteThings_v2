class CreateLabels < ActiveRecord::Migration
  def change
    create_table :labels do |t|
      t.integer :category_id
      t.integer :item_id

      t.timestamps null: false
    end
  end
end
