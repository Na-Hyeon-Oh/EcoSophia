import { Request, Response, Router } from 'express';
import UserRouter from './user.routes';
import ExtAuthRouter from "./ext/auth.routes";

const router: Router = Router();

// openapi 본인인증 및 코드 발급
router.use('/openapi/auth', ExtAuthRouter)

// user 계정 생성/관리
router.use('/user', UserRouter);

router.use('/', function(req: Request, res: Response) {
    res.render('index', {
        title: "Hello Google Cloud App Engine!"
    });
});

export default router;