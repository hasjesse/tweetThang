class User < ActiveRecord::Base
  validates :name,
    presence: true,
    length: { maximum: 255 }

  has_many :rounds, foreign_key: :judge_id
  has_many :hashtags

  before_validation :set_uuid

  def score
    self.hashtags.winning.count
  end

  protected

  def set_uuid
    self.uuid = UUIDTools::UUID.random_create.to_s
  end
end
