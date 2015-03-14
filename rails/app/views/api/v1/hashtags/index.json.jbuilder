json.array!(@hashtags) do |hashtag|
  json.extract! hashtag, :id, :tag, :winner

  json.tweet do
    json.extract! hashtag.round.tweet, :id, :content, :screen_name, :name, :image
  end

  json.user do
    json.extract! hashtag.user, :id, :name, :uuid
    json.winner hashtag.winner
  end

  json.judge do
    json.extract! hashtag.round.judge, :id, :name, :uuid
  end
end
