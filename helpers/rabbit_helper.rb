def tweet_server
  unless $tweet_server
    $tweet_server = RabbitServer.new ENV['RABBITMQ_URL']
    $tweet_server.start 'tweet_queue', TweetHelper.new
    pp "tweet server started"
  end
  $tweet_server
end

def follow_client
  unless $follow_client
    $follow_client = RabbitClient.new(
      ENV['CLOUDAMQP_COBALT_URL'],
      'follow_queue'
    )
    pp "follow client started"
  end
  $follow_client
end
