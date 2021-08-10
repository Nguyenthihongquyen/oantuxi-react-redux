import { createStore, combineReducers } from 'redux';
import oanTuXiReducer from './reducers/oanTuXiReducer';

const rootReducer = combineReducers({
    oanTuXiReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;