import React, {useEffect} from 'react';
import { useOutletContext } from "react-router-dom";
import TeacherHomeLayout from './../../../clusters/teacher-home-layout';
import TeacherDisciplineShowcase from './../../../components/teacher-discipline-showcase/index';
import AppHomeButtons from './../../../components/app-home-buttons-block';

function TeacherHome() {
    // @ts-ignore
    const [setTitle] = useOutletContext();

    useEffect(() => {
        setTitle('МОЙ КАБИНЕТ');
    }, []);

    const disciplins = [
        {
            name: "Нейронные сети",
            img: "./../../../assets/TEMPLATE-discipline1.png"
        },
        {
            name: "Основы Права",
            img: "./../../../assets/TEMPLATE-discipline2.png"
        },
        {
            name: "Схемотехника",
            img: "./../../../assets/TEMPLATE-discipline3.png"
        },
        {
            name: "Нейронные сети",
            img: "./../../../assets/TEMPLATE-discipline1.png"
        },
        {
            name: "Основы Права",
            img: "./../../../assets/TEMPLATE-discipline2.png"
        },
        {
            name: "Схемотехника",
            img: "./../../../assets/TEMPLATE-discipline3.png"
        },
        {
            name: "Нейронные сети",
            img: "./../../../assets/TEMPLATE-discipline1.png"
        },
        {
            name: "Основы Права",
            img: "./../../../assets/TEMPLATE-discipline2.png"
        },
        {
            name: "Схемотехника",
            img: "./../../../assets/TEMPLATE-discipline3.png"
        },
    ]
    
    const menuitems = [
        {
            title: "Личный кабинет",
            img: "./../../../assets/app-home-to-home-button.svg",
            to: "/teacher/home"
        },
        {
            title: "Дисциплины",
            img: "./../../../assets/app-home-to-disciplines-button.svg",
            to: "/teacher/disciplins"
        },
        {
            title: "Журнал",
            img: "./../../../assets/app-home-to-marks-button.svg",
            to: "/"
        },
        {
            title: "Уведомления",
            img: "./../../../assets/app-home-to-notification-button.svg",
            to: "/"
        },
        {
            title: "Потоки",
            img: "./../../../assets/app-home-to-group-flows-button.svg",
            to: "/"
        },
        {
            title: "Группы",
            img: "./../../../assets/app-home-to-groups-button.svg",
            to: "/"
        },
        {
            title: "Файлы",
            img: "./../../../assets/app-home-to-files-button.svg",
            to: "/"
        },
    ]
    
    return ( 
        <div className='teacher-home' style={{height: "100%", width: "100%"}}>
            <TeacherHomeLayout>
                <TeacherDisciplineShowcase disciplins={disciplins}/>
                <AppHomeButtons menuitems={menuitems}/>
            </TeacherHomeLayout>
        </div>
    );
}

export default TeacherHome;