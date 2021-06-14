import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Voucher from '../components/voucher';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import ServicesImg from "../img/Condicionado.jpg";

const Consultar = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Consulte su plan" Pdescription="" Image={ServicesImg} bPosition="30% 40%"/>
            <Voucher />
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Consultar;