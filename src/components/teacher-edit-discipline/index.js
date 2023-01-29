import React, { useEffect, useState, useCallback} from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";


function TeacherEditDiscipline(props) {

    const navigate = useNavigate();
    const [data, setData] = useState(undefined);
    const [senddata, setSend] = useState({fon: null});

    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("resavedata")));
    }, []);

    const onChange = useCallback((e, nameval)=>{
        setSend({...senddata, [nameval]: e.target.value});
    },[senddata]);

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
                <input type="text" onChange={(e)=>onChange(e, "name")}/>
            </div>
            <div className='input-element'>
                <span className='name'>Институт</span>
                <select onChange={(e)=>onChange(e, "id_institute")}>
                    {data.listinstitute.map((institute)=>
                        <option value={institute.id_unstitute}>{institute.name}</option>
                    )}
                </select>
            </div>
            <div className='input-element'>
                <span className='name'>Факультет</span>
                <select onChange={(e)=>onChange(e, "id_faculty")}>
                    {data.listfaculty.map((faculty)=>
                        <option value={faculty.id_faculty}>{faculty.name}</option>
                    )}
                </select>
            </div>
            <div className='input-element'>
                <span className='name'>Кафедра</span>
                <select onChange={(e)=>onChange(e, "id_department")}>
                    {data.listdepartment.map((department)=>
                        <option value={department.id_department}>{department.name}</option>
                    )}
                </select>
            </div>
            <div className='input-file'>
                <button>Прикрепить новый фон</button>
                <span className='file-name'>файл не выбран</span>
            </div>
            <div className='owner'>
                <span>Владелец</span>
                <span>{sessionStorage.getItem("FIO")} (вы)</span>
            </div>
            <div className='input-element'>
                <span className='name'>Новый владелец</span>
                <select>
                </select>
            </div>  
            <div className='menu'>
                <button className='create'>
                    Сохранить
                </button>
                <button onClick={()=>{navigate("../"); localStorage.removeItem("resavedata");}} className='exit'>
                    Отмена
                </button>
            </div>
        </div>
    );
}

export default TeacherEditDiscipline;