// @ts-nocheck
import React,{ useEffect, useState} from 'react';
import { useOutletContext } from "react-router-dom";
import TeacherHomeLayout from './../../../clusters/teacher-home-layout';
import TeacherDisciplineShowcase from './../../../components/teacher-discipline-showcase/index';
import AppHomeButtons from './../../../components/app-home-buttons-block';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherDisciplines } from '../../../store/teacher-disciplines-slice';

import { ReactComponent as AppToHomeButton } from './../../../assets/app-home-to-home-button.svg';
import { ReactComponent as AppToDisciplinesButton } from './../../../assets/app-home-to-disciplines-button.svg';
import { ReactComponent as AppToMarksButton } from './../../../assets/app-home-to-marks-button.svg';
import { ReactComponent as AppToTestsButton } from './../../../assets/app-home-to-tests-button.svg';
import { ReactComponent as AppToNotificationButton } from './../../../assets/app-home-to-notification-button.svg';
import { ReactComponent as AppToGroupFlowsButton } from './../../../assets/app-home-to-group-flows-button.svg';
import { ReactComponent as AppToGroupsButton } from './../../../assets/app-home-to-groups-button.svg';

function TeacherHome() {
    const [setTitle] = useOutletContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const disciplinesList = useSelector(state => state.tc_disciplines.disciplinesList);
    
    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
            navigate("/");
            return;
        }

        setTitle('МОЙ КАБИНЕТ');

        dispatch(fetchTeacherDisciplines());
    }, []);
    
    const menuitems = [
        {
            title: "Личный кабинет",
            img: <AppToHomeButton className='item-img'/>,
            to: "/teacher/home"
        },
        {
            title: "Дисциплины",
            img: <AppToDisciplinesButton className='item-img'/>,
            to: "/teacher/disciplins"
        },
        {
            title: "Журнал",
            img: <AppToMarksButton className='item-img'/>,
            to: "/teacher/logs"
        },
        {
            title: "Тесты",
            img: <AppToTestsButton className='item-img'/>,
            to: "/"
        },
        {
            title: "Уведомления",
            img: <AppToNotificationButton className='item-img'/>,
            to: "/"
        },
        {
            title: "Потоки",
            img: <AppToGroupFlowsButton className='item-img'/>,
            to: "/flows"
        },
        {
            title: "Группы",
            img: <AppToGroupsButton className='item-img'/>,
            to: "/groups"
        }
    ]
    
    return ( 
        <div className='teacher-home' style={{height: "100%", width: "100%"}}>
            
            <TeacherHomeLayout>
                <TeacherDisciplineShowcase disciplins={disciplinesList}/>
                <AppHomeButtons menuitems={menuitems}/>
            </TeacherHomeLayout>
        </div>
    );
}

export default TeacherHome;