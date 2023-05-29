import { createSlice } from "@reduxjs/toolkit";

const teacherInstitutionsSlice = createSlice({
    name: 'tc_institutions', 
    initialState: { 
        teacherInstitutionsList: null
    },
    reducers: {
        setTeacherInstitutions(state, action)
        {
            state.teacherInstitutionsList = action.payload
        }
    }
});

export function fetchTeacherInstitutions({id_institute = null} = {})
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/institutions',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"),
                id_institute: id_institute
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
                let teacherInstitutionsList = databack;
                dispatch(teacherInstitutionsActions.setTeacherInstitutions(teacherInstitutionsList));
            }
        });
    }
}

export const teacherInstitutionsActions = teacherInstitutionsSlice.actions;

export default teacherInstitutionsSlice;