import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import PrivacidadDetails from '../components/Service/PrivacidadDetails';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import ServicesImg from "../img/Privacidad.jpg";

const Privacidad = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Privacidad" Pdescription="" Image={ServicesImg} bPosition="30% 40%"/>
            <PrivacidadDetails/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Privacidad;