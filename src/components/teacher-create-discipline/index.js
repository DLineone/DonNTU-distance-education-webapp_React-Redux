import React from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";

function TeacherCreateDiscipline(props) {
    const navigate = useNavigate();
    return (  
        <div className='teacher-create-discipline'>
            <div className='title'>
                <span>Создание дисциплины</span>
            </div>
            <div className='disclaimer'>
                <span>Введите название новой дисциплины и другую информацию о ней</span>
            </div>
            <div className='input-element'>
                <span className='name'>Название*</span>
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
                <button>Прикрепить фон</button>
                <span className='file-name'>файл не выбран</span>
            </div>
            <div className='owner'>
                <span>Владелец</span>
                <span>Фамилия Имя Отчество (вы)</span>
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

export default TeacherCreateDiscipline;