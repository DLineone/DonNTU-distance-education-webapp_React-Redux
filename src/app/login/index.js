import React from 'react';
import PreloginLayout from './../../clusters/prelogin-layout';
import PreloginInput from './../../components/prelogin-input';
import PreloginInputField from './../../components/prelogin-input-field';
import PreloginSubmit from './../../components/prelogin-submit/index';

function Login() {
    return ( 
        <div className='login'>
            <PreloginLayout>
                <PreloginInput text=
                    {[
                        '- Надеюсь, ты не забыл свой пароль'
                    ]}>
                    <PreloginInputField placeholder="E-mail"/>
                    <PreloginInputField placeholder="Пароль"/>
                    <PreloginSubmit text="Войти"/>
                </PreloginInput>
            </PreloginLayout>
        </div>
    );
}

export default Login;