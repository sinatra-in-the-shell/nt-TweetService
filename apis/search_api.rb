#TODO: use textacular to enable full-text search
#USeful Resource: https://www.postgresql.org/docs/10/textsearch-indexes.html
get '/api/search/tags' do
  @keyword = params['keyword'] + '_tags'
  @max_results = params['maxresults'].to_i
  if $search_redis.cached?(@keyword)
    SearchHelper.get_tag_from_redis(@keyword, @max_results)
  else
    SearchHelper.search_tag_from_database(params)
  end
end

get '/api/search/tweets' do
  @keyword = params['keyword'] + '_tweets'
  @max_results = params['maxresults'].to_i
  if $search_redis.cached?(@keyword)
    SearchHelper.get_tweet_from_redis(@keyword, @max_results)
  else
    SearchHelper.search_tweet_from_database(params)
  end
end

get '/api/search/users' do
  @keyword = params['keyword'] + '_users'
  @max_results = params['maxresults'].to_i
  if $search_redis.cached?(@keyword)
    SearchHelper.get_user_from_redis(@keyword, @max_results)
  else
    SearchHelper.search_user_from_database(params)
  end
end
