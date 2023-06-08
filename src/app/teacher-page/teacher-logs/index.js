// @ts-nocheck
import React, { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import TeacherLogsLayout from './../../../components/teacher-logs-layout/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherDisciplines } from './../../../store/teacher-disciplines-slice';
import TeacherLogsElement from './../../../components/teacher-logs-element/inedx';
import { Skeleton } from '@mui/material';

function TeacherLogs() {
    const [setTitle] = useOutletContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const disciplinesList = useSelector(state => state.tc_disciplines.disciplinesList);

    useEffect(() => {
        if(!localStorage.getItem("token"))
        {
            navigate("/");
            return;
        }
        setTitle("ЖУРНАЛЫ");
        dispatch(fetchTeacherDisciplines());
    },[]);

    function navigateLog(id)
    {
        navigate(`../log/${id}`);
    }

    return ( 
        <div className='teacher-logs' style={{height: "100%", width: "100%"}}>
            <TeacherLogsLayout>
                {disciplinesList?.map((discipline)=>
                    <TeacherLogsElement discipline={discipline} navigateLog={navigateLog}/>
                ) ||
                [1,2,3,4].map((elem) => 
                    <Skeleton animation="wave" variant="rounded" height={"215px"} width={"100%"}>
                        <TeacherLogsElement/>  
                    </Skeleton>        
                )}
            </TeacherLogsLayout>
        </div>
    );
}

export default TeacherLogs;