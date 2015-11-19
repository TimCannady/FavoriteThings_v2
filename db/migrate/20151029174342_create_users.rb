class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :f_name
      t.string :l_name
      t.string :email
      t.string :password_hash
      t.string :photo_url
      t.string :city
      t.string :gender
      t.attachment :photo

      t.timestamps null: false
    end
  end
end
