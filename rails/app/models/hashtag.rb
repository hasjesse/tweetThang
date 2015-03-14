class Hashtag < ActiveRecord::Base
  validates :round_id,
    presence: true,
    uniqueness: {
      scope: [ :user_id ],
    }

  validates :user_id,
    presence: true

  validates :tag,
    length: { maximum: 255 },
    allow_nil: true

  validate :only_one_winner
  validate :is_not_judge

  belongs_to :user
  belongs_to :round

  scope :winning, -> { where(winner: true) }
  scope :complete, -> { where("tag IS NOT NULL") }
  scope :incomplete, -> { where(tag: nil) }

  def only_one_winner
    if winner == true && Round.find(round_id).hashtags.winning.any?
      errors.add(:winner, "each round can only have one winner")
    end
  end

  def is_not_judge
    if user == self.round.judge
      errors.add(:user_id, "cannot be a judge")
    end
  end
end
