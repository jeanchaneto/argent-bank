import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
    token: null,
    email: null,
    password: null,
    firstName: null,
    lastName: null
}


const authSlice = createSlice({
    name: 'authentication',
    initialState:initialAuthState,
    reducers: {
        setToken(state, action){
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        login(state,action) {
            state.isAuthenticated = true;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.firstName = null;
            state.lastName = null;
            state.token = null;
        }
    }
    
});

export const authActions = authSlice.actions;

export default authSlice.reducer;