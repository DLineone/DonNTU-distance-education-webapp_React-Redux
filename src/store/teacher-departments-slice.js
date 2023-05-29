import { createSlice } from "@reduxjs/toolkit";

const teacherDepartmentsSlice = createSlice({
    name: 'tc_departments', 
    initialState: { 
        teacherDepartmentsList: null
    },
    reducers: {
        setTeacherDepartments(state, action)
        {
            state.teacherDepartmentsList = action.payload
        }
    }
});

export function fetchTeacherDepartments({id_institute = null, id_faculty = null, id_department = null} = {})
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/departments',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"),
                id_institute: id_institute,
                id_faculty: id_faculty,
                id_department: id_department
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
                let teacherDepartmentsList = databack;
                dispatch(teacherDepartmentsActions.setTeacherDepartments(teacherDepartmentsList));
            }
        });
    }
}

export const teacherDepartmentsActions = teacherDepartmentsSlice.actions;

export default teacherDepartmentsSlice;