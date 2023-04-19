import { createSlice } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

export interface AuthState {
    userId: number | null;
}

const initialState: AuthState = {
    userId: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // sign-in/up
        saveUserId: (state, action) => {
            state.userId = action.payload;
        },
        // sign-out
        clearUserId: (state) => {
            state.userId = null;
        },
    },
});

export const { saveUserId, clearUserId } = authSlice.actions;
export default authSlice.reducer;
