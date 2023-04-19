import { combineReducers } from 'redux';

import authReducer from '../reducers/auth';
import historyReducer from '../reducers/history';
import methodReducer from '../reducers/method';

const rootReducer = combineReducers({
    auth: authReducer,
    history: historyReducer,
    method: methodReducer,
});

export default rootReducer;