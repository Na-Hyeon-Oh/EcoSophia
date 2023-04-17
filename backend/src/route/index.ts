import { Request, Response, Router } from 'express';
import UserRouter from './user.routes';
import HistoryRouter from './history.routes';
import MethodRouter from './method.routes';

const router: Router = Router();

// user 계정 생성/관리
router.use('/user', UserRouter);

// user별 history 관리
router.use('/history', HistoryRouter);

// user별 method 관리
router.use('/method', MethodRouter);

router.use('/', function(req: Request, res: Response) {
    res.render('index', {
        title: "Hello Google Cloud App Engine!"
    });
});

export default router;