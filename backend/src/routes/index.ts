import { Request, Response, Router } from 'express';
import UserRouter from './user.routes';

import authorizeService from "../services/ext/authorize.service";

const router: Router = Router();

router.use('/', function(req: Request, res: Response) {
    res.render('index',
        {title: "Hello Google Cloud App Engine!"});
    authorizeService.authorize();
});
router.use('/user', UserRouter);

export default router;