import React, { useEffect, useState } from 'react';
import TeacherProfileLayout from './../../../components/teacher-profile-layout/index';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TeacherProfile() {

    // @ts-ignore
    const [setTitle] = useOutletContext();
    const [data, setData] = useState(undefined);
    const navigate = useNavigate();

    useEffect(()=>{
        (()=>{
            if(!sessionStorage.getItem("token"))
            {
                navigate("/");
                return;
            }
              
            setTitle('МОЙ ПРОФИЛЬ');
            let send = {
                "ProfileTeacher":{
                    "token":sessionStorage.getItem("token"),
                    "id_user":sessionStorage.getItem("id_user"),
                    "id_teacher":sessionStorage.getItem("id_teacher")
                }
            }
            fetch('http://ServerWebsite:3030/view/',{
                method: "POST",
                body: JSON.stringify(send)
            })
                .then(response => response.json())
                .then(databack => {
                    if(databack?.error)
                    {
                        alert(databack.error);
                    }
                    else
                    {
                        setData(databack);
                        console.log(databack[0].arraydiscipline);
                        console.log(databack);
                    }
                });
        })()
    }, []);

    return (  
        <div className='teacher-profile' style={{height: "100%", width: "100%"}}>
            {data && 
            <TeacherProfileLayout teacher={data}/>}
        </div>
    );
}

export default TeacherProfile;