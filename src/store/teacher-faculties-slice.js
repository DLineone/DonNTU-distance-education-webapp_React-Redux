import { createSlice } from "@reduxjs/toolkit";

const teacherFacultiesSlice = createSlice({
    name: 'tc_faculties', 
    initialState: { 
        teacherFacultiesList: null
    },
    reducers: {
        setTeacherFaculties(state, action)
        {
            state.teacherFacultiesList = action.payload
        }
    }
});

export function fetchTeacherFaculties({id_institute = null, id_faculty = null} = {})
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/faculties',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"),
                id_institute: id_institute,
                id_faculty: id_faculty
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
                let teacherFacultiesList = databack;
                dispatch(teacherFacultiesActions.setTeacherFaculties(teacherFacultiesList));
            }
        });
    }
}

export const teacherFacultiesActions = teacherFacultiesSlice.actions;

export default teacherFacultiesSlice;