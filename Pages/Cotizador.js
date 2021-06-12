import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import CotizadorReactivo from "../components/Cotizador/CotizadorReactivo";


const Faq = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
            <CotizadorReactivo/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Faq;