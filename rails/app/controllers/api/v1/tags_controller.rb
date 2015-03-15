class Api::V1::TagsController < Api::V1::BaseController
  before_action :set_hashtag, only: [:update]

  # GET /hashtags
  # GET /hashtags.json
  def index
    limit = params[:limit] || 5

    @tags = Tag.limit(limit)

    if params[:random]
      offset = rand(Tag.count) - limit.to_i
      offset = 0 if offset < 0

      @tags = @tags.offset(offset)
    end
  end
end
