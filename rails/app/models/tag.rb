class Tag < ActiveRecord::Base
  validates :content,
    length: { maximum: 255 },
    allow_nil: true

  class << self
    def reset
      res = HTTParty.get "https://tweets-api.herokuapp.com/hashtags"

      Tag.delete_all

      JSON.parse(res.body).each do |t|
        Tag.create!({
          content: t["hash_tag"],
        }) rescue next
      end
    end
  end
end
