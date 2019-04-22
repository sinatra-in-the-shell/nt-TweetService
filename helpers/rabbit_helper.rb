def tweet_server
  unless $tweet_server
    $tweet_server = RabbitServer.new ENV['RABBITMQ_URL']
    $tweet_server.start 'tweet_server', TweetHelper.new
    pp "tweet server started"
  end
  $tweet_server
end