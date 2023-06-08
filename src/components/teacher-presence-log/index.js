import React, { useEffect } from 'react';
import "./style.css";
import Select from 'react-select';
import { IconSquareMinus, IconSquarePlus } from '@tabler/icons-react';

function TeacherPresenceLog(props) {

    return (  
        <>{props?.log?.log && <div className='teachaer-presence-log-table'>
                <div className='teachaer-presence-log-column'>
                    <div className='teachaer-presence-log-element title'>
                        Список группы {props.log.log.name_group}
                    </div>
                    {props.log.log.attendance_group[0].array_students.map((elem, index) =>
                        <div className='teachaer-presence-log-element name'>
                            {index+1}. {elem.surname} {elem.name} {elem.patronymic}
                        </div>
                    )}
                </div>
                {props.log.log.attendance_group.map((elem_attendance, index_attendance) =>
                    <div className='teachaer-presence-log-column'>
                        <div className="teachaer-presence-log-element title">
                            <div className="teachaer-presence-log-element top-half-element">
                                {!props.isEditable ? elem_attendance.type_class :
                                    <>
                                        {/*backup color rgb(124, 124, 136) */}
                                        <div className='edit-button' onClick={() => props.setEntry({index_attendance, index_displace: -1})}>
                                            <IconSquarePlus size={30} stroke={1.5} color='black'/>
                                        </div>
                                        <Select  
                                            styles={styles} 
                                            value={props.classTypes.find(elem => elem.name_type == elem_attendance.type_class)} 
                                            options={props.classTypes} 
                                            getOptionValue={option => option.id_type}
                                            getOptionLabel={option => option.name_type}
                                            onChange={val => {props.setType({type_class: val.name_type, index_attendance})}}
                                        />
                                        <div className='edit-button' onClick={() => props.setEntry({index_attendance, index_displace: 1})}>
                                            <IconSquarePlus size={30} stroke={1.5} color='black' />
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="teachaer-presence-log-element vertical">
                                {!props.isEditable ? elem_attendance.date : 
                                    <>
                                        <input 
                                            type="text" 
                                            value={elem_attendance.date} 
                                            onChange={e => props.setDate({date: e.target.value, index_attendance})}
                                        />
                                        <div className='edit-button' onClick={() => props.deleteEntry({index_attendance})}>
                                            <IconSquareMinus size={30} stroke={1.5} color='black'/>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        {elem_attendance.array_students.map((elem_student, index_student) =>
                            <div className='teachaer-presence-log-element mark'>
                                {!props.isEditable ? elem_student.presence_class : 
                                    <input 
                                        type="text" 
                                        value={elem_student.presence_class} 
                                        onChange={e => props.setMark({index_attendance, index_student, mark: e.target.value})}
                                    />
                                }
                            </div>
                        )}
                    </div>
                )}
        </div>}</>
    );
}

export default TeacherPresenceLog;

const styles = {
    menu: ({ width, ...css }) => ({
        ...css,
        width: "max-content",
        minWidth: "100%",
        fontSize: '20px'
    }),
    control: css => ({
        ...css,
        width: '100%',
        fontSize: '20px'
    }),            
};