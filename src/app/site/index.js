import React, {useEffect} from 'react';
import SiteHeader from '../../clusters/site-header';
import SiteFooter from '../../clusters/site-footer';
import { Outlet, useNavigate } from 'react-router-dom';


function Site() {
    document.body.style.overflow = "auto";
    const navigate = useNavigate();

    useEffect(()=>{
        navigate("/welcome");
    },[]);

    return ( 
        <div className='site'>
            <SiteHeader/>
            <Outlet/>
            <SiteFooter/>
        </div>
    );
}

export default React.memo(Site);