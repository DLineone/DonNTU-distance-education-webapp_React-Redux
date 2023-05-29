// @ts-nocheck
import React, { useCallback, useEffect, useState } from 'react';
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherFlows, teacherFlowsActions } from '../../store/teacher-flows-slice';
import { fetchTeacherTeachers, teacherTeachersActions } from '../../store/teacher-teachers-slice';
import Select from 'react-select';
import { fetchTeacherFlowDiscs } from './../../store/teacher-flow-disc-slice';
import { editFlowDisc } from './../../store/teacher-disciplines-slice';

function TeacherEditFlowDisc(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {distId, flowId} = useParams();
    const discipline = useSelector(state => state.tc_disciplines.disciplinesList?.find(elem => elem.id_disc == distId));
    const flowdisc = useSelector(state => state.tc_flowdiscs.flowdiscsList);
    const teacherTeachersList = useSelector(state => state.tc_teachers.teacherTeachersList);
    const [teacherTeachersListEdit, setEdit] = useState(null);
    const [teachersToDelete, setDelete] = useState(null);
    const [teachersToAdd, setAdd] = useState(null);
    const [selectedHours, setHours] = useState(null);

    useEffect(() => {
        dispatch(fetchTeacherFlowDiscs({id_disc: distId, id_flow: flowId}));
        dispatch(fetchTeacherTeachers());
    },[]);

    useEffect(() => {
        if(!flowdisc)
        {
            return;
        }
        setHours(flowdisc.number_hours_reading);
    }, [flowdisc]);

    useEffect(() => {
        if(!teacherTeachersList || !flowdisc)
        {
            return;
        }
        setEdit(teacherTeachersList.map(elem => flowdisc.arrayteacher.find(elem1 => elem1.id_teacher === elem.id_teacher) ? Object.assign({disabled: true}, elem) : Object.assign({disabled: false}, elem)));
    },[teacherTeachersList, flowdisc]);

    const onEdit = useCallback(()=>{
        dispatch(editFlowDisc({
            number_hours_reading: selectedHours, 
            id_disc_flow: flowdisc.id_disc_flow, 
            add_teachers: teachersToAdd.map(elem => elem.id_teacher), 
            delete_teachers: teachersToDelete.map(elem => elem.id_teacher)
        }, navigate("../")));
    },[selectedHours,flowdisc,teachersToAdd,teachersToDelete])

    return (  
        <div className='teacher-edit-flow-disc'>
            {flowdisc && discipline && <div className='title'>
                <span>Редактировать поток "{flowdisc.name_flow}" дисциплины "{discipline.name_disc}"</span>
            </div>}
            <div className='input-element'>
                <span className='name'>Количество часов</span>
                <input type="text" value={selectedHours || ""} onChange={e => setHours(Number.parseInt(e.target.value))} />
            </div>
            <div className='disclaimer'>
                <span>Удалите/выберите новых преподавателей, которые будут иметь доступ к потоку дисциплины</span>
            </div>
            <div className='input-element'>
                <span className='name'>Добавить преподавателей</span>
                <Select
                    isMulti
                    placeholder="Выберите преподавателей"   
                    styles={styles} 
                    value={teachersToAdd} 
                    options={teacherTeachersListEdit} 
                    getOptionValue={option => option.id_teacher}
                    getOptionLabel={option => `${option.surname} ${option.name} ${option.patronymic}`}
                    onChange={val => setAdd(val)}
                    isOptionDisabled={(option) => option.disabled}
                />
            </div>
            <div className='input-element'>
                <span className='name'>Удалить преподавателей</span>
                {flowdisc && <Select
                    isMulti
                    placeholder="Выберите преподавателей" 
                    styles={styles} 
                    value={teachersToDelete} 
                    options={flowdisc.arrayteacher} 
                    getOptionValue={option => option.id_teacher}
                    getOptionLabel={option => `${option.surname} ${option.name} ${option.patronymic}`}
                    onChange={val => setDelete(val)}
                />}
            </div>
            <div className='menu'>
                <button className='create' onClick={onEdit}>
                    Редактировать
                </button>
                <button onClick={()=>{navigate("../")}} className='exit'>
                    Отмена
                </button>
            </div>
        </div>  
    );
}

export default TeacherEditFlowDisc;

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