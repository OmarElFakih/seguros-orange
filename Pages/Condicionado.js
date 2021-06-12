import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import ServiceDetails from '../components/Service/ServiceDetails';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import ServicesImg from "../img/Condicionado.jpg";

const Faq = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Condicionado" Pdescription="" Image={ServicesImg} bPosition="30% 40%"/>
            <ServiceDetails/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Faq;