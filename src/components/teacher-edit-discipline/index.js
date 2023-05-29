// @ts-nocheck
import React, { useEffect, useState, useCallback} from 'react';
import './style.css';
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { editDiscipline, fetchTeacherDisciplines } from './../../store/teacher-disciplines-slice';
import { fetchTeacherInstitutions, teacherInstitutionsActions } from './../../store/teacher-institutes-slice';
import { fetchTeacherFaculties, teacherFacultiesActions } from './../../store/teacher-faculties-slice';
import { fetchTeacherDepartments, teacherDepartmentsActions } from './../../store/teacher-departments-slice';
import { fetchTeacherTeachers, teacherTeachersActions } from './../../store/teacher-teachers-slice';
import Select from 'react-select';


function TeacherEditDiscipline(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {distId} = useParams();
    const [phase, setPhase] = useState(1);
    const [selectedInstitution, setInstitution] = useState(null);
    const [selectedFaculty, setFaculty] = useState(null);
    const [selectedDepartment, setDepartment] = useState(null);
    const [selectedName, setName] = useState(null);
    const [selectedTeacher, setTeacher] = useState(null);
    const teacherInstitutionsList = useSelector(state => state.tc_institutions.teacherInstitutionsList);
    const teacherFacultiesList = useSelector(state => state.tc_faculties.teacherFacultiesList);
    const teacherDepartmentsList = useSelector(state => state.tc_departments.teacherDepartmentsList);
    const teacherTeachersList = useSelector(state => state.tc_teachers.teacherTeachersList);
    const profile = useSelector(state => state.tc_profile.profile);
    const discipline = useSelector(state => state.tc_disciplines.disciplinesList?.find(elem => elem.id_disc == distId));

    //hell
    {

    useEffect(() =>{
        dispatch(fetchTeacherTeachers());
        dispatch(fetchTeacherInstitutions());
        setPhase(2);
        return(() =>{
            dispatch(teacherTeachersActions.setTeacherTeachers(null));
            dispatch(teacherInstitutionsActions.setTeacherInstitutions(null));
            dispatch(teacherFacultiesActions.setTeacherFaculties(null));
            dispatch(teacherDepartmentsActions.setTeacherDepartments(null));
        });
    },[]);

    useEffect(() =>{
        if((!teacherTeachersList) || (!discipline) || (phase !== 2))
        {
            return;
        }
        setTeacher(teacherTeachersList.find(elem => elem.id_teacher === discipline.id_teacher_creator));
        setName(discipline.name_disc);
        setPhase(3);
    },[teacherTeachersList, discipline, phase]);
    
    useEffect(() =>{
        if(phase !== 3)
        {
            return;
        }
        dispatch(fetchTeacherInstitutions());
        setPhase(4)
    },[phase]);

    useEffect(() => {
        if(!teacherInstitutionsList || phase !== 4)
        {   
            return;
        }
        setInstitution(teacherInstitutionsList.find(elem => elem.id_institute === discipline.id_institute));
        setPhase(5);
    },[teacherInstitutionsList, phase]);
    
    useEffect(() => {
        if(!selectedInstitution || phase !== 5)
        {
            return;
        }
        dispatch(fetchTeacherFaculties({id_institute: selectedInstitution.id_institute}));
        setPhase(6);
    },[selectedInstitution, phase]);

    useEffect(() => {
        if(!teacherFacultiesList || phase !== 6)
        {
            return;
        }
        setFaculty(teacherFacultiesList.find(elem => elem.id_faculty === discipline.id_faculty));
        setPhase(7);
    }, [teacherFacultiesList, phase]);

    useEffect(() => {
        if(!selectedFaculty || phase !== 7)
        {
            return;
        }
        dispatch(fetchTeacherDepartments({id_institute: selectedInstitution.id_institute, id_faculty: selectedFaculty.id_faculty}));
        setPhase(8);
    },[selectedFaculty, phase]);

    useEffect(() => {
        if(!teacherDepartmentsList || phase !== 8)
        {
            return;
        }
        setDepartment(teacherDepartmentsList.find(elem => elem.id_department === discipline.id_department));
        setPhase(9);
    },[teacherDepartmentsList, phase]);

///////////////

    useEffect(() => {
        if(!selectedInstitution || (phase < 9))
        {
            return;
        }
        dispatch(fetchTeacherFaculties({id_institute: selectedInstitution.id_institute}));
    },[selectedInstitution]);

    useEffect(() => {
        if(!teacherFacultiesList || (phase < 9))
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
        if(!selectedFaculty || (phase < 9))
        {
            return;
        }
        dispatch(fetchTeacherDepartments({id_institute: selectedInstitution.id_institute, id_faculty: selectedFaculty.id_faculty}));
    },[selectedFaculty]);

    useEffect(() => {
        if(!teacherDepartmentsList || (phase < 9))
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

    const onEdit = useCallback(()=>{
        dispatch(editDiscipline({
            id_disc: discipline.id_disc, 
            id_institute: selectedInstitution.id_institute, 
            id_faculty: selectedFaculty.id_faculty, 
            id_department: selectedDepartment.id_department, 
            new_name: selectedName.trim() === "" ? discipline.name_disc : selectedName.trim(), 
            id_new_creator: selectedTeacher.id_teacher
        }, navigate("../")));
    },[selectedName, selectedFaculty, selectedInstitution, selectedDepartment, selectedTeacher])


    return ( 
        
        <div className='teacher-edit-discipline'>
        {discipline && selectedDepartment && <>
            <div className='title'>
                <span>Редактировать дисциплинe "{discipline.name_disc}"</span>
            </div>
            <div className='disclaimer'>
                <span>Введите новое название дисциплины и отредактируйте другую информацию о ней</span>
            </div>
            <div className='input-element'>
                <span className='name'>Новое название</span>
                <input type="text" onChange={(e)=> setName(e.target.value)} value={selectedName}/>
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

            <div className='input-element'>
                <span>Владелец</span>
                <span>{profile.surname} {profile.name} {profile.patronymic} (вы)</span>
            </div>
            <div className='input-element'>
                <span className='name'>Новый владелец</span>
                <Select 
                    styles={styles} 
                    value={selectedTeacher} 
                    options={teacherTeachersList} 
                    getOptionValue={option => option.id_teacher}
                    getOptionLabel={option => `${option.surname} ${option.name} ${option.patronymic}`}
                    onChange={val => setTeacher(val)}
                />
            </div>  
            <div className='menu'>
                <button onClick={onEdit} className='create'>
                    Сохранить
                </button>
                <button onClick={()=>{navigate("../");}} className='exit'>
                    Отмена
                </button>
            </div></>}
        </div>
    );
}

export default TeacherEditDiscipline;

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