import { createUser, loginUser, getUser, deleteUser } from './user.controller';
import { createHistory, getHistories, updateHistory, deleteHistory } from './history.controller';
import { createMethod, getMethods, updateMethod, deleteMethod } from './method.controller';

export {
    createUser, loginUser, getUser, deleteUser,                     // UserController
    createHistory, getHistories, updateHistory, deleteHistory,      // HistoryController
    createMethod, getMethods, updateMethod, deleteMethod            // MethodController
}