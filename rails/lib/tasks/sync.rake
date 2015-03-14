task :sync => :environment do
  res = HTTParty.get "https://tweets-api.herokuapp.com/tweets"

  Tweet.delete_all
  JSON.parse(res.body).each do |t|
    Tweet.create({
      content: t["tweet"],
      screen_name: t["screen_name"],
      name: t["screen_name"],
      image: t["image"],
    }) rescue next
  end
end
