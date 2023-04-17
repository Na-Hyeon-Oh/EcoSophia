import { Request, Response, Router } from 'express';
import UserRouter from './user.routes';
import HistoryRouter from './history.routes';

const router: Router = Router();

// user 계정 생성/관리
router.use('/user', UserRouter);

// user별 history 관리
router.use('/history', HistoryRouter);

router.use('/', function(req: Request, res: Response) {
    res.render('index', {
        title: "Hello Google Cloud App Engine!"
    });
});

export default router;