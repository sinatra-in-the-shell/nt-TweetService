# app.rb
require 'sinatra'
require 'sinatra/cookies'
require 'sinatra/activerecord'
require 'textacular'
ActiveRecord::Base.extend(Textacular)
ActiveRecord::Base.establish_connection(ENV['DATABASE_URL']) if ENV['DATABASE_URL']!=nil

require 'byebug'
require 'json'
require 'bcrypt'
require 'securerandom'
require 'csv'
require 'faker'
require 'activerecord-import'
require 'newrelic_rpm'
require 'redis'
require 'sidekiq'
require 'securerandom'
require 'dotenv/load'
require 'securerandom'
require 'bunny'

Dir["./models/*.rb"].each {|file| require file }

set :server, "thin"
set :port, 9494

enable :sessions

helpers do
  Dir["./helpers/*.rb"].each {|file| require file }
end

# init redis client, maybe put into another file for cleaness
$timeline_redis = RedisClient.new(ENV['TIMELINE_REDIS'])
$search_redis = RedisClient.new(ENV['SEARCH_REDIS_URL'])

$timeline_redis.clear
$search_redis.clear

# before do
#   #TODO authenticate the caller
# end

begin
  tweet_server
  follow_client
rescue Interrupt => _
  tweet_server.stop
  follow_client.stop
  pp "** rabbit interupted **"
end
