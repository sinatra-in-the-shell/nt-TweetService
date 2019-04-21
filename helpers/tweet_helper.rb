class TweetHelper

  def initialize
  end
  
  def process req
    pp '** INSIDE TWEET HELPER ** :'
    pp req
    case req['method']
    when 'new_tweet'
      new_tweet req
    when 'timeline'
      get_timeline req, false
    when 'seed_tweet'
      seed_tweet req
    else
      json_response 404
    end
  end

  def new_tweet req, cached=true
    pp '** INSIDE NEW TWEET ** '
    params = req
    pp params
    params.delete 'method'
    @tweet = Tweet.new params
    if @tweet.save
      @tweet.to_json
    else 
      @tweet.errors.full_messages
    end
  end
end
