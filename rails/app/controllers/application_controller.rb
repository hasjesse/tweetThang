class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def handle_options_request
    head(:ok) if request.request_method == "OPTIONS"
  end

  def reset
    [
      Hashtag,
      Round,
      User,
    ].each do |klass|
      klass.destroy_all
    end

    Tweet.reset!
    Tag.reset

    render json: {
      tweets: Tweet.count,
      tags: Tag.count,
      users: User.count,
    }
  end
end
