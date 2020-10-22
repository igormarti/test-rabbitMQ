import { Request, Response } from "express"
import RabbitMQ from '../lib/rabbitmq';

class TransmitterController{

    async index(req:Request,res:Response){

        const {msg='Hello'} = req.query;

        const conn = RabbitMQ.getConnection();
        const exchange = conn.declareExchange('test');
        const queue = conn.declareQueue('test');
        queue.bind(exchange);

        conn.completeConfiguration().then(() => {
            RabbitMQ.sendMessage(msg,exchange);
        });

        return res.json("ok");
    }

}

export default new TransmitterController();