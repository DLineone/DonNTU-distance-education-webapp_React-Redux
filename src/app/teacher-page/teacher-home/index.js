import React,{ useEffect, useState} from 'react';
import { useOutletContext } from "react-router-dom";
import TeacherHomeLayout from './../../../clusters/teacher-home-layout';
import TeacherDisciplineShowcase from './../../../components/teacher-discipline-showcase/index';
import AppHomeButtons from './../../../components/app-home-buttons-block';
import { useNavigate } from 'react-router-dom';

function TeacherHome() {
    // @ts-ignore
    const [setTitle] = useOutletContext();
    const [data, setData] = useState(undefined);
    const navigate = useNavigate();
    
    useEffect(()=>{
        (()=>{
            if(!sessionStorage.getItem("token"))
            {
                navigate("/");
                return;
            }

            setTitle('МОЙ КАБИНЕТ');
            let send = {
                "AllDisciplineTeacher":{
                    "token":sessionStorage.getItem("token"),
                    "id_user":sessionStorage.getItem("id_user"),
                    "id_teacher":sessionStorage.getItem("id_teacher")
                }
            }
            fetch('http://ServerWebsite:3030/view/',{
                method: "POST",
                body: JSON.stringify(send)
            })
                .then(response => response.json())
                .then(databack => {
                    if(databack?.error)
                    {
                        alert(databack.error);
                    }
                    else
                    {
                        setData(databack[0].arraydiscipline);
                    }
                });
        })()
    }, []);
    
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
            {data && 
            <TeacherHomeLayout>
                <TeacherDisciplineShowcase disciplins={data}/>
                <AppHomeButtons menuitems={menuitems}/>
            </TeacherHomeLayout>}
        </div>
    );
}

export default TeacherHome;