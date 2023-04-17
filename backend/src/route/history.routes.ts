import { Router } from "express";
import { createHistory, getHistories, updateHistory, deleteHistory } from '../controller';

const router: Router = Router();

router.post('/:userId', createHistory);
router.get('/:userId', getHistories);
router.put('/:userId/:historyId', updateHistory);
router.delete('/:userId/:historyId', deleteHistory);

export default router;
