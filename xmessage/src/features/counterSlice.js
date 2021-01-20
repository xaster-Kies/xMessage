import { createSlice } from '@reduxjs/tollkit';

export const userSlice = createSlice( {
    name: 'user', 
    initialState: {
        value: 0,
    },
    reducers: {
        login: (state, action) => {
            state.user = 1;
        },
        logout: state => {
            state.user -= 1;
        },
        
    },
   });

   export const { login, logout} = userSlice.actions;

   export const selectUser = state => state.user.user;

   export default userSlice.reducer;
