import RabbitMQ from './app/lib/rabbitmq';

const conn = RabbitMQ.getConnection();
const exchange = conn.declareExchange('test');
const queue = conn.declareQueue('test');
queue.bind(exchange);
queue.activateConsumer((message) => {
    console.log("Message received: " + message.getContent());
});