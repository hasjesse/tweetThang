class Api::V1::RoundsController < Api::V1::BaseController

  # GET /api/v1/rounds
  def index
    @rounds = Round.all
  end

  def show
    @round = Round.find(params[:id])
  end

  # POST /api/v1/rounds?uuid
  def create
    @user = User.find_by(uuid: params[:uuid])

    if Round.open.any?
      @round = Round.open.first

      Hashtag.create!({
        round: @round,
        user: @user,
      })
    else
      round = Round.generate(judge: @user)

      unless round.save
        render json: @round.errors, status: :unprocessable_entity

        return
      end

      round
    end

    render :show, status: :created
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def round_params
    params.require(:round).permit(:judge_id)
  end
end
