import React from 'react';
import { Accordion, Card, Button } from "react-bootstrap";

const PrivacidadDetails =()=> {
    return(
        <section className="service_details_area sec_pad">
            <div className="container">
                <div className="row">
                    {/*<div className="col-lg-5 pr_70">
                        <div className="job_info">
                            <div className="info_head">
                                <i className="ti-receipt"></i>
                                <h6 className="f_p f_600 f_size_18 t_color3">Unique Elements</h6>
                            </div>
                            <div className="info_item">
                                <h6>Owner:</h6>
                                <p>Droit Theme</p>
                            </div>
                            <div className="info_item">
                                <h6>Live Time:</h6>
                                <p>2 Working Days</p>
                            </div>
                            <div className="info_item">
                                <h6>Service Cost:</h6>
                                <p>$250.00</p>
                            </div>
                            <div className="info_item">
                                <h6>Quality:</h6>
                                <p>High</p>
                            </div>
                            <div className="info_item">
                                <h6>Experience</h6>
                                <p>3 Years</p>
                            </div>
                        </div>
                    </div>*/}
                    <div className="col-lg-10">
                        <div className="details_content">
                            <div>
                                <p className="f_400 f_size_15">   <b>ORANGE WELLBEING SERVICES INC</b> 
                                        <p>
                                            respeta la privacidad de sus suscriptores y los visitantes de &nbsp;
                                            <a target="_black" href="http://www.orangetravelassist.com">www.orangetravelassist.com</a>. Por este motivo, a <b>ORANGE WELLBEING SERVICES INC</b> le gustar??a
                                            que los usuarios conozcan la forma en que ??sta usa cualquier informaci??n personal que suministren
                                            los usuarios al utilizar <a target="_black" href="http://www.orangetravelassist.com">www.orangetravelassist.com</a>.
                                        </p>
                                        <p>
                                            <a target="_black" href="http://www.orangetravelassist.com">www.orangetravelassist.com</a> no reconoce autom??ticamente ninguna informaci??n de un dominio o direcci??n de correo electr??nico cuando se ingresa al sitio.
                                        </p>
                                        <p>
                                            Cualquier informaci??n recopilada se usa ??nicamente:
                                        </p>
                                        <ul style={{marginLeft: "45px"}}>
                                            <li class="mb10">
                                                Informaci??n del navegador.
                                            </li>
                                            <li class="mb10">
                                                Informaci??n recopilada a trav??s de cookies, se??alizaciones web (pixel tags) y otras tecnolog??as.
                                            </li>
                                            <li class="mb10">
                                                informaci??n demogr??fica y otra informaci??n suministrada por el usuario; e informaci??n
                                                consolidada.
                                            </li>
                                        </ul>
                                        <p>
                                            No se comparte ninguna informaci??n recopilada con otras organizaciones con fines comerciales. La
                                            empresa tambi??n recopila otras informaciones que no revelan la identidad espec??fica del usuario,
                                            como, por ejemplo:
                                        </p>
                                        <ul style={{marginLeft: "45px"}}>
                                            <li class="mb10">
                                                Informaci??n del navegador.
                                            </li>
                                            <li class="mb10">
                                                Informaci??n recopilada a trav??s de cookies, se??alizaciones web (pixel tags) y otras tecnolog??as.
                                            </li>
                                            <li class="mb10">
                                                informaci??n demogr??fica y otra informaci??n suministrada por el usuario; e informaci??n
                                                consolidada.
                                            </li>
                                        </ul>
                                        <p>
                                            Otra informaci??n obtenida de diversas maneras, incluyendo:
                                        </p>
                                        <p>
                                            trav??s de su navegador de Internet: la mayor??a de los sitios web recopilan cierta informaci??n, como la direcci??n IP del usuario (es decir, la direcci??n de su computadora en Internet), la resoluci??n de su pantalla, el tipo de sistema operativo (Windows o Mac) y la versi??n, el tipo de navegador de Internet y la versi??n, la hora de la visita y la p??gina o p??ginas visitadas. La empresa usa esta informaci??n para fines de calcular los niveles de uso del Sitio, ayudar a diagnosticar problemas del servidor y administrar el sitio.
                                        </p>
                                </p>
                                <div >
                                <Accordion key={1} >
                        <Card >
                            <Card.Header classname="border-bottom">
                                <Accordion.Toggle as={Button} variant="link" eventKey={1} >
                                    La direcci??n de coreo electr??nico de usuario
                                        </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={1}>
                                <Card.Body>
                                    <div>    
                                        La informaci??n de la direcci??n de correo electr??nico se recoge solamente cuando un usuario se
                                        comunica con la empresa por correo electr??nico o cuando el usuario ofrece voluntariamente esta
                                        informaci??n, como en una encuesta y/o al registrarse en el sitio. Si el usuario no desea recibir
                                        informaci??n de la empresa por correo electr??nico, debe marcar la opci??n correspondiente en
                                        cualquiera de nuestros formularios de contacto, o ponerse en contacto con la empresa a trav??s de
                                        la direcci??n que se indica anteriormente.
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion key={2} >
                        <Card >
                            <Card.Header classname="border-bottom">
                                <Accordion.Toggle as={Button} variant="link" eventKey={2} >
                                    La direcci??n postal del usuario
                                        </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={2}>
                                <Card.Body>
                                    <div>    
                                        Si el usuario suministra a la empresa su direcci??n postal por Internet, es posible que reciba
                                        peri??dicamente correspondencia de la empresa con informaci??n sobre nuevos productos o servicios,
                                        o pr??ximos eventos. Si no desea recibir dicha correspondencia, el usuario puede indicar esta
                                        preferencia cuando realiza su pedido. Como alternativa, tambi??n podr?? comunicarse con la empresa
                                        a las direcciones que se indican anteriormente.
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion key={3} >
                        <Card >
                            <Card.Header classname="border-bottom">
                                <Accordion.Toggle as={Button} variant="link" eventKey={3} >
                                    El n??mero de tel??fono del usuario
                                        </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={3}>
                                <Card.Body>
                                <div>    
                                    Si el usuario suministra a la empresa sus n??meros de tel??fono por Internet, solamente recibir??
                                    comunicaciones telef??nicas de la empresa con informaci??n sobre pedidos que haya realizado en
                                    Internet a nuestra plataforma.
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion key={4} >
                        <Card >
                            <Card.Header classname="border-bottom">
                                <Accordion.Toggle as={Button} variant="link" eventKey={4} >
                                    Cookies
                                        </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={4}>
                                <Card.Body>
                                    <div>
                                        Las cookies son fragmentos de informaci??n que se guardan directamente en la computadora que
                                        est?? usando el usuario. Las cookies permiten a la empresa reconocer su computadora y recopilar
                                        informaci??n como el tipo de navegador, el tiempo transcurrido en el Sitio, las p??ginas visitadas y las
                                        preferencias de idioma. La empresa podr?? usar la informaci??n con fines de seguridad, para facilitar
                                        la navegaci??n, para mostrar informaci??n de manera m??s efectiva, para personalizar su experiencia
                                        mientras visita el Sitio, o para recopilar informaci??n estad??stica sobre el uso del Sitio.
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion key={5} >
                        <Card >
                            <Card.Header classname="border-bottom">
                                <Accordion.Toggle as={Button} variant="link" eventKey={5} >
                                    Servidor de anuncios
                                        </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={5}>
                                <Card.Body>
                                <div>    
                                    La empresa no se asocia ni tiene ninguna relaci??n especial con ninguna empresa de servidores de
                                    anuncios.
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion key={6} >
                        <Card >
                            <Card.Header classname="border-bottom">
                                <Accordion.Toggle as={Button} variant="link" eventKey={6} >
                                    Los derechos del usuario
                                        </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={6}>
                                <Card.Body>
                                <div>
                                    <p>
                                    A solicitud, la empresa proporciona a los visitantes al sitio acceso a toda la informaci??n (incluida la
                                        informaci??n reservada) que posee sobre ellos, incluyendo
                                    </p>
                                    <ul style={{marginLeft: "45px"}}>
                                        <li class="mb10">
                                            Informaci??n sobre el identificador ??nico (por ejemplo, el n??mero de cliente o la contrase??a)
                                        </li>
                                        <li class="mb10">
                                            Informaci??n sobre transacciones (por ejemplo, las fechas en las que los clientes realizaron compras, cantidades y tipos de compras)
                                        </li>
                                        <li class="mb10">
                                            Comunicaciones que el consumidor/visitante ha dirigido a nuestro sitio (por ejemplo, mensajes de correo electr??nico, consultas de clientes)
                                        </li>
                                        <li class="mb10">
                                            Informaci??n de contacto (por ejemplo, nombre, direcci??n, n??mero de tel??fono)
                                        </li>
                                    </ul>
                                    <p>
                                        A solicitud, la empresa ofrece a los visitantes la posibilidad de corregir los errores de dicha
                                        informaci??n. A fin de corregir esta informaci??n, los consumidores pueden escribir a la empresa a la
                                        direcci??n que se indica anteriormente.
                                    </p>
                                    <p>
                                        La empresa podr??, oportunamente, usar informaci??n de los clientes para usos nuevos y no previstos
                                        en el aviso de su pol??tica de privacidad. En caso de que las pr??cticas de la empresa sobre la
                                        informaci??n cambien en cualquier momento en el futuro, esta notificar?? los cambios a los usuarios a
                                        trav??s de su sitio web. El usuario tendr?? la oportunidad de no aceptar estos nuevos usos. En caso
                                        de estar preocupado sobre la manera en que se usa su informaci??n, el usuario debe revisar el sitio
                                        web de la empresa con frecuencia.
                                    </p>
                                    <p>
                                        Si considera que este sitio no sigue la pol??tica sobre informaci??n que se indica, el usuario puede
                                        comunicarse con la empresa a la direcci??n que se indica anteriormente.
                                    </p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion key={7} >
                        <Card >
                            <Card.Header classname="border-bottom">
                                <Accordion.Toggle as={Button} variant="link" eventKey={7} >
                                    Seguridad del sitio
                                        </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={7}>
                                <Card.Body>
                                    <div>
                        
                                        <p>
                                            <b>ORANGE WELLBEING SERVICES INC</b> usa tecnolog??as de codificaci??n SSL est??ndar de la
                                            industria, al transferir y recibir informaci??n confidencial (por ejemplo, detalles de tarjetas de cr??dito e
                                            informaci??n personal). Las p??ginas en las que se intercambia esta informaci??n se ubican en un
                                            servidor seguro.
                                        </p>

                                        <p>
                                            Varios de los planes de seguros de la empresa ofrecen una opci??n de inscripci??n por Internet. La
                                            empresa entiende las preocupaciones del usuario sobre la seguridad en Internet y trabaja
                                            estrechamente con sus programadores para mantener los formularios en un entorno de pedidos
                                            altamente seguro, para que el usuario pueda inscribirse en los planes de seguros de viaje de la
                                            empresa con confianza.
                                        </p>

                                        <p>
                                            Cuando el usuario est?? listo para inscribirse en uno de los planes de la empresa, ??ste pasar?? a un
                                            ??rea segura del sitio. Una vez que haya ingresado, el principio de la direcci??n de la p??gina (URL)
                                            cambiar?? de http a https, para indicar que el usuario est?? en un ??rea segura. Tambi??n aparecer?? un
                                            icono con una llave o un candado cerrado en el ??ngulo inferior derecho de la mayor??a de los
                                            navegadores para indicar este cambio. El usuario permanecer?? en esta zona segura durante todo el
                                            proceso de compra.
                                        </p>

                                        <p>
                                            La empresa tomar?? las medidas t??cnicas, f??sicas, legales y organizativas que correspondan, que
                                            ser??n coherentes con las leyes de privacidad y seguridad de datos aplicables. Lamentablemente, no
                                            es posible garantizar que ninguna transmisi??n de datos a trav??s de Internet o un sistema de
                                            almacenamiento de datos sea 100 % segura. Si el usuario tiene motivos para pensar que su
                                            interacci??n con la empresa ha dejado de ser segura (por ejemplo, si considera que la seguridad de
                                            cualquier Informaci??n Personal que la empresa pueda tener ha sido amenazada), debe notificarlo
                                            inmediatamente a la empresa.
                                        </p>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion key={8} >
                    <Card >
                        <Card.Header classname="border-bottom">
                            <Accordion.Toggle as={Button} variant="link" eventKey={8} >
                                Preguntas y comunicaciones adicionales
                                    </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={8}>
                            <Card.Body>
                            <div>
                   
                                <p>
                                    En caso de tener preguntas o para comunicarse con la empresa, enviar un mensaje de correo
                                    electr??nico o correspondencia a:
                                </p>

                                <h6>
                                    ORANGE WELLBEING SERVICES INC.
                                </h6>
                                <p>
                                    <b>Direcci??n:</b> 2893 Executive Park Dr. Suite 202 - 203. Weston, FL 33331.
                                </p>
                                <p>
                                    <b> Tel??fono: </b>+1 (954) 453 6060
                                </p>
                                <p>
                                    <b>Correo electr??nico:</b> orange@orangetravelassist.net
                                </p>
                                <p>
                                    <b>Sitio web:</b> <a href="https://www.orangetravelassist.net" target="_black">www.orangetravelassist.net</a>
                                </p>
                            </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                                </div>      
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PrivacidadDetails;