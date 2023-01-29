import React,{ useEffect, useState, useCallback} from 'react';
import PreloginLayout from './../../clusters/prelogin-layout';
import PreloginInput from './../../components/prelogin-input';
import PreloginInputField from './../../components/prelogin-input-field';
import PreloginSubmit from './../../components/prelogin-submit/index';
import { useNavigate } from "react-router-dom";

function Login() {

    
    const navigate = useNavigate();
    const [data, setData] = useState(undefined);

    useEffect(()=>{
        if(sessionStorage.getItem("token"))
        {
            navigate("/teacher/home");
        }
    }, []);

    const onLogin = useCallback(()=>{
        let send = {
            "Input":{
                "email_login":data.email_login,
                "password":data.password
            }
        }
        fetch('http://ServerWebsite:3030/view/',{
            method: "POST",
            body: JSON.stringify(send)
        })
            .then(response => response.json())
            .then(databack => {
                if(databack.error)
                {
                    alert(databack.error)
                }
                else
                {
                    sessionStorage.setItem("id_user", databack.id_user);
                    sessionStorage.setItem("id_teacher", databack.id_teacher);
                    sessionStorage.setItem("token", databack.token);
                    sessionStorage.setItem("FIO", databack.FIO);
                    navigate("/teacher/home")
                }
            });
    },[data]);

    document.body.style.overflow = "hidden";
    return ( 
        <div className='login'>
            <PreloginLayout>
                <PreloginInput text=
                    {[
                        '- Надеюсь, ты не забыл свой пароль'
                    ]}>
                    <PreloginInputField callback={onLogin} data={data} setData={setData} value="email_login" placeholder="E-mail / login"/>
                    <PreloginInputField callback={onLogin} data={data} setData={setData} value="password" placeholder="Пароль"/>
                    <PreloginSubmit callback={onLogin} text="Войти"/>
                </PreloginInput>
            </PreloginLayout>
        </div>
    );
}

export default Login;