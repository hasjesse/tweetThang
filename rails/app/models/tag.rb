class Tag < ActiveRecord::Base
  validates :content,
    length: { maximum: 255 },
    allow_nil: true
end
