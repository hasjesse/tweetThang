json.extract! @user, :id, :uuid, :name
json.judging_rounds @user.rounds do |round|
  json.extract! round, :id
end

json.submission_rounds @user.hashtags do |ht|
  json.id ht.id
  json.tweet do
    json.extract! ht.round.tweet, :content
  end

  json.hashtag do
    json.extract! ht, :id, :tag
  end

  json.judge do
    json.extract! ht.round.judge, :id, :uuid, :name
  end
end
