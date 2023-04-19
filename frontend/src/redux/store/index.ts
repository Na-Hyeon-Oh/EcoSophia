import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'] // persist only the authReducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;

const persistor = persistStore(store);

export { store, persistor };
