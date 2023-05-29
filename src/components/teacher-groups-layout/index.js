import React from 'react';
import Filter from '../filter/index';
import './style.css';

function TeacherGroupsLayout(props) {
    return ( 
        <div className='teacher-groups-layout'>
            <div className="teacher-groups-layout-menu">
                <div className='menu-filters'>
                    <Filter name="Институт" options={[
                        {label: 'фвыфвыв', value: 23},
                        {label: 'asdweww', value: 12, disabled: true},
                        {label: 'wwewwew', value: 22},
                        {label: 'sssdawe', value: 24},
                    ]}/>
                    <Filter name="Факультет" options={[
                        {label: 'asdfasd', value: 23},
                        {label: 'asdfasd', value: 12},
                        {label: 'asdfasd', value: 22},
                        {label: 'asdfasd', value: 24},
                    ]}/>
                    <Filter name="Кафедра" options={[
                        {label: 'asdfasd', value: 23},
                        {label: 'asdfasd', value: 12},
                        {label: 'asdfasd', value: 22},
                        {label: 'asdfasd', value: 24},
                    ]}/>
                </div>
                <div className='menu-query'>
                    <div className='search'>
                        <input type="text" placeholder='Поиск Группы' />
                        <object data="./../../assets/search-icon.svg" type=""></object>
                    </div>
                </div>
                <hr />
            </div>
            <div className='content'>
                {props.children}
            </div>
        </div>
    );
}

export default TeacherGroupsLayout;