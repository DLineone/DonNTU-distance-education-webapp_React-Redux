import React from 'react';
import SiteHeader from '../../clusters/site-header';
import SiteMotivation from './../../components/site-motivation';
import SiteBenefits from './../../components/site-benefits';
import SiteFooter from './../../clusters/site-footer';


function Welcome() {
    document.body.style.overflow = "auto";
    return ( 
        <div className='site-welcome'>
            <SiteHeader/>
            <SiteMotivation/>
            <SiteBenefits/>
            <SiteFooter/>
        </div>
    );
}

export default React.memo(Welcome);