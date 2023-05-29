// @ts-nocheck
import React, { useCallback, useEffect, useState } from 'react';
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherFlows, teacherFlowsActions } from './../../store/teacher-flows-slice';
import { fetchTeacherTeachers, teacherTeachersActions } from './../../store/teacher-teachers-slice';
import { addFlow } from './../../store/teacher-disciplines-slice';
import Select from 'react-select';

function TeacherAddFlow(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {distId} = useParams();
    const discipline = useSelector(state => state.tc_disciplines.disciplinesList?.find(elem => elem.id_disc == distId));
    const flowsList = useSelector(state => state.tc_flows.flowsList);
    const teacherTeachersList = useSelector(state => state.tc_teachers.teacherTeachersList);
    const [selectedFlow, setFlow] = useState(null);
    const [selectedTeachers, setTeachers] = useState(null);
    const [selectedHours, setHours] = useState(null);

    useEffect(() => {
        dispatch(fetchTeacherFlows());
        dispatch(fetchTeacherTeachers());
    },[]);

    useEffect(() => {
        if(!flowsList)
        {
            return;
        }
        if(flowsList.length === 0)
        {
            dispatch(teacherFlowsActions.setTeacherFlows([{id_flow: null, name_flow: "не выбрано"}]))
        }
        setFlow(flowsList[0]);
    },[flowsList])

    const onAdd = useCallback(()=>{
        dispatch(addFlow({
            id_disc: distId, 
            id_flow: selectedFlow.id_flow, 
            name_flow: selectedFlow.name_flow, 
            number_hours_reading: selectedHours, 
            teachers: selectedTeachers.map(elem => elem.id_teacher)
        }, navigate("../")));
    },[distId, selectedFlow, selectedHours, selectedTeachers])

    return (  
        <div className='teacher-add-flow'>
            {discipline && <div className='title'>
                <span>Добавление потока к дисциплине "{discipline.name_disc}"</span>
            </div>}
            <div className='disclaimer'>
                <span>Выберите поток, который будет имет доступ к данной дисциплине</span>
            </div>
            <div className='input-element'>
                <span className='name'>Добавить поток*</span>
                <Select  
                    styles={styles} 
                    value={selectedFlow} 
                    options={flowsList} 
                    getOptionValue={option => option.id_flow}
                    getOptionLabel={option => option.name_flow}
                    onChange={val => setFlow(val)}
                />
            </div>
            <div className='input-element'>
                <span className='name'>Количество часов</span>
                <input type="text" onChange={e => setHours(Number.parseInt(e.target.value))} />
            </div>
            {discipline && <div className='disclaimer'>
                <span>Выберите преподавателей, которые будут имет доступ к данному потоку дисциплины "{discipline.name_disc}"</span>
            </div>}
            <div className='input-element'>
                <span className='name'>Добавить преподавателей</span>
                <Select
                    isMulti
                    placeholder="Выберите преподавателей" 
                    styles={styles} 
                    value={selectedTeachers} 
                    options={teacherTeachersList} 
                    getOptionValue={option => option.id_teacher}
                    getOptionLabel={option => `${option.surname} ${option.name} ${option.patronymic}`}
                    onChange={val => setTeachers(val)}
                />
            </div>
            <div className='menu'>
                <button className='create' onClick={onAdd}>
                    Добавить
                </button>
                <button onClick={()=>{navigate("../")}} className='exit'>
                    Отмена
                </button>
            </div>
        </div>  
    );
}

export default TeacherAddFlow;

const styles = {
    menu: ({ width, ...css }) => ({
        ...css,
        width: "max-content",
        minWidth: "100%",
        fontSize: '20px'
    }),
    control: css => ({
        ...css,
        width: '127.5%',
        fontSize: '20px'
    }),            
};