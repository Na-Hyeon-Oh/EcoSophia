import { Router } from "express";
import { UserController } from "../controllers/index";

const router: Router = Router();

router.post('/', UserController.createUser);
router.get('/:userId', UserController.findUserById);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);

export default router;