import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import EnmergencyTable from '../components/EnmergencyTable'

import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';


const Enmergencias = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
            <EnmergencyTable />
            
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Enmergencias;