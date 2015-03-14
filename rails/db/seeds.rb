# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

if Tweet.any?

  5.times do |n|
    User.create!(name: "User #{n}")
  end

  round = Round.generate({
    judge: User.first,
  })

  round.save!

  hashtags = JSON.parse(HTTParty.get("https://tweets-api.herokuapp.com/hashtags").body)

  User.all.each do |user|
    next if Round.last.judge == user

    Hashtag.create({
      round: Round.last,
      user: user,
      tag: hashtags.sample(1).first["hash_tag"],
    })
  end
end
