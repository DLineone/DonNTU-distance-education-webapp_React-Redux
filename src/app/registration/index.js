import React,{ useEffect, useState, useCallback} from 'react';
import PreloginLayout from './../../clusters/prelogin-layout';
import PreloginInput from './../../components/prelogin-input';
import RoleButton from './../../components/registration-role-button/index';
import PreloginInputField from './../../components/prelogin-input-field';
import PreloginSubmit from './../../components/prelogin-submit';
import { useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    document.body.style.overflow = "hidden";
    const [roles, setRoles] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [response, setResponse] = useState(undefined);
    useEffect(()=>{
        (()=>{
            fetch('http://ServerWebsite:3030/view/',{
                method: "POST",
                body: JSON.stringify({"getRolebeforeAuthor":{"getRolebeforeAuthor":"true"}})
            })
                .then(response => response.json())
                .then(roles => {
                    if(roles?.error)
                    {
                        alert(roles.error)
                    }
                    else
                    {
                        setRoles(roles);
                        console.log(roles)
                    }
                });
        })()
    }, []);

    const onSubmit = useCallback(()=>{
        let send = {
            "RegistrationCkeck": {
            "id_role":JSON.parse(sessionStorage.getItem("registration-role")).id_role,
            "name_role":JSON.parse(sessionStorage.getItem("registration-role")).name_role, 
            "snils_inn":data.snils_inn, 
            "login":data.login, 
            "email":data.email,  
            "password":data.password, 
            "date_registration": `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-{(new Date()).getDate()}`}
        }
        fetch('http://ServerWebsite:3030/view/',{
            method: "POST",
            body: JSON.stringify(send)
        })
            .then(response => response.json())
            .then(isok => {
                if(isok.error)
                {
                    alert(isok.error)
                }
                else
                {
                    sessionStorage.removeItem("registration_role");
                    alert(isok.info)
                    navigate("/login")
                }
            });
    }
    ,[data])

    return ( 
        <div className='registration'>
            {roles &&
            <PreloginLayout>
                <PreloginInput text=
                    {[
                        '- Кто же ты, путник?', <br/>, 
                        '- Наверное, ...'
                    ]}>
                    <RoleButton role={roles.find((elem)=> elem.name_role == "студент")} text="Я - СТУДЕНТ"/>
                    <RoleButton role={roles.find((elem)=> elem.name_role == "преподаватель")} text="Я - ПРЕПОДАВАТЕЛЬ"/>
                    <RoleButton role={roles.find((elem)=> elem.name_role == "администратор")} text="Я - СОТРУДНИК"/>
                </PreloginInput>
                <PreloginInput text=
                    {`СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ`}>
                    <PreloginInputField data={data} setData={setData} value="snils_inn" placeholder="ИНН(СНИЛС)"/>
                    <PreloginInputField data={data} setData={setData} value="login" placeholder="Логин"/>
                    <PreloginInputField data={data} setData={setData} value="email" placeholder="E-mail"/>
                    <PreloginInputField data={data} setData={setData} value="password" placeholder="Пароль"/>
                    <PreloginSubmit callback={onSubmit} text="Зарегистрироваться"/>
                </PreloginInput>
            </PreloginLayout>}
        </div>
    );
}

export default Registration;