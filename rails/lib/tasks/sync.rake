task :sync => :environment do
  Tweet.reset!
  Tag.reset
end
