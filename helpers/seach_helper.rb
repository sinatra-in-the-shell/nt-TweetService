require_relative 'response_helper.rb'
module SearchHelper
  def self.search_tag_from_database(params)
    keyword = params['keyword']
    skip = params['skip']
    max_results = params['maxresults']
    from_date = params['fromDate']
    to_date = params['toDate']
    tags = Hashtag.with_keyword(keyword)
                   .after_date(from_date)
                   .before_date(to_date)
                   .with_skip(skip)
                   .with_max(max_results)
    puts "[REDIS MISS] searched tags by #{keyword}"
    $search_redis.push_results(keyword + '_tags', tags) if tags
    json_array_response tags
  end

  def self.search_tweet_from_database(params)
    keyword = params['keyword']
    skip = params['skip']
    max_results = params['maxresults']
    from_date = params['fromDate']
    to_date = params['toDate']
    tweets = Tweet.with_keyword(keyword)
                  .after_date(from_date)
                  .before_date(to_date)
                  .with_skip(skip)
                  .with_max(max_results)
    puts "[REDIS MISS] searched tweets by #{keyword}"
    $search_redis.push_results(keyword + '_tweets', tweets) if tweets
    json_array_response tweets
  end

  def self.search_user_from_database(params)
    keyword = params['keyword']
    skip = params['skip']
    max_results = params['maxresults']
    users = User.with_keyword(keyword)
                .with_skip(skip)
                .with_max(max_results)
    puts "[REDIS MISS] searched users by #{keyword}"
    $search_redis.push_results(keyword + '_users', users) if users
    json_array_response users
  end

  def self.get_tweet_from_redis(keyword, max_results, redis_client)
    puts "[REDIS HIT] searched #{keyword}"
    tweets = redis_client.get_json_list(keyword, 0, max_results - 1)
    json_response 200, tweets
  rescue StandardError => e
    json_response 400, e.message
  end
end
