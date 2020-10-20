import * as Amqp from "amqp-ts";

class RabbitMQ{

    protected connection:Amqp.Connection;

    constructor(){
        this.connection = new Amqp.Connection('amqp://localhost');
    }

    getConnection(){
       return this.connection;
    }

    closeConnection(){
       this.connection.close();
    }

    sendMessage(msg,exchange){
        const message = new Amqp.Message(msg);
        exchange.send(message);
    }
}

export default new RabbitMQ();