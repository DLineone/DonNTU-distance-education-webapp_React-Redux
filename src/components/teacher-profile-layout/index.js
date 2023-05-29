import React from 'react';
import "./style.css";

function TeacherProfileLayout(props) {

    const {teacher} = props;

    return (  
        <div className='profile-layout'>
            <div className='profile-header'>
                <div className='profile-photo' style={{backgroundImage: `url(${teacher.photo})`}}>

                </div>
                <div className='header-content'>
                    <div className='header-content-title'>
                        <span>{`${teacher.surname} ${teacher.name} ${teacher.patronymic}`}</span>
                    </div>
                    <div className='header-content-body'>
                        <span>Статус: {teacher.array_data_workes[0].role}</span>
                        <span>Зарегистрирован(-а): {teacher.date_registration}</span>
                        <span>Последний раз на сайте: {teacher.date_last_visit || "-"}</span>
                    </div>
                </div>
            </div>
            <div className='profile-body'>
                <div className='body-title'>
                    <div className='body-title-inner'>
                    <span>Подробная информация о пользователе</span>
                    </div>
                </div>
                <div className='body-content'>
                    <div className='body-block'>
                        <div className="title">
                            Место проживания
                        </div>
                        <div className="body">
                            <div className='enter'>
                                <div className='name'>
                                    Страна
                                </div>
                                <div className='value'>
                                    {teacher.name_country}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    {teacher.type_regions}
                                </div>
                                <div className='value'>
                                    {teacher.name_regions || "-"}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    {teacher.type_settlements}
                                </div>
                                <div className='value'>
                                    {teacher.name_settlements}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='body-block'>
                        <div className="title">
                            Контактные данные
                        </div>
                        <div className="body">
                            <div className='enter'>
                                <div className='name'>
                                    Адрес электронной почты
                                </div>
                                <div className='value'>
                                    {teacher.email}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    Телефон Мобильный
                                </div>
                                <div className='value'>
                                    {teacher.phone}
                                </div>
                            </div>
                        </div>
                    </div>
                    {teacher.array_data_workes.map( elem => <div className='body-block'>
                        <div className="title">
                            Место работы
                        </div>
                        <div className="body">
                            <div className='enter'>
                                <div className='name'>
                                    Институт
                                </div>
                                <div className='value'>
                                    {elem.institute}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    Факультет
                                </div>
                                <div className='value'>
                                    {elem.faculty}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    Кафедра
                                </div>
                                <div className='value'>
                                    {elem.department}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    Должность
                                </div>
                                <div className='value'>
                                    {elem.position}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    Статус
                                </div>
                                <div className='value'>
                                    {elem.status}
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default TeacherProfileLayout;