import { Router } from "express";
import { createMethod, getMethods, updateMethod, deleteMethod } from '../controller';

const router: Router = Router();

router.post('/:userId', createMethod);
router.get('/:userId', getMethods);
router.put('/:userId/:methodId', updateMethod);
router.delete('/:userId/:methodId', deleteMethod);

export default router;
