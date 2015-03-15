class Api::V1::TweetsController < Api::V1::BaseController
  before_action :set_tweet, only: [:show]

  # GET /api/v1/tweets
  def index
    @tweets = Tweet.includes(:rounds).order('rounds.updated_at DESC')
  end

  # GET /api/v1/tweets/1
  def show
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tweet
      @tweet = Tweet.find(params[:id])
    end
end
