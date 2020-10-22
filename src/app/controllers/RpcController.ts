import { Request, Response } from "express"
import RabbitMQ from '../lib/rabbitmq';

class RpcController{

    async index(req:Request,res:Response){

        const {msg='Hello'} = req.query;

        const conn = RabbitMQ.getConnection();

        const queue = conn.declareQueue('rpc',{durable:false});
        
        try{
            const response  = await queue.rpc(msg);

            return res.json(response.getContent());
        }catch(error){
            return res.json(error);
        } finally {
            RabbitMQ.closeConnection();
        }
       
    }

}

export default new RpcController();