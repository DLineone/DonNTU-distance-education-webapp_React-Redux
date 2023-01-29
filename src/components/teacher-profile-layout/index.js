import React from 'react';
import "./style.css";

function TeacherProfileLayout(props) {

    const {teacher} = props;

    return (  
        <div className='profile-layout'>
            <div className='profile-header'>
                <div className='profile-photo'>
                    <img src="./../../../assets/TEMPLATE-profile-photo.png" alt="" />
                </div>
                <div className='header-content'>
                    <div className='header-content-title'>
                        <span>{`${teacher.FIO}`}</span>
                    </div>
                    <div className='header-content-body'>
                        <span>Статус: {teacher.status ? "Преподаватель" : "Уволен"}</span>
                        <span>Зарегистрирован(-а): {teacher.date_registration}</span>
                        <span>Права админа: {teacher.rights_admin ? "Присутствуют" : "Отсутствуют"}</span>
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
                                    {teacher.country}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    Область
                                </div>
                                <div className='value'>
                                    {teacher.place_of_residence || "-"}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    {teacher.name_type}
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
                    <div className='body-block'>
                        <div className="title">
                            Место работы
                        </div>
                        <div className="body">
                            <div className='enter'>
                                <div className='name'>
                                    Институт
                                </div>
                                <div className='value'>
                                    {teacher.institute}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    Факультет
                                </div>
                                <div className='value'>
                                    {teacher.faculty}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    Кафедра
                                </div>
                                <div className='value'>
                                    {teacher.department}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    Должность
                                </div>
                                <div className='value'>
                                    {teacher.position}
                                </div>
                            </div>
                            <div className='enter'>
                                <div className='name'>
                                    Статус
                                </div>
                                <div className='value'>
                                    {teacher.status ? "Работает" : "Не работает"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherProfileLayout;