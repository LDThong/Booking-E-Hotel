import { createStoreHook } from 'react-redux';
import rootReducer from './Reducer';

const store = createStoreHook(rootReducer);

export default store;