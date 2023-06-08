import { createSlice } from "@reduxjs/toolkit";

const teacherGroupsSlice = createSlice({
    name: 'tc_groups', 
    initialState: { 
        groupsList: null,
    },
    reducers: {
        setTeacherGroups(state, action)
        {
            state.groupsList = action.payload
        }
    }
});

export function fetchTeacherGroups({id_flow = null} = {})
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/groups',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"), 
                id_flow: id_flow
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
                let groupsList = databack;
                dispatch(teacherGroupsActions.setTeacherGroups(groupsList));
            }
        });
    }
}

export const teacherGroupsActions = teacherGroupsSlice.actions;

export default teacherGroupsSlice;