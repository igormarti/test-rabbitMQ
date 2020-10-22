import {Request, Response} from 'express';
import TransmitterController from './app/controllers/TransmitterController';
import RpcController from './app/controllers/RpcController';

export class Routes {

    public callRoutes(app){
        app.get('/',(__:Request,res:Response) => res.send('Hello world!!!'));
        app.get('/transmitter',TransmitterController.index);
        app.get('/rpc',RpcController.index);
    }

}