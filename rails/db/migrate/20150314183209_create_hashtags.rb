class CreateHashtags < ActiveRecord::Migration
  def change
    create_table :hashtags do |t|
      t.integer :round_id, null: false
      t.integer :user_id, null: false
      t.string :tag
      t.boolean :winner, default: false

      t.timestamps null: false
    end

    add_index :hashtags, [:round_id, :user_id], unique: true
  end
end
