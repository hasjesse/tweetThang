class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.string :content, null: false
      t.string :screen_name, null: false
      t.string :name, null: false
      t.string :image

      t.timestamps null: false
    end

    add_index :tweets, [:content], unique: true
  end
end
