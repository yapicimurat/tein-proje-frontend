import {createSlice} from "@reduxjs/toolkit";

// const USER_TYPES = {
//   ADMIN: 0,
//   EMPLOYEE: 1  
// };

//user type -> admin or employee
//user id
//username
//password
const initialState = {
    type: null,
    isLogged: false,
    userId: null,
    username: "",
    password: ""
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.type = action.payload.type;
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.password = action.payload.password;
            return state;
        }
    }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;




