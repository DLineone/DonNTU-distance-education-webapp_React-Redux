import React from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";


function TeacherEditDiscipline(props) {
    const navigate = useNavigate();
    return (  
        <div className='teacher-edit-discipline'>
            <div className='title'>
                <span>Редактировать дисциплинe "Нименование"</span>
            </div>
            <div className='disclaimer'>
                <span>Введите новое название дисциплины и отредактируйте другую информацию о ней</span>
            </div>
            <div className='input-element'>
                <span className='name'>Новое название</span>
                <input type="text" />
            </div>
            <div className='input-element'>
                <span className='name'>Институт</span>
                <select>
                    <option value="">Название института</option>
                    <option value="">Название института</option>
                    <option value="">Название института</option>
                </select>
            </div>
            <div className='input-element'>
                <span className='name'>Факультет</span>
                <select>
                    <option value="">Название факультета</option>
                    <option value="">Название факультета</option>
                    <option value="">Название факультета</option>
                </select>
            </div>
            <div className='input-element'>
                <span className='name'>Кафедра</span>
                <select>
                    <option value="">Название кафедры</option>
                    <option value="">Название кафедры</option>
                    <option value="">Название кафедры</option>
                </select>
            </div>
            <div className='input-file'>
                <button>Прикрепить новый фон</button>
                <span className='file-name'>файл не выбран</span>
            </div>
            <div className='owner'>
                <span>Владелец</span>
                <span>Фамилия Имя Отчество (вы)</span>
            </div>
            <div className='input-element'>
                <span className='name'>Новый владелец</span>
                <select>
                    <option value="">Не выбрано</option>
                    <option value="">Человек</option>
                    <option value="">Человек</option>
                </select>
            </div>  
            <div className='menu'>
                <button className='create'>
                    Создать
                </button>
                <button onClick={()=>{navigate("../")}} className='exit'>
                    Отмена
                </button>
            </div>
        </div>
    );
}

export default TeacherEditDiscipline;