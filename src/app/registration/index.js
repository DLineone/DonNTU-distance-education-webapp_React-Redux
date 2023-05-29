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
    const [animationBlock1, setAnimation1] = useState('');
    const [animationBlock2, setAnimation2] = useState('start-registration-animation');
    useEffect(()=>{
        (()=>{
            fetch('http://dist.donntu.ru:3030/registration')
            .then(response => response.json())
            .then(databack => {
                if(databack?.error)
                {
                    alert(databack.error);
                    return;
                }
                setRoles(databack);    
            });
        })()
    }, []);

    const onSubmit = useCallback(()=>{

        fetch('http://dist.donntu.ru:3030/registration',{
            method: "POST",
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                id_role_user: JSON.parse(localStorage.getItem("registration-role")).id_role_user, 
                id_role_db_univ: JSON.parse(localStorage.getItem("registration-role")).id_role_db_univ, 
                inn_snils: data.inn_snils, 
                login: data.login, 
                email: data.email,  
                password: data.password, 
                date_registration: `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}`
            })
        })
        .then(response => response.json())
        .then(isok => {
            if(isok.error)
            {
                alert(isok.error)
            }
            else
            {
                localStorage.removeItem("registration-role");
                alert(isok.info)
                navigate("/login")
            }
        });
    }
    ,[data])

    const animationCalback = ()=>{
        setAnimation1("end-registration-animation1");
        setAnimation2("end-registration-animation2");
    }

    return ( 
        <div className='registration'>
            {roles &&
            <PreloginLayout>
                <PreloginInput animation={animationBlock1} text=
                    {[
                        '- Кто же ты, путник?', <br/>, 
                        '- Наверное, ...'
                    ]}>
                    <RoleButton callback={animationCalback} role={roles.find((elem)=> elem.name == "студент")} text="Я - СТУДЕНТ"/>
                    <RoleButton callback={animationCalback} role={roles.find((elem)=> elem.name == "преподаватель")} text="Я - ПРЕПОДАВАТЕЛЬ"/>
                    <RoleButton callback={animationCalback} role={roles.find((elem)=> elem.name == "сотрудник")} text="Я - СОТРУДНИК"/>
                </PreloginInput>
                <PreloginInput animation={animationBlock2} text=
                    {`СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ`}>
                    <PreloginInputField data={data} setData={setData} value="inn_snils" placeholder="ИНН(СНИЛС)" callback={onSubmit}/>
                    <PreloginInputField data={data} setData={setData} value="login" placeholder="Логин" callback={onSubmit}/>
                    <PreloginInputField data={data} setData={setData} value="email" placeholder="E-mail" callback={onSubmit}/>
                    <PreloginInputField type="password" data={data} setData={setData} value="password" placeholder="Пароль" callback={onSubmit}/>
                    <PreloginSubmit callback={onSubmit} text="Зарегистрироваться"/>
                </PreloginInput>
            </PreloginLayout>}
        </div>
    );
}

export default Registration;