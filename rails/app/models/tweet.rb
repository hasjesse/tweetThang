class Tweet < ActiveRecord::Base
  validates :content,
    length: { maximum: 255 },
    presence: true,
    uniqueness: true

  validates :screen_name,
    length: { maximum: 255 },
    presence: true

  validates :name,
    length: { maximum: 255 },
    presence: true

  has_many :rounds, dependent: :destroy

  class << self
    def reset!
      Tweet.delete_all

      self.fetch
    end

    def fetch
      since = 1

      loop do
        Cersei::Twitter.client.favorites(count: 200, since_id: since).each_with_index do |f, index|

          Tweet.create({
            content: f.text.gsub(/#[\w]*/i, "").gsub(/https?:\S*/, ""),
            screen_name: f.user.screen_name,
            name: f.user.name,
            image: f.user.profile_image_url.to_s.gsub(/normal/, '400x400'),
          }) rescue next

          since = f.id
        end

        break
      end
    end
  end
end
