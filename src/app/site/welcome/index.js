import React from 'react';
import SiteMotivation from '../../../components/site-motivation';
import SiteBenefits from '../../../components/site-benefits';


function Welcome() {
    document.body.style.overflow = "auto";
    return ( 
        <div className='site-welcome'>
            <SiteMotivation/>
            <SiteBenefits/>
        </div>
    );
}

export default React.memo(Welcome);