import React, {useState} from 'react';
import { Outlet } from "react-router-dom";
import AppLayout from './../../clusters/app-layout/index';



function TeacherPage() {
    
    const [title, setTitle] = useState('');

    const menuitems = [
        {
            title: 'Личный кабинет',   
            img: './../../assets/app-to-home-logo.svg', 
            to: '/teacher/home'
        },
        {
            title: 'Дисциплины',       
            img: './../../assets/app-to-disciplins-logo.svg', 
            to: '/teacher/disciplins'
        },
        {
            title: 'Журнал',           
            img: './../../assets/app-to-marks-logo.svg', 
            to: '/'
        },
        {
            title: 'Уведомления',      
            img: './../../assets/app-to-notification-logo.svg', 
            to: '/'
        },
        {
            title: 'Потоки',           
            img: './../../assets/app-to-group-flows-logo.svg', 
            to: '/'
        },
        {
            title: 'Группы',           
            img: './../../assets/app-to-groups-logo.svg', 
            to: '/'
        },
        {
            title: 'Файлы',            
            img: './../../assets/app-to-files-logo.svg', 
            to: '/'
        },
    ]

    document.body.style.overflow = "hidden";
    return (
        <div className='teacher-page' style={{height: "100%", width: "100%"}}>
            <AppLayout title={title} outlet={<Outlet context={[setTitle]}/>} menuitems={menuitems}/>
        </div>
    );
}

export default TeacherPage;