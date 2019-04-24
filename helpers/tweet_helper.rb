class TweetHelper

  def initialize
  end

  def process req
    case req['method']
    when 'new_tweet'
      new_tweet req['args']
    when 'get_timeline'
      get_timeline req['args']
    when 'seed_tweet'
      seed_tweet req['args']
    when 'get_user_tweets'
      get_user_tweets req['args']
    when 'search_tweets'
      search_tweets req['args']
    else
      'Unknown method'
    end
  end

  private

    def new_tweet args
      @tweet = Tweet.new args
      if @tweet.save
        @tweet.to_json
      else
        @tweet.errors.full_messages
      end
    end

    def get_timeline args
      user_id = args['user_id'].to_i
      limit = (args['limit'] || 50).to_i

      if $timeline_redis.cached?(user_id)
        begin
          @timeline = $timeline_redis.get_json_list(user_id, 0, -1)
        rescue StandardError => e
          e.message
        end
      else
        followings = follow_client.call(
          {
            method: 'followings',
            args: {
              id: user_id
            }
          }
        )
        @timeline = Tweet.where(user_id: followings.map{|u| u['id']})
                         .order(created_at: :desc)
                         .includes(:retweet_from, :likes, :retweets)
                         .limit(limit)
                         .as_json(
                           include: :retweet_from,
                           methods: [:like_num, :retweet_num]
                         )
        # change from SQL to get_timeline methods in timeline_helper.rb
        # has been prepared for separating services
        # @timeline = get_timeline(user.id, limit)
        $timeline_redis.push_results(user_id, @timeline)
      end
      @timeline.to_json
    end

    def seed_tweet
      load_seed_tweets(args['count'].to_i, args['filename'])
    end

    def get_user_tweets args
      @tweets = Tweet.where(user_id: args['user_id'].to_i)
                     .order(created_at: :desc)
                     .includes(:retweet_from, :likes, :retweets)
                     .limit(limit)
                     .as_json(
                       include: :retweet_from,
                       methods: [:like_num, :retweet_num]
                     )
      @tweets.to_json
    end

    def search_tweets args
      keyword = args['keyword']
      skip = args['skip']
      max_results = args['maxresults'] || 50
      from_date = args['fromDate']
      to_date = args['toDate']
      @tweets = Tweet.with_keyword(keyword)
                     .after_date(from_date)
                     .before_date(to_date)
                     .with_skip(skip)
                     .with_max(max_results)
                     .as_json(
                       include: :retweet_from,
                       methods: [:like_num, :retweet_num]
                     )
      @tweets.to_json
    end
end
