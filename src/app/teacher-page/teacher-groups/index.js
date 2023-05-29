// @ts-nocheck
import React, { useEffect } from 'react';
import TeacherGroupsLayout from './../../../components/teacher-groups-layout/index';
import TeacherGroupsTable from './../../../components/teacher-groups-table/index';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function TeacherGroups() {
    const [setTitle] = useOutletContext();
    const navigate = useNavigate();

    useEffect(()=>{
        (()=>{
            if(!localStorage.getItem("token"))
            {
                navigate("/");
                return;
            }

            setTitle('ГРУППЫ');
            
        })()
    }, []);

    const groups = [
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
        {name: "adsasdadsa", institute: "sdf", faculty: "sdf", department: "sdf"},
    ];

    return ( 
        <div 
            className='teacher-groups' 
            style={{
                width: '100%', 
                height: '100%', 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "flex-start"
            }}
        >
            <TeacherGroupsLayout>
                <TeacherGroupsTable groups={groups}/>
            </TeacherGroupsLayout>
        </div>
    );
}

export default TeacherGroups;