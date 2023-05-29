// @ts-nocheck
import React, { useEffect, useState } from 'react';
import TeacherProfileLayout from './../../../components/teacher-profile-layout/index';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherProfile } from './../../../store/teacher-profile-slice';

function TeacherProfile() {

    
    const [setTitle] = useOutletContext();
    const [data, setData] = useState(undefined);
    const profile = useSelector(state => state.tc_profile.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
            navigate("/");
            return;
        }
            
        setTitle('МОЙ ПРОФИЛЬ');
        
        dispatch(fetchTeacherProfile());
    }, []);

    return (  
        <div className='teacher-profile' style={{height: "100%", width: "100%"}}>
            {profile && 
            <TeacherProfileLayout teacher={profile}/>}
        </div>
    );
}

export default TeacherProfile;