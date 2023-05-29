import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const teacherFlowsSlice = createSlice({
    name: 'tc_flows', 
    initialState: { 
        flowsList: null,
    },
    reducers: {
        setTeacherFlows(state, action)
        {
            state.flowsList = action.payload
        }
    }
});

export function fetchTeacherFlows({id_creator = null, id_group = null, name_flow = null} = {})
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/flows',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"), 
                id_creator: id_creator, 
                id_group: id_group, 
                name_flow: name_flow
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
                let flowsList = databack;
                dispatch(teacherFlowsActions.setTeacherFlows(flowsList));
            }
        });
    }
}

export const teacherFlowsActions = teacherFlowsSlice.actions;

export default teacherFlowsSlice;