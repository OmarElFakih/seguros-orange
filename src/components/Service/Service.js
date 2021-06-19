import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';
import Virus from "../../img/outbreak.jpg";
import Traveling from "../../img/traveling2.jpg";

const Service = () => {
    return(
        <React.Fragment>
            <section className="seo_service_area sec_pad">
                <div className="container">
                    <SeoTitle Title='Brindamos bienestar y seguridad' TitleP='Somos reconocidos en latinoamerica y el Caribe'/>
                    {/*<div className="row seo_service_info">
                        <Fade bottom duration={500}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon1.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Digital Analytics</h4>
                                    </a>
                                    <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={700} >
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon2.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Digital Marketing</h4>
                                    </a>
                                    <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon5.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Email Marketing</h4>
                                    </a>
                                    <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <div className="col-lg-12 text-center mt_40">
                            <a href=".#" className="seo_btn seo_btn_one btn_hover">All Features</a>
                        </div>
                    </div>*/}
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content" style={{textAlign: "center"}}>
                                    <h2>Viajes por dia</h2>
                                    <p>Para personas que viajan por cortos periodos de tiempo, especialmente en viajes de turismo, negocio o placer</p>
                                    <a className={`btn_get btn_hover `} href="/Cotizador">Cotizar</a>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content" style={{textAlign: "center"}}>
                                    <h2>Plan anual o multiviajes</h2>
                                    <p>Para personas que estan fuera de su pais por largos periodos de tiempo</p>
                                    <a className={`btn_get btn_hover `} href="/Cotizador">Cotizar</a>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6" style={{backgroundImage: `url(${Traveling})`, backgroundSize: "cover", padding: "190px 0px", backgroundPositionX: "90%"}}>
                            <div className="seo_features_img" >
                                {/*<div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/features_img.png')} alt=""/>*/}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2>Consulte su plan</h2>
                                    <p>Si usted ha comprado un Plan de Asistencias de Orange Travel Assist y desea consultar sus beneficios y cobertura, imprimir su vaucher y ver las condiciones generales de la poliza.</p>
                                    <a className={`btn_get btn_hover `} href="/Consultar">Consultar</a>
                                    {/*<div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/seo/icon4.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Reporting & Analysis</h3>
                                            <p>Naff are you taking the piss say blow off faff about wellies richard.</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div className="icon two"><img src={require('../../img/seo/icon3.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Reporting & Analysis</h3>
                                            <p>Naff are you taking the piss say blow off faff about wellies richard.</p>
                                        </div>
                                    </div>*/}
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" style={{backgroundImage: `url(${Virus})`, backgroundSize: "cover", padding: "190px 0px"}}>
                            <div className="seo_features_img seo_features_img_two" >
                                {/*<div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/outbreak.jpg')} alt=""/>*/}
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2 className="wow fadeInUp">Viaje seguro, Viaje confiado, Viaje tranquilo</h2>
                                     <p className="m-0">
                                    Porque ahora todos nuestros planes incluyen cobertura covid-19 <br /> - Aplica para personas hasta los 70 años de edad <br/> - Para personas mayores de 70 años pueden obtener su cobertura adquiriendo el upgrade Covid +70 <br/> 
                                    Consulte con su asesor de ventas o por mail <br/>
                                    <a href="mailto:agentes@orangetravelassist.com" tabIndex="0">
                                        agentes@orangetravelassist.com
                                    </a>
                                    
                                    </p>
                                    
                                    {/*<h6 className="wow fadeInUp">What a plonker bamboozled so I said say what a load of rubbish owt to do with me haggle.</h6>
                                    <p className="wow fadeInUp">Cheeky bugger gosh codswallop chap bamboozled blatant cracking goal brown bread, pear shaped cor blimey guvnor easy peasy lemon squeezy hotpot spiffing good time, chancer a spend a penny spiffing I don't want no agro tinkety tonk old fruit.</p>
                                    <a href=".#" className="seo_btn seo_btn_one btn_hover wow fadeInUp">Learn More</a>*/}
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Service;
