import {Request, Response} from 'express';
import ConsumerController from './app/controllers/ConsumerController';
import TransmitterController from './app/controllers/TransmitterController';

export class Routes {

    public callRoutes(app){
        app.get('/',(__:Request,res:Response) => res.send('Hello world!!!'));
        app.get('/consumer',ConsumerController.index);
        app.get('/transmitter',TransmitterController.index);
    }

}