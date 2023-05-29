import React, { useEffect } from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { IconSearch } from '@tabler/icons-react';

function TeacherDisciplinsLayout(props) {
    return (  
        <div className='teacher-disciplins-layout'>
            <div className='teacher-disciplins-layout-menu'>
                <div className='create-discipline'>
                    <Link to="create">Создать дисциплину</Link>
                </div>
                <div className='sort-menu'>
                    <div className='search-discipline'>
                        <div className='search-input'>
                            <input type="text" placeholder='Поиск Дисциплины' value={props.query} onChange={(e)=>{props.setQuery(e.target.value)}}/>    
                        </div>
                        <div className='search-button'>
                            <IconSearch color='white' size={30} stroke={2.5}/>
                        </div>
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