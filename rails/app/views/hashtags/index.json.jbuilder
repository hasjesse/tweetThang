json.array!(@hashtags) do |hashtag|
  json.extract! hashtag, :id, :round_id, :user_id, :tweet_id, :tag
  json.url hashtag_url(hashtag, format: :json)
end
