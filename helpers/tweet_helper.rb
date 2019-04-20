class TweetHelper

  def initialize
  end
  
  def process req
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
    user_id = req['params']['user_id']
    @user = User.find user_id
    pp "** in new tweet method ** user_id is #{user_id}"
    # @tweet = Tweet.new(
    #   user: @user,
    #   comment_to_id: params['comment_to_id'],
    #   retweet_from_id: params['retweet_from_id'],
    #   text: params['text'],
    #   tweet_type: params['tweet_type']
    # )
    # #find hashtags in the tweet
    # params['text'].scan(/#\w+/).flatten.each do |tag|
    #   @tag = Hashtag.find_by_name(tag)
    #   @tag = Hashtag.create(name: tag) if @tag == nil
    #   @tweet.hashtags << @tag
    # end
    # if @tweet.save
    #   fanout_helper(@user.id, @tweet)
    #   json_response 200, @tweet
    # else
    #   json_response 400, nil, @tweet.errors.full_messages
    # end
  end


end
