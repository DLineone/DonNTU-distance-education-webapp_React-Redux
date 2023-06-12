import { createSlice } from "@reduxjs/toolkit";

const teacherLogSlice = createSlice({
    name: 'tc_log', 
    initialState: { 
        log: null,
        logTypes: null,
        classTypes: null,
        executionTypes: null,
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
        setTeacherLogExecutionTypes(state, action)
        {
            state.executionTypes = action.payload
        },
        setAttendanceMark(state, action)
        {
            const {index_attendance, index_student, mark} = action.payload;
            state.log.log.attendance_group[index_attendance].array_students[index_student].presence_class = mark;
        },
        setAttendanceDate(state, action)
        {
            const {date, index_attendance} = action.payload;
            state.log.log.attendance_group[index_attendance].date = date;
        },
        setAttendanceType(state, action)
        {
            const {type_class, index_attendance} = action.payload;
            state.log.log.attendance_group[index_attendance].type_class = type_class;
        },
        setAttendanceEntry(state, action)
        {
            const {index_displace, index_attendance} = action.payload;
            state.log.log.attendance_group.splice(index_displace == -1 ? index_attendance : index_attendance + 1, 0, {
                date: `${new Date().getFullYear()}-${new Date().getMonth()+1 < 10 ? 0 : ""}${new Date().getMonth()+1}-${new Date().getDate() < 10 ? 0 : ""}${new Date().getDate()}`,
                type_class: state.classTypes[0].name_type,
                array_students: state.log.log.attendance_group[0].array_students.map(elem => {return {...elem, presence_class: ""}})
            });
        },
        deleteAttendanceEntry(state, action)
        {
            const {index_attendance} = action.payload;
            if(state.log.log.attendance_group.length !== 1)
            {
                state.log.log.attendance_group.splice(index_attendance, 1);
                return;
            }
            state.log.log.attendance_group = [
                {
                    date: `${new Date().getFullYear()}-${new Date().getMonth()+1 < 10 ? 0 : ""}${new Date().getMonth()+1}-${new Date().getDate() < 10 ? 0 : ""}${new Date().getDate()}`,
                    type_class: state.classTypes[0].name_type,
                    array_students: state.log.log.attendance_group[0].array_students.map(elem => {return {...elem, presence_class: ""}})
                }
            ];
        },setProgressOtherTask(state, action)
        {
            const {index_task, id_student, date, score} = action.payload;
            state.log.log.other_types_control.other_tasks[index_task].array_students.find(student => student.id_student == id_student).date = date;
            state.log.log.other_types_control.other_tasks[index_task].array_students.find(student => student.id_student == id_student).score = score;
        },
        setProgressOtherTaskEntryName(state, action)
        {
            const {index_task, name} = action.payload;
            state.log.log.other_types_control.other_tasks[index_task].name_control = name;
        },
        setProgressOtherTaskEntry(state, action)
        {
            const {index_displace, index_task} = action.payload;
            state.log.log.other_types_control.other_tasks.splice(index_displace == -1 ? index_task : index_task + 1, 0, {
                name_control: "Новое задание",
                array_students: state.log.log.other_types_control.other_tasks[0].array_students.map(elem => {return {...elem, date: null, score: null}})
            });
        },
        deleteProgressOtherTaskEntry(state, action)
        {
            const {index_task} = action.payload;
            if(state.log.log.other_types_control.other_tasks.length !== 1)
            {
                state.log.log.other_types_control.other_tasks.splice(index_task, 1);
                return;
            }
            state.log.log.other_types_control.other_tasks = [
                {
                    name_control: "Новое задание",
                    array_students: state.log.log.other_types_control.other_tasks[0].array_students.map(elem => {return {...elem, date: null, score: null}})
                }
            ];
        },
        setProgressIntersessional(state, action)
        {
            const {id_student, date, passage} = action.payload;
            state.log.log.Control_educational_process.intersessional_control.array_students.find(student => student.id_student == id_student).date = date;
            state.log.log.Control_educational_process.intersessional_control.array_students.find(student => student.id_student == id_student).passage = passage;
        },
        setProgressPasses(state, action)
        {
            const {id_student, date, count} = action.payload;
            state.log.log.Control_educational_process.passes.array_students.find(student => student.id_student == id_student).date = date;
            state.log.log.Control_educational_process.passes.array_students.find(student => student.id_student == id_student).count = count;
        },
        setProgressExam(state, action)
        {
            const {index_task, id_student, date, score} = action.payload;
            state.log.log.Results_control_educational_process.exam.array_students.find(student => student.id_student == id_student).date = date;
            state.log.log.Results_control_educational_process.exam.array_students.find(student => student.id_student == id_student).score = score;
        },
        setProgressOffset(state, action)
        {
            const {index_task, id_student, date, score} = action.payload;
            state.log.log.Results_control_educational_process.offset.array_students.find(student => student.id_student == id_student).date = date;
            state.log.log.Results_control_educational_process.offset.array_students.find(student => student.id_student == id_student).score = score;
        },
    }
});

export function fetchTeacherLog({id_type = null, id_disc = null, id_flow = null, id_group = null} = {})
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

export function fetchTeacherLogTypes()
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

export function fetchTeacherLogClassTypes()
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

export function fetchTeacherLogExecutionTypes()
{
    return function(dispatch)
    {
        fetch('http://dist.donntu.ru:3030/teacher/type_execution',{
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
                let executionTypes = databack;
                dispatch(teacherLogActions.setTeacherLogExecutionTypes(executionTypes));
            }
        });
    }
}

export const teacherLogActions = teacherLogSlice.actions;

export default teacherLogSlice;