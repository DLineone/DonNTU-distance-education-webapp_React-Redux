import React from 'react';
import "./style.css";

function TeacherLogsElement(props) {
    return (  
        <div className="teacher-logs-element" onClick={() => props?.navigateLog(props.discipline?.id_disc)}>
            <div className="img" style={{backgroundImage: `url(${props.discipline?.fon})`}}>

            </div>
            <div className='body'>
                <span>{props.discipline?.name_disc}</span>
            </div>
        </div>
    );
}

export default TeacherLogsElement;