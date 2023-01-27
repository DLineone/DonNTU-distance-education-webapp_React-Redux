import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

function TeacherDiscipline(props) {

    const {discipline} = props;
    discipline.grop_flows.unshift({name:"отсутствует", id:undefined});
    console.log(discipline);
    
    return (  
        <div className='teacher-discipline'>
            <div className='title-photo'>
                <img src={discipline.photo} alt="" />
            </div>
            <div className='title-name'>
                <span>{discipline.name}</span>
            </div>
            <div className='group-flows'>
                <span>поток: </span> <select>
                    {discipline.grop_flows.map((group_flow) =>
                        <option value={group_flow.id}>{group_flow.name}</option>
                    )}
                </select>
            </div>
            <div className='sub-menu'>
                    <div className='sub-sub-menu'>
                        <object data="./../../assets/menu-triple-dot.svg" type=""></object>
                    </div>
                    <div className='sub-menu-button'>
                        <Link to="">Перейти</Link>
                    </div>
            </div>
        </div>
    );
}

export default TeacherDiscipline;