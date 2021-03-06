# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150314183210) do

  create_table "hashtags", force: :cascade do |t|
    t.integer  "round_id",   limit: 4,                   null: false
    t.integer  "user_id",    limit: 4,                   null: false
    t.string   "tag",        limit: 255
    t.boolean  "winner",     limit: 1,   default: false
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
  end

  add_index "hashtags", ["round_id", "user_id"], name: "index_hashtags_on_round_id_and_user_id", unique: true, using: :btree

  create_table "rounds", force: :cascade do |t|
    t.integer  "judge_id",   limit: 4,                    null: false
    t.integer  "tweet_id",   limit: 4,                    null: false
    t.string   "status",     limit: 255, default: "open"
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
  end

  add_index "rounds", ["judge_id", "tweet_id"], name: "index_rounds_on_judge_id_and_tweet_id", unique: true, using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "content",    limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "tags", ["content"], name: "index_tags_on_content", unique: true, using: :btree

  create_table "tweets", force: :cascade do |t|
    t.string   "content",     limit: 255, null: false
    t.string   "screen_name", limit: 255, null: false
    t.string   "name",        limit: 255, null: false
    t.string   "image",       limit: 255
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "tweets", ["content"], name: "index_tweets_on_content", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "uuid",       limit: 255
    t.string   "name",       limit: 255
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

end
