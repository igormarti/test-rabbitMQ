import { Request, Response } from "express";

class ConsumerController{

    async index(req:Request,res:Response){

        return res.json({
            message:'Hello Consumer'
        });
    }
}

export default new ConsumerController();