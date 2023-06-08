import { createSlice } from "@reduxjs/toolkit";

const teacherLogSlice = createSlice({
    name: 'tc_log', 
    initialState: { 
        log: null,
        logTypes: null,
        classTypes: null,
    },
    reducers: {
        setTeacherLog(state, action)
        {
            state.log = action.payload;
        },
        setTeacherLogTypes(state, action)
        {
            state.logTypes = action.payload
        },
        setTeacherLogClassTypes(state, action)
        {
            state.classTypes = action.payload
        },
        setMark(state, action)
        {
            const {index_attendance, index_student, mark} = action.payload;
            state.log.log.attendance_group[index_attendance].array_students[index_student].presence_class = mark;
        },
        setDate(state, action)
        {
            const {date, index_attendance} = action.payload;
            state.log.log.attendance_group[index_attendance].date = date;
        },
        setType(state, action)
        {
            const {type_class, index_attendance} = action.payload;
            state.log.log.attendance_group[index_attendance].type_class = type_class;
        },
        setEntry(state, action)
        {
            const {index_displace, index_attendance} = action.payload;
            console.log(index_displace, index_attendance, (index_attendance + index_displace) || 0);
            state.log.log.attendance_group.splice(index_displace == -1 ? index_attendance : index_attendance + 1, 0, {
                date: `${new Date().getFullYear()}-${new Date().getMonth()+1 < 10 ? 0 : ""}${new Date().getMonth()+1}-${new Date().getDate() < 10 ? 0 : ""}${new Date().getDate()}`,
                type_class: state.classTypes[0].name_type,
                array_students: state.log.log.attendance_group[0].array_students.map(elem => {return {...elem, presence_class: ""}})
            });
        },
        deleteEntry(state, action)
        {
            const {index_attendance} = action.payload;
            state.log.log.attendance_group.splice(index_attendance, 1);
        },
    }
});

export function fetchTeacherLogs({id_type = null, id_disc = null, id_flow = null, id_group = null} = {})
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/logs',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"), 
                id_disc: id_disc,
                id_flow: id_flow,
                id_group: id_group,
                id_type: id_type,
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
                let log = databack;
                dispatch(teacherLogActions.setTeacherLog(log));
            }
        });
    }
}

export function fetchTeacherLogsTypes()
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/logs/typelogs',{
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
            }
            else
            {
                let logTypes = databack;
                dispatch(teacherLogActions.setTeacherLogTypes(logTypes));
            }
        });
    }
}

export function fetchTeacherLogsClassTypes()
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/logs/typeclass',{
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
            }
            else
            {
                let classTypes = databack;
                dispatch(teacherLogActions.setTeacherLogClassTypes(classTypes));
            }
        });
    }
}

export const teacherLogActions = teacherLogSlice.actions;

export default teacherLogSlice;