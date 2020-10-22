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
        setTimeout(()=>{
            this.connection.close();
        },500);
    }

    Message(msg):Amqp.Message{
        return new Amqp.Message(msg);
    }

    sendMessage(msg,exchange){
        const message = new Amqp.Message(msg);
        exchange.send(message);
    }
}

export default new RabbitMQ();