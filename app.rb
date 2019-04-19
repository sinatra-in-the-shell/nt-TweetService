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

Dir["./models/*.rb"].each {|file| require file }

set :server, "thin"
set :port, 9494

enable :sessions

helpers do
  Dir["./helpers/*.rb"].each {|file| require file }
end

# init redis client, maybe put into another file for cleaness
$followers_redis = RedisClient.new(ENV['FOLLOWERS_REDIS'])
$leaders_redis = RedisClient.new(ENV['LEADERS_REDIS'])
$timeline_redis = RedisClient.new(ENV['TIMELINE_REDIS'])
$followers_redis.clear
$leaders_redis.clear
$timeline_redis.clear

# Apis
Dir["./apis/*.rb"].each {|file| require file }
