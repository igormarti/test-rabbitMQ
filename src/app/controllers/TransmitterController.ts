import { Request, Response } from "express"
import RabbitMQ from '../lib/rabbitmq';

class TransmitterController{

    async index(req:Request,res:Response){
        const conn = RabbitMQ.getConnection();
        const exchange = conn.declareExchange('test');
        const queue = conn.declareQueue('test');
        queue.bind(exchange);

        conn.completeConfiguration().then(() => {
            RabbitMQ.sendMessage('Hello',exchange);
        });

        return res.json("ok");
    }

}

export default new TransmitterController();