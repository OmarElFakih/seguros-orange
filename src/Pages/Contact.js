import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Contacts from '../components/Contacts';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import contactImage from "../img/call-center.jpg";

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Contactenos" Pdescription="" Image={contactImage} bPosition="30% 40%"/>
            <Contacts/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default About;