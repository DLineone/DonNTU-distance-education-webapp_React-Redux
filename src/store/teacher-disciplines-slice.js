import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const teacherDisciplinesSlice = createSlice({
    name: 'tc_disciplines', 
    initialState: { 
        disciplinesList: null,
        newDiscipline: null,
    },
    reducers: {
        setTeacherDisciplines(state, action)
        {
            state.disciplinesList = action.payload
        }
    }
});

export function fetchTeacherDisciplines({name = null, id = null} = {})
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/disciplines',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"), 
                name_disc: name, 
                id_disc: id
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
                let disciplinesList = databack;
                dispatch(teacherDisciplinesActions.setTeacherDisciplines(disciplinesList));
            }
        });
    }
}

export function createDiscipline({id_institute = null, id_faculty = null, id_department = null, name_disc = null} = {}, navigate = null)
{
    return function(dispatch)
    {   
        fetch('http://dist.donntu.ru:3030/teacher/disciplines/createdisc',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"), 
                id_institute: id_institute, 
                id_faculty: id_faculty, 
                id_department: id_department, 
                name_disc: name_disc
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
                alert(databack.info);
                dispatch(fetchTeacherDisciplines());
                if(navigate)
                {
                    navigate();
                }
            }
        });
    }
}

export function deleteDiscipline({id_disc = null} = {})
{
    return function(dispatch)
    {   
        fetch('http://dist.donntu.ru:3030/teacher/disciplines/deletedisc',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"), 
                id_disc: id_disc,
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
                alert(databack.info);
                dispatch(fetchTeacherDisciplines());
            }
        });
    }
}

export function deleteDisciplineFlow({id_disc = null, id_flow = null} = {})
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
                fetch('http://dist.donntu.ru:3030/teacher/disciplines/deleteflowindisc', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id_user_reg: localStorage.getItem("id_user_reg"),
                        token: localStorage.getItem("token"), 
                        id_disc_flow: databack.id_disc_flow
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
                        alert(databack.info);
                        dispatch(fetchTeacherDisciplines());
                    }
                })
            }
        });
    }
}

export function editDiscipline({id_disc = null, id_institute = null, id_faculty = null, id_department = null, new_name = null, id_new_creator = null} = {}, navigate = null)
{
    return function(dispatch)
    {   
        fetch('http://dist.donntu.ru:3030/teacher/disciplines/editdisc',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"), 
                id_disc: id_disc, 
                id_institute: id_institute, 
                id_faculty: id_faculty, 
                id_department: id_department, 
                new_name: new_name, 
                id_new_creator: id_new_creator 
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
                alert(databack.info);
                dispatch(fetchTeacherDisciplines());
                if(navigate)
                {
                    navigate();
                }
            }
        });
    }
}

export function addFlow({id_disc = null, id_flow = null, name_flow = null, number_hours_reading = null, teachers = null} = {}, navigate = null)
{
    return function(dispatch)
    {   
        fetch('http://dist.donntu.ru:3030/teacher/disciplines/addflowindisc',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"), 
                id_disc: id_disc, 
                id_flow: id_flow, 
                name_flow: name_flow, 
                number_hours_reading: number_hours_reading, 
                teachers: teachers
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
                alert(databack.info);
                dispatch(fetchTeacherDisciplines());
                if(navigate)
                {
                    navigate();
                }
            }
        });
    }
}

export function editFlowDisc({number_hours_reading = null, id_disc_flow = null, add_teachers = null, delete_teachers = null} = {}, navigate = null)
{
    return function(dispatch)
    {   
        fetch('http://dist.donntu.ru:3030/teacher/disciplines/editflowindisc',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"), 
                number_hours_reading: number_hours_reading, 
                id_disc_flow: id_disc_flow, 
                add_teachers: add_teachers, 
                delete_teachers: delete_teachers
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
                alert(databack.info);
                dispatch(fetchTeacherDisciplines());
                if(navigate)
                {
                    navigate();
                }
            }
        });
    }
}

export const teacherDisciplinesActions = teacherDisciplinesSlice.actions;

export default teacherDisciplinesSlice;