class Api::V1::HashtagsController < Api::V1::BaseController
  before_action :set_hashtag, only: [:update]

  # GET /hashtags
  # GET /hashtags.json
  def index
    @hashtags = Hashtag.all
  end

  # POST /hashtags
  # POST /hashtags.json
  def create
    @hashtag = Hashtag.new(hashtag_params)

    respond_to do |format|
      if @hashtag.save
        format.html { redirect_to @hashtag, notice: 'Hashtag was successfully created.' }
        format.json { render :show, status: :created, location: @hashtag }
      else
        format.html { render :new }
        format.json { render json: @hashtag.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /hashtags/1
  # PATCH/PUT /hashtags/1.json
  def update
    if @hashtag.update(hashtag_params)
      @hashtag.round.check_submissions

      render :show, status: :ok
    else
      render json: @hashtag.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hashtag
      @hashtag = Hashtag.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def hashtag_params
      params.require(:hashtag).permit(:tag)
    end
end
