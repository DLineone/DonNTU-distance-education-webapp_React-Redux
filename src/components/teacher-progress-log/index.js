import React, { useEffect } from 'react';
import "./style.css";
import { IconSquarePlus, IconSquareMinus } from '@tabler/icons-react';

function TeacherProgressLog(props) {
    
    return (  
        <>{props?.log?.log && <div className='teacher-progress-log-table'>

            <div className='teacher-progress-log-column sticky'>
                <div className='teacher-progress-log-element title'>
                    Список группы {props.log.log.name_group}
                </div>
                {props.log.log.Control_educational_process.passes.array_students.map((elem, index) =>
                    <div className='teacher-progress-log-element name'>
                        {index+1}. {elem.surname} {elem.name} {elem.patronymic}
                    </div>
                )}
            </div>

            <div className='teacher-progress-log-column'>
                <div className='teacher-progress-log-element title-short'>
                    {props.log.log.header}
                </div>
                <div className='teacher-progress-log-element container'>
                    {props.log.log.tasks.map(task =>
                        <div className='teacher-progress-log-column'>
                            <div className='teacher-progress-log-element title-short'>
                                {task.topic_material}
                            </div>
                            <div className='teacher-progress-log-element container'>
                                <div className='teacher-progress-log-column'>
                                    <div className='teacher-progress-log-element title-short expanded'>
                                        дата
                                    </div>
                                    {task.array_students.map(student =>
                                        <div className='teacher-progress-log-element'>
                                            {student.date || ""}
                                        </div> 
                                    )} 
                                </div>
                                <div className='teacher-progress-log-column'>
                                    <div className='teacher-progress-log-element title-short expanded'>
                                        балл
                                    </div>
                                    {task.array_students.map(student =>
                                        <div className='teacher-progress-log-element'>
                                            {student.score || ""}
                                        </div> 
                                    )} 
                                </div>
                                <div className='teacher-progress-log-column'>
                                    <div className='teacher-progress-log-element title-short expanded'>
                                        тип сдачи
                                    </div>
                                    {task.array_students.map(student =>
                                        <div className='teacher-progress-log-element'>
                                            {props.executionTypes.find(type => type.id_type == student.id_type_execution).name_type || ""}
                                        </div> 
                                    )} 
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <div className='teacher-progress-log-column'>
                <div className='teacher-progress-log-element title-short'>
                    {props.log.log.other_types_control.header}
                </div>
                <div className='teacher-progress-log-element container'>
                    {props.log.log.other_types_control.other_tasks.map((control, index_task) =>
                        <div className='teacher-progress-log-column'>
                            <div className='teacher-progress-log-element title-short'>
                                {!props.isEditable ? control.name_control || "" :
                                    <>
                                        {/*backup color rgb(124, 124, 136) */}
                                        <div style={{display: "flex", alignItems: "center"}}>
                                            <div className='edit-button' onClick={() => props.setProgressOtherTaskEntry({index_task, index_displace: -1})}>
                                                <IconSquarePlus size={30} stroke={1.5} color='black'/>
                                            </div>
                                            <input
                                                style={{width: "300px"}}
                                                type="text"
                                                value={control.name_control  || ""}
                                                onChange={e => props.setProgressOtherTaskEntryName({name: e.target.value, index_task})}
                                            />
                                            <div className='edit-button' onClick={() => props.setProgressOtherTaskEntry({index_task, index_displace: 1})}>
                                                <IconSquarePlus size={30} stroke={1.5} color='black' />
                                            </div>
                                        </div>
                                        <div className='edit-button' onClick={() => props.deleteProgressOtherTaskEntry({index_task})}>
                                            <IconSquareMinus size={30} stroke={1.5} color='black'/>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className='teacher-progress-log-element container'>
                                <div className='teacher-progress-log-column'>
                                    <div className='teacher-progress-log-element title-short expanded'>
                                        дата
                                    </div>
                                    {control.array_students.map(student =>
                                        <div className='teacher-progress-log-element'>
                                            {!props.isEditable ? student.date || "" :
                                                <>
                                                    <input 
                                                        type="text" 
                                                        value={student.date || ""} 
                                                        onChange={e => props.setProgressOtherTask({date: e.target.value, index_task, id_student: student.id_student, score: student.score})}
                                                    />
                                                </>
                                            }
                                        </div> 
                                    )} 
                                </div>
                                <div className='teacher-progress-log-column'>
                                    <div className='teacher-progress-log-element title-short expanded'>
                                        балл
                                    </div>
                                    {control.array_students.map(student =>
                                        <div className='teacher-progress-log-element'>
                                            {!props.isEditable ? student.score || "" :
                                                <>
                                                    <input 
                                                        type="text" 
                                                        value={student.score || ""} 
                                                        onChange={e => props.setProgressOtherTask({score: e.target.value, index_task, id_student: student.id_student, date: student.date})}
                                                    />
                                                </>
                                            }
                                        </div> 
                                    )} 
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='teacher-progress-log-column'>
                <div className='teacher-progress-log-element title-short'>
                    {props.log.log.Control_educational_process.header}
                </div>
                <div className='teacher-progress-log-element container'>
                    <div className='teacher-progress-log-column'>
                        <div className='teacher-progress-log-element title-short'>
                            {props.log.log.Control_educational_process.intersessional_control.subhead}
                        </div>
                        <div className='teacher-progress-log-element container'>
                            <div className='teacher-progress-log-column'>
                                <div className='teacher-progress-log-element title-short expanded'>
                                    дата
                                </div>
                                {props.log.log.Control_educational_process.intersessional_control.array_students.map((student, id_student) =>
                                    <div className='teacher-progress-log-element'>
                                        {!props.isEditable ? student.date || "" :
                                            <>
                                                <input 
                                                    type="text" 
                                                    value={student.date || ""} 
                                                    onChange={e => props.setProgressIntersessional({date: e.target.value, id_student: student.id_student, passage: student.passage})}
                                                />
                                            </>
                                        }
                                    </div> 
                                )} 
                            </div>
                            <div className='teacher-progress-log-column'>
                                <div className='teacher-progress-log-element title-short expanded'>
                                    +/-
                                </div>
                                {props.log.log.Control_educational_process.intersessional_control.array_students.map(student =>
                                    <div className='teacher-progress-log-element'>
                                        {!props.isEditable ? student.passage || "" :
                                            <>
                                                <input 
                                                    type="text" 
                                                    value={student.passage || ""} 
                                                    onChange={e => props.setProgressIntersessional({passage: e.target.value, id_student: student.id_student, date: student.date})}
                                                />
                                            </>
                                        }
                                    </div> 
                                )} 
                            </div>
                        </div>
                    </div>
                    <div className='teacher-progress-log-element container'>
                        <div className='teacher-progress-log-column'>
                            <div className='teacher-progress-log-element title-short'>
                                {props.log.log.Control_educational_process.passes.subhead}
                            </div>
                            <div className='teacher-progress-log-element container'>
                                <div className='teacher-progress-log-column'>
                                    <div className='teacher-progress-log-element title-short expanded'>
                                        дата
                                    </div>
                                    {props.log.log.Control_educational_process.passes.array_students.map(student =>
                                        <div className='teacher-progress-log-element'>
                                            {!props.isEditable ? student.date || "" :
                                                <>
                                                    <input 
                                                        type="text" 
                                                        value={student.date || ""} 
                                                        onChange={e => props.setProgressPasses({date: e.target.value, id_student: student.id_student, count: student.count})}
                                                    />
                                                </>
                                            }
                                        </div> 
                                    )} 
                                </div>
                                <div className='teacher-progress-log-column'>
                                    <div className='teacher-progress-log-element title-short expanded'>
                                        Кол-во
                                    </div>
                                    {props.log.log.Control_educational_process.passes.array_students.map(student =>
                                        <div className='teacher-progress-log-element'>
                                            {!props.isEditable ? student.count || "" :
                                                <>
                                                    <input 
                                                        type="text" 
                                                        value={student.count || ""} 
                                                        onChange={e => props.setProgressPasses({count: e.target.value, id_student: student.id_student, date: student.date})}
                                                    />
                                                </>
                                            }
                                        </div> 
                                    )} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='teacher-progress-log-column'>
                <div className='teacher-progress-log-element title-short'>
                    {props.log.log.Results_control_educational_process.header}
                </div>
                <div className='teacher-progress-log-element container'>
                    <div className='teacher-progress-log-column'>
                        <div className='teacher-progress-log-element title-short'>
                            {props.log.log.Results_control_educational_process.exam.subhead}
                        </div>
                        <div className='teacher-progress-log-element container'>
                            <div className='teacher-progress-log-column'>
                                <div className='teacher-progress-log-element title-short expanded'>
                                    дата
                                </div>
                                {props.log.log.Results_control_educational_process.exam.array_students.map(student =>
                                    <div className='teacher-progress-log-element'>
                                        {!props.isEditable ? student.date || "" :
                                            <>
                                                <input 
                                                    type="text" 
                                                    value={student.date || ""} 
                                                    onChange={e => props.setProgressExam({date: e.target.value, id_student: student.id_student, score: student.score})}
                                                />
                                            </>
                                        }
                                    </div> 
                                )} 
                            </div>
                            <div className='teacher-progress-log-column'>
                                <div className='teacher-progress-log-element title-short expanded'>
                                    +/-
                                </div>
                                {props.log.log.Results_control_educational_process.exam.array_students.map(student =>
                                    <div className='teacher-progress-log-element'>
                                        {!props.isEditable ? student.score || "" :
                                            <>
                                                <input 
                                                    type="text" 
                                                    value={student.score || ""} 
                                                    onChange={e => props.setProgressExam({score: e.target.value, id_student: student.id_student, date: student.date})}
                                                />
                                            </>
                                        }
                                    </div> 
                                )} 
                            </div>
                        </div>
                    </div>
                    <div className='teacher-progress-log-element container'>
                        <div className='teacher-progress-log-column'>
                            <div className='teacher-progress-log-element title-short'>
                                {props.log.log.Results_control_educational_process.offset.subhead}
                            </div>
                            <div className='teacher-progress-log-element container'>
                                <div className='teacher-progress-log-column'>
                                    <div className='teacher-progress-log-element title-short expanded'>
                                        баллы
                                    </div>
                                    {props.log.log.Results_control_educational_process.offset.array_students.map(student =>
                                        <div className='teacher-progress-log-element'>
                                            {!props.isEditable ? student.date || "" :
                                                <>
                                                    <input 
                                                        type="text" 
                                                        value={student.date || ""} 
                                                        onChange={e => props.setProgressOffset({date: e.target.value, id_student: student.id_student, score: student.score})}
                                                    />
                                                </>
                                            }
                                        </div> 
                                    )} 
                                </div>
                                <div className='teacher-progress-log-column'>
                                    <div className='teacher-progress-log-element title-short expanded'>
                                        баллы
                                    </div>
                                    {props.log.log.Results_control_educational_process.offset.array_students.map(student =>
                                        <div className='teacher-progress-log-element'>
                                            {!props.isEditable ? student.score || "" :
                                                <>
                                                    <input 
                                                        type="text" 
                                                        value={student.score || ""} 
                                                        onChange={e => props.setProgressOffset({score: e.target.value, id_student: student.id_student, date: student.date})}
                                                    />
                                                </>
                                            }
                                        </div> 
                                    )} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>}</>
    );
}

export default TeacherProgressLog;