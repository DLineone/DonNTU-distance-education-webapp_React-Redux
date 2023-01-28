import React, { useEffect } from 'react';
import TeacherDisciplinsLayout from './../../../components/teacher-discipline-layout';
import { useOutletContext } from "react-router-dom";
import TeacherDiscipline from './../../../components/teacher-discipline';
import { Outlet } from "react-router-dom";

function TeacherDisciplins() {
    // @ts-ignore
    const [setTitle] = useOutletContext();

    useEffect(() => {
        setTitle('МОИ ДИСЦИПЛИНЫ');
    }, []);

    const disciplins = [
        {
            photo: "./../../../assets/TEMPLATE-discipline-background.png",
            name: "Нейронные сети",
            group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
        },
        {
            photo: "./../../../assets/TEMPLATE-discipline-background.png",
            name: "Системный анализ",
            group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
        },
        {
            photo: "./../../../assets/TEMPLATE-discipline-background.png",
            name: "Схемотехника",
            group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
        },,
        {
            photo: "./../../../assets/TEMPLATE-discipline-background.png",
            name: "Схемотехника",
            group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
        },
        {
            photo: "./../../../assets/TEMPLATE-discipline-background.png",
            name: "Схемотехника",
            group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
        },
        {
            photo: "./../../../assets/TEMPLATE-discipline-background.png",
            name: "Схемотехника",
            group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
        },
        {
            photo: "./../../../assets/TEMPLATE-discipline-background.png",
            name: "Схемотехника",
            group_flows: [{name:"ИСТ-19а", id:12122},{name:"ИСТ-19б", id:3434334},{name:"АСУ-19", id:5656}]
        }
    ]

    return (  
        <div className='teacher-disciplins' style={{height: '100%', width: "100%"}}>
            <TeacherDisciplinsLayout outlet={<Outlet/>}>
                {disciplins.map((discipline)=>
                    <TeacherDiscipline discipline={discipline}/>
                )}
            </TeacherDisciplinsLayout>
        </div>
    );
}

export default TeacherDisciplins;