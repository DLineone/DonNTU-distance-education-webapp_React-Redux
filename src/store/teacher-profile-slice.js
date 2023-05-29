import { createSlice } from "@reduxjs/toolkit";

const teacherProfileSlice = createSlice({
    name: "tc_profile",
    initialState: {profile: null},
    reducers:{
        setProfile(state, action){
            state.profile = action.payload;
        }
    }
});

export function fetchTeacherProfile()
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/profile',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id_user_reg: localStorage.getItem("id_user_reg"),
            token: localStorage.getItem("token"), 
        })
        })
        .then(response => response.json())
        .then(databack => {
            if(databack?.error)
            {
                alert(databack.error);
                return;
            }
            let profile = databack;
            dispatch(teacherProfileActions.setProfile(profile));
        });
    }
}

export const teacherProfileActions = teacherProfileSlice.actions;

export default teacherProfileSlice;