class RabbitServer

  def initialize(rabbit_url=nil)
    if rabbit_url
      @connection = Bunny.new(url: rabbit_url)
    else
      @connection = Bunny.new
    end
    @connection.start
    @channel = @connection.create_channel
  end

  def start(queue_name, helper)
    @helper = helper
    @queue = channel.queue(queue_name)
    @exchange = channel.default_exchange
    subscribe_to_queue
  end

  def stop
    channel.close
    connection.close
  end

  private

  attr_reader :channel, :exchange, :queue, :connection, :helper

  def subscribe_to_queue
    queue.subscribe do |delivery_info, properties, payload|
      req = JSON.parse payload

      pp '** PAYLOAD and REQ **:'
      pp payload
      pp req

      pp '** DELIVERY IFO, PROPERTIIES ** :'
      pp delivery_info
      pp properties


      result = helper.process req
      pp '** RESULT ** :'
      pp req
      
      exchange.publish(
        result,
        routing_key: properties.reply_to,
        correlation_id: properties.correlation_id
      )
    end
  end
end
