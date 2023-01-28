import React from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";

function TeacherAddFlow(props) {

    const navigate = useNavigate();

    return (  
        <div className='teacher-add-flow'>
            <div className='title'>
                <span>Добавление потока к дисциплине "Название"</span>
            </div>
            <div className='disclaimer'>
                <span>Выберите поток, который будет имет доступ к данной дисциплине</span>
            </div>
            <div className='input-element'>
                <span className='name'>Добавить поток*</span>
                <select>
                    <option value="">Поток1</option>
                    <option value="">Поток2</option>
                    <option value="">Поток3</option>
                </select>
            </div>
            <div className='input-element'>
                <span className='name'>Количество часов</span>
                <input type="text" />
            </div>
            <div className='disclaimer'>
                <span>Выберите преподавателей, которые будут имет доступ к Дисциплине "Название" данного потока</span>
            </div>
            <div className='input-element'>
                <span className='name'>Добавить преподавателей</span>
                <select multiple>
                    <option value="">Преподаватель1</option>
                    <option value="">Преподаватель2</option>
                    <option value="">Преподаватель3</option>
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

export default TeacherAddFlow;