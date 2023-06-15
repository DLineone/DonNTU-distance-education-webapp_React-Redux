// @ts-nocheck
import React, {useState} from 'react';
import { Outlet } from "react-router-dom";
import AppLayout from './../../clusters/app-layout/index';
import { ReactComponent as AppToHomeLogo } from './../../assets/app-to-home-logo.svg';
import { ReactComponent as AppToDisciplinsLogo } from './../../assets/app-to-disciplins-logo.svg';
import { ReactComponent as AppToMarksLogo } from './../../assets/app-to-marks-logo.svg';
import { ReactComponent as AppToTestLogo } from './../../assets/app-to-test-logo.svg';
import { ReactComponent as AppToNotificationLogo } from './../../assets/app-to-notification-logo.svg';
import { ReactComponent as AppToGroupFlowsLogo } from './../../assets/app-to-group-flows-logo.svg';
import { ReactComponent as AppToGroupsLogo } from './../../assets/app-to-groups-logo.svg';



function TeacherPage() {
    
    const [title, setTitle] = useState('');

    const menuitems = [
        {
            title: 'Личный кабинет',   
            img: <AppToHomeLogo className='menu-left-img'/> ,
            to: '/teacher/home'
        },
        {
            title: 'Дисциплины',       
            img: <AppToDisciplinsLogo className='menu-left-img'/>, 
            to: '/teacher/disciplins'
        },
        {   
            title: 'Журналы',           
            img: <AppToMarksLogo className='menu-left-img'/>,
            to: '/teacher/logs'
        },
        {
            title: 'Тесты',           
            img: <AppToTestLogo className='menu-left-img'/>, 
            to: '/'
        },
        {
            title: 'Уведомления',      
            img: <AppToNotificationLogo className='menu-left-img'/>, 
            to: '/'
        },
        {
            title: 'Потоки',           
            img: <AppToGroupFlowsLogo className='menu-left-img'/>, 
            to: '/teacher/flows'
        },
        {
            title: 'Группы',           
            img: <AppToGroupsLogo className='menu-left-img'/>, 
            to: '/teacher/groups'
        }
    ]

    document.body.style.overflow = "hidden";
    return (
        <div className='teacher-page' style={{height: "100%", width: "100%"}}>
            <AppLayout title={title} outlet={<Outlet context={[setTitle]}/>} menuitems={menuitems}/>
        </div>
    );
}

export default TeacherPage;