import { Request, Response, Router } from 'express';
import UserRouter from './user.routes';

const router: Router = Router();

// user 계정 생성/관리
router.use('/user', UserRouter);

router.use('/', function(req: Request, res: Response) {
    res.render('index', {
        title: "Hello Google Cloud App Engine!"
    });
});

export default router;