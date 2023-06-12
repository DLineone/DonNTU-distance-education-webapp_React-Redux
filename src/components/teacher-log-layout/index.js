import React, { useCallback, useEffect } from 'react';
import "./stle.css";
import Select from 'react-select';

function TeacherLogLayout(props) {
    
    const onEdit = useCallback(() => {
        fetch('http://dist.donntu.ru:3030/teacher/logs/permitedit',{
            method: "POST",
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"),
                id_log_group: props.log.id_log_group
            })
        })
        .then(response => response.json())
        .then(databack => {
            if(databack?.error)
            {
                alert(databack.error);
                return;
            }
            props.editable.setEditable(true);    
        });
    },[props.log]);

    const onSave = useCallback(() => {
        if(!props.log)
        {
            return;
        }
        fetch('http://dist.donntu.ru:3030/teacher/logs/updatelog',{
            method: "POST",
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                id_user_reg: localStorage.getItem("id_user_reg"),
                token: localStorage.getItem("token"),
                id_log_group: props.log.id_log_group,
                log: props.log.log
            })
        })
        .then(response => response.json())
        .then(databack => {
            if(databack?.error)
            {
                alert(databack.error);
                return;
            }
            props.editable.setEditable(false);    
        });
    },[props.log]);

    return (  
        <div className='teacher-log-layout'>
            <div className="title">
                {`"${props?.title || ""}"`}
            </div>

            <div className="menu">
                <div className="item">
                    <div className='title'>Журнал</div>
                    <div className='selector'>
                        <Select  
                            styles={styles} 
                            value={props.type.selectedType} 
                            options={props.type.logTypes} 
                            getOptionValue={option => option.id_type}
                            getOptionLabel={option => option.name_type}
                            onChange={val => props.type.setType(val)}
                        />
                    </div>
                </div>
                <div className="item">
                    <div className='title'>Поток</div>
                    <div className='selector'>
                        <Select  
                            styles={styles} 
                            value={props.flow.selectedFlow} 
                            options={props.flow.flowsList} 
                            getOptionValue={option => option.id_flow}
                            getOptionLabel={option => option.name_flow}
                            onChange={val => props.flow.setFlow(val)}
                        />
                    </div>
                </div>
                <div className="item">
                    <div className='title'>Группа</div>
                    <div className='selector'>
                        <Select  
                            styles={styles} 
                            value={props.group.selectedGroup} 
                            options={props.group.groupsList} 
                            getOptionValue={option => option.id_group}
                            getOptionLabel={option => option.name_group}
                            onChange={val => props.group.setGroup(val)}
                        />
                    </div>
                </div>
            </div>

            <div className='divider'>
                <hr />
            </div>

            <div className='body'>
                {props.children}
            </div>

            <div className="sub-menu">
                <button onClick={onEdit} className={props.editable?.isEditable ? 'sub-menu-button-disabled' : 'sub-menu-button'}>{props.editable?.isEditable ? "Редактируется" : "Редактировать"}</button>
                <button onClick={onSave} className={props.editable?.isEditable ? "sub-menu-button" : "sub-menu-button-disabled"}>{props.editable?.isEditable ? "сохранить" : "сохранено"}</button>
            </div>
        </div>
    );
}

export default TeacherLogLayout;

const styles = {
    menu: ({ width, ...css }) => ({
        ...css,
        width: "max-content",
        minWidth: "100%",
        fontSize: '20px',
        zIndex: 11,
    }),
    control: css => ({
        ...css,
        width: '100%',
        fontSize: '20px',
        zIndex: 11,
    }),            
};