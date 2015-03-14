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

  has_many :hashtags
end
