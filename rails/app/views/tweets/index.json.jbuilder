json.array!(@tweets) do |tweet|
  json.extract! tweet, :id, :content, :screen_name, :name
  json.url tweet_url(tweet, format: :json)
end
