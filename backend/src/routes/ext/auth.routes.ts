import { Router } from "express";
import { ExtAuthController } from "../../controllers/index";

const router: Router = Router();

router.get('/', ExtAuthController.openAuthorizeUrl);

export default router;