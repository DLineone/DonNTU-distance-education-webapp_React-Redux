import React from 'react';
import PreloginLayout from './../../clusters/prelogin-layout';
import PreloginInput from './../../components/prelogin-input';
import RoleButton from './../../components/registration-role-button/index';
import PreloginInputField from './../../components/prelogin-input-field';
import PreloginSubmit from './../../components/prelogin-submit';

function Registration() {
    document.body.style.overflow = "hidden";
    return ( 
        <div className='registration'>
            <PreloginLayout>
                <PreloginInput text=
                    {[
                        '- Кто же ты, путник?', <br/>, 
                        '- Наверное, ...'
                    ]}>
                    <RoleButton text="Я - СТУДЕНТ"/>
                    <RoleButton text="Я - ПРЕПОДАВАТЕЛЬ"/>
                    <RoleButton text="Я - СОТРУДНИК"/>
                </PreloginInput>
                <PreloginInput text=
                    {`СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ`}>
                    <PreloginInputField placeholder="Фамилия"/>
                    <PreloginInputField placeholder="Имя"/>
                    <PreloginInputField placeholder="Отчество"/>
                    <PreloginInputField placeholder="ИНН(СНИЛС)"/>
                    <PreloginInputField placeholder="Логин"/>
                    <PreloginInputField placeholder="E-mail"/>
                    <PreloginInputField placeholder="Пароль"/>
                    <PreloginSubmit text="Зерегистрироваться"/>
                </PreloginInput>
            </PreloginLayout>
        </div>
    );
}

export default Registration;