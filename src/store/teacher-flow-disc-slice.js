import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const teacherFlowDiscsSlice = createSlice({
    name: 'tc_flowdiscs', 
    initialState: { 
        flowdiscsList: null,
    },
    reducers: {
        setTeacherFlowDiscs(state, action)
        {
            state.flowdiscsList = action.payload
        }
    }
});

export function fetchTeacherFlowDiscs({id_disc = null, id_flow = null} = {})
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/disciplines/teachersflowdisc',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"), 
                id_disc: id_disc, 
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
                let flowdiscsList = databack;
                dispatch(teacherFlowDiscsActions.setTeacherFlowDiscs(flowdiscsList));
            }
        });
    }
}

export const teacherFlowDiscsActions = teacherFlowDiscsSlice.actions;

export default teacherFlowDiscsSlice;