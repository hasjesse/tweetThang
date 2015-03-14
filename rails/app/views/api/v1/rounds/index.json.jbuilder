json.array!(@rounds) do |round|
  json.extract! round, :id, :status

  json.tweet do
    json.extract! round.tweet, :id, :screen_name, :name, :image
    json.tweet round.tweet.content
  end

  json.judge do
    json.extract! round.judge, :id, :name, :uuid
  end

  json.users round.users do |user|
    json.extract! user, :id, :name, :uuid
    json.hashtag do
      json.extract! round.hashtags.where(user_id: user.id).first, :id, :tag, :winner
    end
  end
end
