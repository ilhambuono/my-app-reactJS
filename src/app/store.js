import { configureStore } from '@reduxjs/toolkit';
import {counterSlice} from '../features/region';

const store = configureStore({
    reducer: {
        service: counterSlice.reducer
      },
});

export default store;