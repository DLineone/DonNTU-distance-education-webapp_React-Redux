// @ts-nocheck
import React, { useEffect, useState, useCallback, useRef} from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createDiscipline, fetchTeacherDisciplines } from './../../store/teacher-disciplines-slice';
import { fetchTeacherInstitutions } from './../../store/teacher-institutes-slice';
import { fetchTeacherDepartments, teacherDepartmentsActions } from './../../store/teacher-departments-slice';
import { fetchTeacherFaculties, teacherFacultiesActions } from './../../store/teacher-faculties-slice';
import Select from 'react-select';
import { teacherInstitutionsActions } from './../../store/teacher-institutes-slice';

function TeacherCreateDiscipline(props) {
    const isInitialMount = useRef(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const teacherInstitutionsList = useSelector(state => state.tc_institutions.teacherInstitutionsList);
    const teacherFacultiesList = useSelector(state => state.tc_faculties.teacherFacultiesList);
    const teacherDepartmentsList = useSelector(state => state.tc_departments.teacherDepartmentsList);
    const [selectedInstitution, setInstitution] = useState(null);
    const [selectedFaculty, setFaculty] = useState(null);
    const [selectedDepartment, setDepartment] = useState(null);
    const [selectedName, setName] = useState(null);
    const profile = useSelector(state => state.tc_profile.profile);
    
    //hell
    {useEffect(() =>{
        dispatch(fetchTeacherInstitutions());
    },[]);
    
    useEffect(() => {
        if(!teacherInstitutionsList)
        {   
            return;
        }
        if(teacherInstitutionsList.length === 0)
        {
            dispatch(teacherInstitutionsActions.setTeacherInstitutions([{id_institute: null, name_institute: "не выбрано"}]));
            return;
        }
        setInstitution(teacherInstitutionsList[1]);
    },[teacherInstitutionsList]);
    
    useEffect(() => {
        if(!selectedInstitution)
        {
            return;
        }
        dispatch(fetchTeacherFaculties({id_institute: selectedInstitution.id_institute}));
    },[selectedInstitution]);

    useEffect(() => {
        if(!teacherFacultiesList)
        {
            return;
        }
        if(teacherFacultiesList.length === 0)
        {
            dispatch(teacherFacultiesActions.setTeacherFaculties([{id_faculty: null, name_faculty: "не выбрано"}]));
            return;
        }
        setFaculty(teacherFacultiesList[0]);
    }, [teacherFacultiesList]);

    useEffect(() => {
        if(!selectedFaculty)
        {
            return;
        }
        dispatch(fetchTeacherDepartments({id_institute: selectedInstitution.id_institute, id_faculty: selectedFaculty.id_faculty}));
    },[selectedFaculty]);

    useEffect(() => {
        if(!teacherDepartmentsList)
        {
            return;
        }
        if(teacherDepartmentsList.length === 0)
        {
            dispatch(teacherDepartmentsActions.setTeacherDepartments([{id_department: null, name_department: "не выбрано"}]));
            return;
        }
        setDepartment(teacherDepartmentsList[0]);
    },[teacherDepartmentsList]);}

    function onSubmit()
    {
        let res = dispatch(createDiscipline({
            id_institute: selectedInstitution.id_institute,
            id_faculty: selectedFaculty.id_faculty,
            id_department: selectedDepartment.id_department,
            name_disc: selectedName
        }, navigate("../")));
    }

    return (  
        <div className='teacher-create-discipline'>
            {selectedDepartment && <>
            <div className='title'>
                <span>Создание дисциплины</span>
            </div>
            <div className='disclaimer'>
                <span>Введите название новой дисциплины и другую информацию о ней</span>
            </div>
            <div className='input-element'>
                <span className='name'>Название*</span>
                <input onChange={e => setName(e.target.value)} type="text" />
            </div>
            <div className='input-element'>
                <span className='name'>Институт</span>
                <Select 
                    styles={styles} 
                    value={selectedInstitution} 
                    options={teacherInstitutionsList} 
                    getOptionValue={(option) => option.id_institute}
                    getOptionLabel={option => option.name_institute}
                    onChange={(val) => setInstitution(val)}
                />
            </div>
            <div className='input-element'>
                <span className='name'>Факультет</span>
                <Select 
                    styles={styles} 
                    value={selectedFaculty} 
                    options={teacherFacultiesList} 
                    getOptionValue={(option) => option.id_faculty}
                    getOptionLabel={option => option.name_faculty}
                    onChange={(val) => setFaculty(val)}
                />
            </div>
            <div className='input-element'>
                <span className='name'>Кафедра</span>
                <Select 
                    styles={styles} 
                    value={selectedDepartment} 
                    options={teacherDepartmentsList} 
                    getOptionValue={option => option.id_department}
                    getOptionLabel={option => option.name_department}
                    onChange={val => setDepartment(val)}
                />
            </div>
            <div className='owner'>
                <span>Владелец</span>
                <span>{profile.surname} {profile.name} {profile.patronymic} (вы)</span>
            </div>  
            <div className='menu'>
                <button onClick={onSubmit} className='create'>
                    Создать
                </button>
                <button onClick={()=>{navigate("../")}} className='exit'>
                    Отмена
                </button>
            </div></>}
        </div>
    );
}

export default React.memo(TeacherCreateDiscipline);

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