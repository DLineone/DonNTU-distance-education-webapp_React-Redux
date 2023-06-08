import React from 'react';
import { IconArrowBadgeDown } from '@tabler/icons-react';
import "./style.css";

function TeacherGroupTableItem(props) {
    return (  
        <div className='teacher-group-table-item'>
            <div className="content">
                <div className="unfold-button">
                    <IconArrowBadgeDown size={50} stroke={1}/>
                </div>
                <div className="group-name">
                    {props.item.name}
                </div>
                <div className="institute">     
                    {props.item.institute}
                </div>
                <div className="faculty">       
                    {props.item.faculty}
                </div>
                <div className="department">    
                    {props.item.department}
                </div>
            </div>
            <hr className="devider" />
            <div className='sub-content'>
                <div className="subelem">
                    1. Фамилия Имя Отчество
                </div>
                <div className="subelem">
                    1. Фамилия Имя Отчество
                </div>
                <div className="subelem">
                    1. Фамилия Имя Отчество
                </div>
            </div>
            <hr className="devider" />
        </div>
    );
}

export default TeacherGroupTableItem;