import React from 'react';
import "./style.css";
import TeacherGroupTableItem from '../teacher-group-table-item';

function TeacherGroupsTable(props) {
    return (  
        <div className='teacher-groups-table'>
            <div className="table-body">
                <div className="table-header">
                    <div className="group-name">Наименование группы</div>
                    <div className="institute">Институт</div>
                    <div className="faculty">Факультет</div>
                    <div className="department">Кафедра</div>
                </div>
                <div className="table-content">{props.groups.map(item =>
                    <TeacherGroupTableItem item={item}/>
                )}</div>
            </div>            
        </div>
    );
}

export default TeacherGroupsTable;