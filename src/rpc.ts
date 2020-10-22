import RabbitMQ from './app/lib/rabbitmq';

const conn = RabbitMQ.getConnection();

const queue = conn.declareQueue('rpc',{durable:false});

queue.activateConsumer((message) => {
    console.log("Message received: " + message.getContent());

    return 'Hello Igor!!!';
},{noAck:true});