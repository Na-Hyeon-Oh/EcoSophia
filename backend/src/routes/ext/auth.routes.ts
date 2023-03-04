import { Router } from "express";
import { ExtAuthController } from "../../controllers/index";

const router: Router = Router();

router.get('/', ExtAuthController.openAuthorizeUrl);
router.get('/token', ExtAuthController.issueToken);

export default router;