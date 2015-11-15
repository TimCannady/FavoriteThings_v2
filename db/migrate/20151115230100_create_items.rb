class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.attachment :photo
      t.boolean :like_status, :default => false

      t.timestamps null: false
    end
  end
end