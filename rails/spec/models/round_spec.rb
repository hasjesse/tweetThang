require 'rails_helper'

RSpec.describe Round, type: :model do
  let(:valid_attrs) do
    {
      judge_id: 1,
      tweet_id: 2,
    }
  end

  it { expect(Round.new(valid_attrs)).to be_valid }
  it { expect(Round.new(valid_attrs.merg(judge_id: nil))).to_not be_valid }
  it { expect(Round.new(valid_attrs.merg(tweet_id: nil))).to_not be_valid }
end
