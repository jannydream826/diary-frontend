import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStatusType } from "../../constant/types";

const initialBookState: AuthStatusType = {
    isAuthenticated: false,
    user: {
        id: null,
        name: null,
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialBookState,
    reducers: {
        setIsAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
        }
    }
})

export default authSlice;