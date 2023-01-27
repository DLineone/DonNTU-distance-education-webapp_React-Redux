import React, { useEffect } from 'react';
import TeacherProfileLayout from './../../../components/teacher-profile-layout/index';
import { useOutletContext } from 'react-router-dom';

function TeacherProfile() {

    // @ts-ignore
    const [setTitle] = useOutletContext();

    useEffect(() => {
        setTitle('МОЙ ПРОФИЛЬ');
    }, []);

    const teacher = {
        photo: "./../../../assets/TEMPLATE-profile-photo.png",
        surname: "Фамилия",
        name: "Имя",
        patronimyc: "Отчество",
        date_registration: "2022.09.01",
        date_last_visit: "2022.09.15",
        rights_admin: true,
        status: true,
        country:"Донецкая народная республика",
        place_of_residence:"-",
        type_of_settlement:"Город",
        name_of_settlement:"Донецк",
        emale:"mail@yandex.com",
        phone:"+7(949)-457-65-91",
        institute:"Компьютерных наук и технологий",
        facility:"Информационных систем и технологий",
        department:"Автоматизиованных систем управления",
        positioin:"Доцент",
    };

    return (  
        <div className='teacher-profile' style={{height: "100%", width: "100%"}}>
            <TeacherProfileLayout teacher={teacher}/>
        </div>
    );
}

export default TeacherProfile;