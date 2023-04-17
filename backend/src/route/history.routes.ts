import { Router } from "express";
import { createHistory, getHistories, updateHistory, deleteHistory } from '../controller';

const router: Router = Router();

router.post('/', createHistory);
router.get('/', getHistories);
router.put('/:historyId', updateHistory);
router.delete('/:historyId', deleteHistory);

export default router;
