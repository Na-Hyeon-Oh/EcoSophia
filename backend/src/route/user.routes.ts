import { Router } from "express";
import { createUser, loginUser, getUser, deleteUser } from "../controller";

const router: Router = Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/:userId', getUser);
router.delete('/:userId', deleteUser);

export default router;