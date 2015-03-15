json.array!(@tweets) do |tweet|
  json.extract! tweet, :id, :content, :screen_name, :name
  json.rounds tweet.rounds do |round|
    json.extract! round, :id

    json.hashtags round.hashtags.winning do |ht|
      json.extract! ht, :id, :tag
    end
  end
end
