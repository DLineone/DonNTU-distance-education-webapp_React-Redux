import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

function TeacherDisciplinsLayout(props) {
    return (  
        <div className='teacher-disciplins-layout'>
            <div className='teacher-disciplins-layout-menu'>
                <div className='create-discipline'>
                    <Link to="create">Создать дисциплину</Link>
                </div>
                <div className='sort-menu'>
                    <div className='sort-block'>
                        <select name="sort">
                            <option value="none">Без сортировки</option>
                            <option value="name">По названию</option>
                            <option value="group-flow">По потокам</option>
                        </select>
                    </div>
                    <div className='search-discipline'>
                        <input type="text" placeholder='Поиск Дисциплины' />
                        <object data="./../../assets/search-icon.svg" type=""></object>
                    </div>
                </div>
            </div>
            <div className='teacher-disciplins-layout-body'>
                {props.children}
            </div>
            {props.outlet}
        </div>
    );
}

export default TeacherDisciplinsLayout;