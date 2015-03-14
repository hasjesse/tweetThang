class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.integer :judge_id, null: false
      t.integer :tweet_id, null: false
      t.string :status, default: "open"

      t.timestamps null: false
    end

    add_index :rounds, [:judge_id, :tweet_id], unique: true
  end
end
