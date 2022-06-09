import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import myThunk from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(myThunk)
  );
  return store;
};

export default configureStore;
