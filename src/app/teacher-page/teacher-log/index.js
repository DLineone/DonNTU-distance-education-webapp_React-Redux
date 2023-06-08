// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom';
import { fetchTeacherDisciplines } from './../../../store/teacher-disciplines-slice';
import { fetchTeacherGroups, teacherGroupsActions } from './../../../store/teacher-groups-slice';
import { fetchTeacherLogs, fetchTeacherLogsClassTypes, fetchTeacherLogsTypes, teacherLogActions } from '../../../store/teacher-log-slice';
import TeacherLogLayout from './../../../components/teacher-log-layout/index';
import TeacherPresenceLog from './../../../components/teacher-presence-log';

function TeacherLog() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {distId} = useParams();
    const [setTitle] = useOutletContext();
    const {array_flow: flowsList, name_disc: title} = useSelector(state => state.tc_disciplines.disciplinesList?.find(elem => elem.id_disc == distId)) || {};
    const groupsList = useSelector(state => state.tc_groups.groupsList);
    const {log, logTypes, classTypes} = useSelector(state => state.tc_log);
    const [selectedFlow, setFlow] = useState(null);
    const [selectedGroup, setGroup] = useState(null);
    const [selectedType, setType] = useState(null);
    const [isEditable, setEditable] = useState(false);

    {useEffect(() => {
        if(!localStorage.getItem("token"))
        {
            navigate("/");
            return;
        }
        setTitle("ЖУРНАЛЫ");
        dispatch(fetchTeacherDisciplines());
        dispatch(fetchTeacherLogsTypes());
        dispatch(fetchTeacherLogsClassTypes());

        return () => {
            dispatch(teacherGroupsActions.setTeacherGroups(null));
            dispatch(teacherLogActions.setTeacherLog(null));
        };
    },[]);

    useEffect(() => {
        if(!flowsList)
        {
            return;
        }
        if(flowsList.length === 0)
        {
            setFlow({id_flow: null, name_flow: "не выбрано"});
        }
        setFlow(flowsList[0]);
    }, [flowsList]);

    useEffect(() => {
        if(!logTypes)
        {
            return;
        }
        setType(logTypes[0]);
    }, [logTypes]);

    useEffect(() => {
        if(!selectedFlow)
        {
            return;
        }
        dispatch(fetchTeacherGroups({id_flow: selectedFlow.id_flow}));
    }, [selectedFlow]);

    useEffect(() => {
        if(!groupsList)
        {
            return;
        }
        if(groupsList.length === 0)
        {
            setGroup({id_group: null, name_group: "не выбрано"});
        }
        setGroup(groupsList[0]);
    }, [groupsList]);

    useEffect(() => {
        if(!selectedGroup || !selectedFlow || !distId || !selectedType)
        {
            return;
        }
        dispatch(fetchTeacherLogs({id_type: selectedType.id_type, id_disc: distId, id_flow: selectedFlow.id_flow, id_group: selectedGroup.id_group}));
    }, [selectedGroup]);}

    return (  
        <div className='teacher-log' style={{height: "100%", width: "100%", display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
           {selectedGroup && 
           <TeacherLogLayout 
                title={title} 
                type={{logTypes, selectedType, setType}} 
                flow={{flowsList, selectedFlow, setFlow}} 
                group={{groupsList, selectedGroup, setGroup}}
                editable={{isEditable, setEditable}}
                log={log}>
                
                {(selectedType.name_type == "посещаемости") ? 
                    <TeacherPresenceLog 
                        setMark={(obj) => dispatch(teacherLogActions.setMark(obj))}
                        setDate={(obj) => dispatch(teacherLogActions.setDate(obj))}
                        setType={(obj) => dispatch(teacherLogActions.setType(obj))}
                        setEntry={(obj) => dispatch(teacherLogActions.setEntry(obj))} 
                        deleteEntry={(obj) => dispatch(teacherLogActions.deleteEntry(obj))} 
                        classTypes={classTypes} 
                        log={log} 
                        isEditable={isEditable}
                    /> 
                    :
                    <div className=""></div>
                }

            </TeacherLogLayout>}
        </div>
    );
}

export default TeacherLog;