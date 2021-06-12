import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import WebServiceDetails from '../components/Service/WebServiceDetails';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import ServicesImg from "../img/Laptop.jpg";

const CondicionesWeb = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Condiciones de uso web" Pdescription="" Image={ServicesImg} bPosition="0% 40%"/>
            <WebServiceDetails/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default CondicionesWeb;