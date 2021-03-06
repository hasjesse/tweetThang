module Cersei
  class Twitter
    class << self
      attr_accessor :client
    end

    def self.establish_connection
      self.client = ::Twitter::REST::Client.new do |config|
        config.consumer_key        =  ENV["TWITTER_CONSUMER_KEY"]
        config.consumer_secret     =  ENV["TWITTER_CONSUMER_SECRET"]
        config.access_token        =  ENV["TWITTER_OAUTH_TOKEN"]
        config.access_token_secret =  ENV["TWITTER_OAUTH_TOKEN_SECRET"]
      end
    end
  end
end

Cersei::Twitter.establish_connection
