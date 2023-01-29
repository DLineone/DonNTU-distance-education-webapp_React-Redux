import React,{ useEffect, useState} from 'react';
import TeacherDisciplinsLayout from './../../../components/teacher-discipline-layout';
import { useOutletContext } from "react-router-dom";
import TeacherDiscipline from './../../../components/teacher-discipline';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function TeacherDisciplins() {
    // @ts-ignore
    const [setTitle] = useOutletContext();
    const [data, setData] = useState(undefined);
    const navigate = useNavigate();
    
    useEffect(() => {
        (()=>{
            if(!sessionStorage.getItem("token"))
            {
                navigate("/");
                return;
            }

            setTitle('МОИ ДИСЦИПЛИНЫ');
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

    

    return (  
        <div className='teacher-disciplins' style={{height: '100%', width: "100%"}}>
            {data &&
            <TeacherDisciplinsLayout outlet={<Outlet/>}>
                {data.map((discipline)=>
                    <TeacherDiscipline discipline={discipline}/>
                )}
            </TeacherDisciplinsLayout>}
        </div>
    );
}

export default TeacherDisciplins;

// const disciplins = [
//     {
//         photo: "./../../../assets/TEMPLATE-discipline-background.png",
//         name: "Нейронные сети",
//         group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
//     },
//     {
//         photo: "./../../../assets/TEMPLATE-discipline-background.png",
//         name: "Системный анализ",
//         group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
//     },
//     {
//         photo: "./../../../assets/TEMPLATE-discipline-background.png",
//         name: "Схемотехника",
//         group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
//     },,
//     {
//         photo: "./../../../assets/TEMPLATE-discipline-background.png",
//         name: "Схемотехника",
//         group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
//     },
//     {
//         photo: "./../../../assets/TEMPLATE-discipline-background.png",
//         name: "Схемотехника",
//         group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
//     },
//     {
//         photo: "./../../../assets/TEMPLATE-discipline-background.png",
//         name: "Схемотехника",
//         group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
//     },
//     {
//         photo: "./../../../assets/TEMPLATE-discipline-background.png",
//         name: "Схемотехника",
//         group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
//     }
// ]