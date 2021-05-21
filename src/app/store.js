import { configureStore } from '@reduxjs/toolkit';
import parametryReducer from '../parametry/parametrySlice';

export const store = configureStore({
    reducer: {
        parametry: parametryReducer
    },
});