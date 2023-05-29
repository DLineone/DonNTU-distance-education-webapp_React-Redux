// @ts-nocheck
import React,{ useEffect, useState, useCallback} from 'react';
import PreloginLayout from './../../clusters/prelogin-layout';
import PreloginInput from './../../components/prelogin-input';
import PreloginInputField from './../../components/prelogin-input-field';
import PreloginSubmit from './../../components/prelogin-submit/index';
import { json, useNavigate } from "react-router-dom";

function Login() {

    
    const navigate = useNavigate();
    const [data, setData] = useState(undefined);

    useEffect(()=>{
        if(localStorage.getItem("token"))
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
        
        fetch('http://dist.donntu.ru:3030/authorization',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email_login: data.email_login,
                password: data.password, 
                platform: navigator.userAgentData.platform, 
                mobile: navigator.userAgentData.mobile,
                brand: navigator.userAgentData.brands[0].brand, 
                version_brand: navigator.userAgentData.brands[0].version
            })
        })
            .then(response => response.json())
            .then(databack => {
                if(databack.error)
                {
                    alert(databack.error)
                }
                else
                {
                    localStorage.setItem("token", databack.token);
                    localStorage.setItem("id_user_reg", databack.id_user_reg);
                    if(databack.id_role_user === 5) //teacher
                    {
                        navigate("/teacher/home")
                    }
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
                    <PreloginInputField type="password" callback={onLogin} data={data} setData={setData} value="password" placeholder="Пароль"/>
                    <PreloginSubmit callback={onLogin} text="Войти"/>
                </PreloginInput>
            </PreloginLayout>
        </div>
    );
}

export default Login;