import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice.jsx';

const store = configureStore({
    reducer:{ authReducer}
})

export default store;