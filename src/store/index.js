// import { createStoreHook } from 'react-redux';
// import rootReducer from './Reducer';

// const composedEnhancers = composeWithDevTools();

// export const store = createStoreHook(rootReducer);

import { configureStore } from "@reduxjs/toolkit";
import { filtersSilce } from "./filtersSilce";

export const store = configureStore({
    reducer: {
        filters: filtersSilce,
    }
})