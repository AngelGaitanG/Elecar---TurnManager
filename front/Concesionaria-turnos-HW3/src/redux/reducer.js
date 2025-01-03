import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        user: {
            username: "",
            password: "",
            imageUrl: "",
            userId: "",
        },
        token: ""
    },
    userAppointments: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setUserAppointments: (state, action) => {
            state.userAppointments = action.payload
        },
        setImageProfile: (state, action) => {
            state.userData.user.imageUrl = action.payload
        }
    }
})

export const { setUserData, setUserAppointments, setImageProfile } = userSlice.actions;


