class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :photo_url
      t.boolean :like_status, :default => false

      t.timestamps null: false
    end
  end
end
