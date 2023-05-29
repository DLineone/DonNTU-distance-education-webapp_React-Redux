import { createSlice } from "@reduxjs/toolkit";

const teacherTeachersSlice = createSlice({
    name: 'tc_teachers', 
    initialState: { 
        teacherTeachersList: null
    },
    reducers: {
        setTeacherTeachers(state, action)
        {
            state.teacherTeachersList = action.payload
        }
    }
});

export function fetchTeacherTeachers()
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/teachers',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token")
            })
        })
        .then(response => response.json())
        .then(databack => {
            if(databack?.error)
            {
                alert(databack.error);
            }
            else
            {
                let teacherTeachersList = databack;
                dispatch(teacherTeachersActions.setTeacherTeachers(teacherTeachersList));
            }
        });
    }
}

export const teacherTeachersActions = teacherTeachersSlice.actions;

export default teacherTeachersSlice;