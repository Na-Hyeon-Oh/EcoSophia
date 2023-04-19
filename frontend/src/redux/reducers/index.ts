import { combineReducers } from 'redux';

import authReducer from '../reducers/auth';
import historyReducer from '../reducers/history';
import methodReducer from '../reducers/method';
import filterReducer from '../reducers/filter';

const rootReducer = combineReducers({
    auth: authReducer,
    history: historyReducer,
    method: methodReducer,
    filter: filterReducer
});

export default rootReducer;