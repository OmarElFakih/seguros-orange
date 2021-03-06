import React from 'react';
import { Accordion, Card, Button } from "react-bootstrap";

const WebServiceDetails =()=> {
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
                            <h3 className="text-color-primary reveal-from-bottom">Condiciones de uso web</h3>
                    <div className="lheight-30 reveal-from-bottom" style={{textAlign: `justify`}}>
                    <p className="fz-12" style={{fontSize: `13px`}}>
                        AL USAR ESTE SITIO WEB, EL USUARIO RECONOCE QUE ACEPTA LAS SIGUIENTES CONDICIONES DE USO SIN LIMITACI??N NI RESERVAS. FAVOR DE LEER ESTAS CONDICIONES CON ATENCI??N ANTES DE USAR ESTE SITIO WEB. ESTOS T??RMINOS Y CONDICIONES PODR??N MODIFICARSE EN CUALQUIER MOMENTO MEDIANTE UNA ACTUALIZACI??N DE ESTA PUBLICACI??N. DICHAS MODIFICACIONES SON OBLIGATORIAS PARA EL USUARIO Y, POR LO TANTO, DEBE VISITAR ESTA P??GINA PERI??DICAMENTE PARA REVISAR LOS T??RMINOS Y CONDICIONES VIGENTES A LOS QUE EST?? SUJETO.
                    </p>
                    <p>Como condici??n de su uso de este Sitio web, el usuario garantiza que:</p>
                    <ol style={{listStyle: `none`}}>
                        <li className="mb10">
                            (i) toda la informaci??n que proporcione en este Sitio web ser?? informaci??n veraz, exacta, actual y completa,
                        </li>

                        <li className="mb10">
                            (ii) si tiene una cuenta en <a  target="_black" href="https://www.orangetravelassist.net">www.orangetravelassist.net</a> resguardar?? la informaci??n de su cuenta y supervisar?? y ser?? plenamente responsable por cualquier uso de su cuenta de parte de cualquier persona que no sea el usuario y
                        </li>

                        <li className="mb10">
                            (iii) tiene al menos 18 a??os de edad para registrarse y obtener una cuenta y contribuir con nuestro sitio web. <a  target="_black" href="https://www.orangetravelassist.net">www.orangetravelassist.net</a> no recopila deliberadamente informaci??n de personas menores de 18 a??os. La empresa se reserva el derecho, a su entera discreci??n, a negar el acceso a este sitio web y los servicios que ofrece a cualquier persona, en cualquier momento y por cualquier motivo, incluido, entre otros, debido a una violaci??n del presente Acuerdo
                        </li>
                    </ol>
                                <div />
                                <Accordion key={1} >
                            <Card >
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={1} >
                                        Actividades prohibidas
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={1}>
                                    <Card.Body>
                                        <div>
                                        <p>
                                                El contenido y la informaci??n que figuran en este Sitio web (incluyendo, pero no taxativamente mensajes, datos, informaci??n, textos, m??sica, sonidos, fotos, gr??ficos, videos, mapas, iconos, software, c??digo u otros materiales), as?? como la infraestructura utilizada para ofrecer dicho contenido e informaci??n, son propiedad de la empresa. El usuario se compromete a no modificar, copiar, distribuir, transmitir, mostrar, ejecutar, reproducir, publicar, otorgar bajo licencia, crear trabajos derivados, transferir ni vender o revender de otro modo cualquier informaci??n, software, productos o servicios obtenidos de este Sitio web o a trav??s de este. Asimismo, el usuario se compromete a no hacer lo siguiente:
                                            </p>

                                            <ol style={{listStyle: `none`}}>
                                                <li className="mb10">
                                                    (i) usar este Sitio web o sus contenidos con cualquier fin comercial;
                                                </li>

                                                <li className="mb10">
                                                    (ii) tener acceso, monitorear o copiar cualquier contenido o informaci??n de este Sitio web utilizando cualquier robot, ara??a (spider), recortador (scraper) u otros medios autom??ticos o cualquier proceso manual con cualquier fin, sin el permiso expreso por escrito de la empresa;
                                                </li>

                                                <li className="mb10">
                                                    (iii) violar las restricciones de cualquier mensaje de encabezado de exclusi??n de robots en este Sitio web o evitar o eludir otras medidas empleadas para impedir o limitar el acceso a este Sitio web;
                                                </li>

                                                <li className="mb10">
                                                    (iv) tomar cualquier medida que imponga o pueda imponer, a nuestro criterio, una carga de tama??o excesivo o desproporcionado sobre nuestra infraestructura;
                                                </li>

                                                <li className="mb10">
                                                    (v) establecer v??nculos profundos a cualquier parte de este Sitio web con cualquier fin sin el permiso expreso por escrito de la empresa; o
                                                </li>

                                                <li className="mb10">
                                                    (vi) hacer un "marco", un "sitio reflejado" o incorporar de otra manera cualquier parte de este Sitio web a cualquier otro sitio web sin la previa autorizaci??n por escrito de la empresa.
                                                </li>

                                                <li className="mb10">
                                                    (vii) intentar modificar, traducir, adaptar, editar, descompilar, desmontar o utilizar t??cnicas de ingenier??a inversa sobre cualquier programa de software utilizado por <b>ORANGE WELLBEING SERVICES INC</b> en relaci??n con el Sitio web o los servicios.
                                                </li>
                                            </ol>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={2} >
                            <Card >
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={2} >
                                    Cl??usula de extenci??n de la responsabilidad
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={2}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                EN LA M??XIMA MEDIDA EN QUE LO PERMITA LA LEGISLACI??N APLICABLE, LOS MATERIALES DE ESTE SITIO WEB SE PROPORCIONAN EN EL ESTADO EN QUE SE ENCUENTRAN Y SIN GARANT??AS DE NING??N TIPO, NI EXPRESAS NI IMPL??CITAS, Y <b>ORANGE WELLBEING SERVICES INC</b>. Y SUS FILIALES NIEGAN CUALQUIER GARANT??A, EXPRESA O IMPL??CITA, QUE INCLUYEN, PERO NO TAXATIVAMENTE LAS GARANT??AS IMPL??CITAS DE COMERCIABILIDAD E IDONEIDAD PARA UN FIN EN PARTICULAR. <b>ORANGE WELLBEING SERVICES INC</b> NO GARANTIZA QUE LAS FUNCIONES CONTENIDAS EN LOS MATERIALES SE REALICEN DE FORMA ININTERRUMPIDA O EST??N LIBRES DE ERRORES, QUE SE CORRIJAN LOS DEFECTOS, NI QUE ESTE SITIO WEB O EL SERVIDOR EN EL QUE SE OFRECE EST??N LIBRES DE VIRUS U OTROS COMPONENTES PERJUDICIALES. <b>ORANGE WELLBEING SERVICES INC</b> NO GARANTIZA NI REALIZA NINGUNA DECLARACI??N SOBRE EL USO O LOS RESULTADOS DEL USO DE LOS MATERIALES QUE SE ENCUENTRAN EN ESTE SITIO WEB EN T??RMINOS DE SU CORRECCI??N, PRECISI??N, FIABILIDAD U OTROS. EL USUARIO (Y NO <b>ORANGE WELLBEING SERVICES INC</b>) ASUME LA TOTALIDAD DEL COSTO DE TODO MANTENIMIENTO, REPARACI??N O CORRECCI??N NECESARIOS. LA INFORMACI??N Y LAS DESCRIPCIONES QUE FIGURAN EN EL PRESENTE NO DEBER??N ENTENDERSE NECESARIAMENTE COMO DESCRIPCIONES COMPLETAS DE TODOS LOS T??RMINOS, EXCLUSIONES Y CONDICIONES APLICABLES A LOS PRODUCTOS Y SERVICIOS, SINO QUE SE OFRECEN EXCLUSIVAMENTE CON FINES INFORMATIVOS GENERALES. CONSULTE LA POL??TICA VIGENTE O EL ACUERDO DE PRODUCTOS O SERVICIOS QUE CORRESPONDAN.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={3} >
                            <Card >
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={3} >
                                        V??nculos a sitios fuera de la p??gina web de la empresa
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={3}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Este Sitio web podr?? incluir hiperv??nculos a sitios web operados por terceros que no forman parte de <b>ORANGE WELLBEING SERVICES INC</b>. Estos hiperv??nculos se ofrecen a modo de referencia ??nicamente. La empresa no controla dichos sitios web y no es responsable por sus contenidos ni por la privacidad u otras pr??cticas de estos. Asimismo, corresponde al usuario tomar precauciones para asegurarse de que cualquier v??nculo que seleccione o software que descargue (de este Sitio web o cualquier otro sitio web) est?? libre de elementos como virus, gusanos, troyanos, defectos y otros elementos de naturaleza perjudicial. El hecho de que se incluyan hiperv??nculos hacia dichos sitios web, no implica ninguna aprobaci??n del material que figura en los sitios web ni ninguna asociaci??n con sus operadores. En algunos casos es posible que en el sitio de un tercero se solicite al usuario que establezca un v??nculo entre su perfil en <b>ORANGE WELLBEING SERVICES INC</b> y un perfil en otro sitio de un tercero. Hacerlo o no es puramente opcional, y la decisi??n de permitir el v??nculo a esta informaci??n puede desactivarse (en el sitio del tercero) en cualquier momento.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={4} >
                            <Card >
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={4} >
                                       Limitaci??n de responsabilidad
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={4}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Aunque <b>ORANGE WELLBEING SERVICES INC</b> hace lo posible, dentro de lo razonable, para incluir informaci??n precisa y actualizada en este sitio web, a veces pueden producirse errores u omisiones. En la m??xima medida en que lo permita la legislaci??n aplicable, <b>ORANGE WELLBEING SERVICES INC</b> no ofrece ninguna garant??a ni declaraci??n sobre la precisi??n del contenido de este sitio web y en ninguna circunstancia, incluida, entre otros, negligencia, ni <b>ORANGE WELLBEING SERVICES INC</b> ni ninguna otra parte que participe en la creaci??n, producci??n o presentaci??n del sitio web tendr??n ninguna responsabilidad frente al usuario por cualesquiera da??os directos, secundarios, emergentes, indirectos o punitivos que resulten del uso, o de la imposibilidad de usar, los materiales de este sitio web, aunque se haya notificado a <b>ORANGE WELLBEING SERVICES INC</b> o un representante autorizado de <b>ORANGE WELLBEING SERVICES INC</b> sobre la posibilidad de dichos da??os. En ning??n caso la responsabilidad total de <b>ORANGE WELLBEING SERVICES INC</b> ante el usuario por todos los da??os, p??rdidas y pretensiones judiciales superar?? el monto pagado por el usuario, si alguno, por tener acceso a este sitio web. <b>ORANGE WELLBEING SERVICES INC</b> tampoco asume ninguna responsabilidad, y no ser?? responsable por ning??n da??o o virus que pueda infectar la computadora, equipo o cualquier otro bien del usuario como resultado del acceso, uso, o navegaci??n del sitio web o la descarga de cualesquiera materiales, datos, texto, im??genes, videos o audio de este sitio web.
                                            </p>

                                            <p>
                                                La limitaci??n de responsabilidad refleja la distribuci??n del riesgo entre las partes. Las limitaciones que se especifican en esta secci??n seguir??n teniendo vigencia y siendo aplicables incluso en caso de que cualquiera de los recursos limitados que se especifican en estos t??rminos no cumpla su objetivo fundamental. Las limitaciones de responsabilidad dispuestas en estos t??rminos redundar??n en beneficio de las empresas del grupo <b>ORANGE WELLBEING SERVICES INC</b>.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={5} >
                            <Card >
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={5} >
                                        Restricciones al uso de materiales
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={5}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                <b>ORANGE WELLBEING SERVICES INC</b> es propietaria y operadora de este sitio web. Excepto cuando <b>ORANGE WELLBEING SERVICES INC</b> lo permita expresamente, no se podr?? copiar, reproducir, reeditar, cargar, publicar, transmitir o distribuir de ninguna manera ning??n material de este sitio web o cualquier sitio web que sea de propiedad, o que sea operado o distribuido por <b>ORANGE WELLBEING SERVICES INC</b>. El usuario podr?? descargar material que se exhiba en este sitio web ??nicamente para uso personal, con la condici??n de que tambi??n conserve todos los avisos de derechos de autor o propiedad de otro tipo incluidas en los materiales. El usuario no podr?? distribuir, modificar, transmitir, reutilizar, reeditar o utilizar el contenido de este sitio web con fines p??blicos o comerciales, incluidos el texto, las im??genes, audio y video sin el permiso por escrito de <b>ORANGE WELLBEING SERVICES INC</b>. <b>ORANGE WELLBEING SERVICES INC</b> no garantiza ni declara que el uso de parte del usuario de los materiales que se presentan en este sitio web no infringir?? derechos de terceros.
                                            </p>

                                            <p>
                                                La limitaci??n de responsabilidad refleja la distribuci??n del riesgo entre las partes. Las limitaciones que se especifican en esta secci??n seguir??n teniendo vigencia y siendo aplicables incluso en caso de que cualquiera de los recursos limitados que se especifican en estos t??rminos no cumpla su objetivo fundamental. Las limitaciones de responsabilidad dispuestas en estos t??rminos redundar??n en beneficio de las empresas del grupo <b>ORANGE WELLBEING SERVICES INC</b>.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={6} >
                            <Card >
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={6} >
                                        Cueastiones jurisdiccionales
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={6}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                A menos que se establezca expresamente algo diferente en el presente, <b>ORANGE WELLBEING
                                                SERVICES INC</b> no manifiesta que los materiales de este sitio web sean adecuados o que est??n disponibles para su uso en cualquier ubicaci??n. Quienes deseen ingresar a este sitio web lo hacen
                                                por iniciativa propia y son responsables por el cumplimiento de las legislaciones locales. Excepto por
                                                lo que se establece expresamente en el presente, la informaci??n incluida en este sitio web no
                                                constituye una oferta de venta o una invitaci??n a comprar ning??n valor, producto de seguros u otro
                                                producto o servicio de parte de <b>ORANGE WELLBEING SERVICES INC</b>. <b>ORANGE WELLBEING
                                                SERVICES INC</b> no ofrece ni vender?? ning??n valor, producto de seguros u otro producto o servicio o,
                                                en caso de que <b>ORANGE WELLBEING SERVICES INC</b> venda cualquier valor, producto de seguros
                                                u otro producto o servicio, este no tendr?? validez en ninguna jurisdicci??n en la que dicha oferta o
                                                invitaci??n, compra o venta ser??a ilegal en virtud de la legislaci??n sobre valores, seguros u otras leyes de dicha jurisdicci??n. Es posible que algunos productos y servicios no est??n disponibles en todas las jurisdicciones.
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
                                        Propiedad de la informaci??n
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={7}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Con la excepci??n de datos o informaci??n personales, cualquier informaci??n que el usuario transmita
                                                a <b>ORANGE WELLBEING SERVICES INC</b> a trav??s de este sitio web, mediante correo electr??nico o
                                                de otro modo, incluyendo datos, preguntas, comentarios o sugerencias, se tratar??n como no
                                                confidenciales y de dominio p??blico, y pasar??n a ser propiedad de <b>ORANGE WELLBEING
                                                SERVICES INC</b>. Con la excepci??n de datos o informaci??n personales, dicha informaci??n se podr??
                                                utilizar con cualquier fin, incluyendo, pero no taxativamente su reproducci??n, invitaci??n, divulgaci??n,
                                                difusi??n, publicaci??n y transmisi??n. <b>ORANGE WELLBEING SERVICES INC</b> tiene la libertad de usar
                                                cualesquiera ideas, conceptos, pericia t??cnica o t??cnicas incluidas en cualquier comunicaci??n que el
                                                usuario env??e a <b>ORANGE WELLBEING SERVICES INC</b> a trav??s de este sitio web o cualquier otro
                                                medio con cualquier fin, incluyendo, pero no taxativamente el desarrollo y la comercializaci??n de
                                                productos usando dicha informaci??n.
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
                                       Marcas comerciales y derechos de autor
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={8}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Todas las marcas comerciales, marcas de servicios, denominaciones comerciales, logotipos e iconos
                                                son propiedad exclusiva de <b>ORANGE WELLBEING SERVICES INC</b>. Ning??n contenido de este sitio
                                                web se habr?? de interpretar como una concesi??n, de manera impl??cita, por preclusi??n o de otro modo,
                                                de cualquier licencia o derecho de uso de cualquier marca comercial que figure en este sitio web sin
                                                el permiso por escrito de <b>ORANGE WELLBEING SERVICES INC</b>.
                                            </p>

                                            <p>
                                                Se proh??be terminantemente el uso por parte del usuario de las marcas comerciales que figuran en
                                                este sitio web o cualquier otro contenido de este sitio web, excepto por lo que se dispone en el
                                                presente.
                                            </p>
                                            <p>
                                                Las im??genes que se muestran en este sitio web son propiedad de <b>ORANGE WELLBEING SERVICES INC</b> o se usan con el permiso de ??sta. Se proh??be el uso de estas im??genes por parte
                                                del usuario, o cualquier persona autorizada por ??ste, a menos que <b>ORANGE WELLBEING SERVICES INC</b> lo permita espec??ficamente. Cualquier uso no autorizado de im??genes podr?? violar leyes sobre derechos de autor, leyes sobre marcas comerciales, las leyes de privacidad y publicidad,
                                                y las normas o leyes sobre comunicaciones.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={9} >
                            <Card >
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={9} >
                                       Licencias de software
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={9}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                A menos que se especifique lo contrario, los materiales de los sitios web se presentan ??nicamente a
                                                fin de promover y brindar informaci??n sobre los servicios, sitios web, socios y otros productos de
                                                <b>ORANGE WELLBEING SERVICES INC</b> disponibles en Estados Unidos, sus territorios, posesiones
                                                y protectorados. <b>ORANGE WELLBEING SERVICES INC</b> controla y opera los sitios web de AWA
                                                desde sus oficinas en el estado de Florida en Estados Unidos. <b>ORANGE WELLBEING SERVICES
                                                INC</b> no manifiesta que los materiales que figuran en los sitios web de ORANGE WELLBEING
                                                SERVICES INC sean adecuados o puedan usarse fuera de Estados Unidos. Quienes opten por
                                                ingresar al sitio web de <b>ORANGE WELLBEING SERVICES INC</b> desde fuera de Estados Unidos, lo
                                                hacen por iniciativa propia y son responsables por el cumplimiento de la legislaci??n local, con la
                                                condici??n y en la medida en que la legislaci??n local sea aplicable. El software de los sitios web de
                                                <b>ORANGE WELLBEING SERVICES INC</b> tambi??n est?? sujeto a los controles a las exportaciones de
                                                Estados Unidos. No se podr?? descargar ni exportar o reexportar de otra manera ning??n software de
                                                los sitios web de <b>ORANGE WELLBEING SERVICES INC</b> (a) hacia (o a un ciudadano o residente
                                                de) Cuba, Irak, Libia, Corea del Norte, Ir??n, Siria o cualquier otro pa??s al que Estados Unidos le haya
                                                embargado bienes, o (b) a cualquier persona que se encuentre en la lista de Ciudadanos
                                                Especialmente Designados del Departamento del Tesoro de Estados Unidos, o en la Tabla de
                                                Pedidos a ser Denegados del Departamento de Comercio de Estados Unidos. Al usar los sitios web
                                                de <b>ORANGE WELLBEING SERVICES INC</b>, el usuario declara y garantiza que no est?? localizado,
                                                ni bajo el control, ni es ciudadano o residente de ninguno de estos pa??ses ni se encuentra en ninguna
                                                de dichas listas.
                                            </p>

                                            <p>
                                                Cualquier software que est?? disponible para descarga de los sitios web de <b>ORANGE WELLBEING
                                                SERVICES INC</b> ("Software") es una obra registrada de <b>ORANGE WELLBEING SERVICES INC</b>, o
                                                de las filiales de <b>ORANGE WELLBEING SERVICES INC</b>, o es software de terceros, seg??n se
                                                identifique. El uso por parte del usuario de dicho Software se rige por los t??rminos del acuerdo de
                                                licencia de usuario final, si lo hubiera, que acompa??a, o se incluye con el Software ("Acuerdo de
                                                Licencia"). El usuario no podr?? instalar ni usar ning??n Software que est?? acompa??ado por o que
                                                incluya un Acuerdo de Licencia, a menos que acepte en primer lugar los t??rminos del Acuerdo de
                                                Licencia. Por el presente se otorga al usuario, para cualquier Software que est?? disponible para
                                                descargar de este Sitio web que no est?? acompa??ado de un Acuerdo de Licencia, una licencia
                                                limitada, personal e intransferible para usar el Software, para ver y usar de otro modo este Sitio web
                                                de conformidad con estos t??rminos y condiciones y con ning??n otro fin. Se debe tener en cuenta que
                                                todo Software, incluyendo, pero no taxativamente todos los HTML, XML, c??digos Java y controles
                                                de Active X incluidos en este Sitio web, es propiedad de <b>ORANGE WELLBEING SERVICES INC</b> y/o
                                                sus filiales, y est?? protegido por las leyes y las disposiciones de los tratados internacionales sobre
                                                derechos de autor. Se proh??be expresamente cualquier reproducci??n o redistribuci??n del Software,
                                                que podr?? resultar en rigurosas sanciones civiles y penales. Se procesar?? a los infractores en la
                                                m??xima medida posible. SIN QUE IMPLIQUE UNA LIMITACI??N DE LO ANTERIOR, SE PROH??BE
                                                EXPRESAMENTE COPIAR O REPRODUCIR EL SOFTWARE A CUALQUIER OTRO SERVIDOR
                                                O UBICACI??N PARA SU POSTERIOR REPRODUCCI??N O REDISTRIBUCI??N. EL SOFTWARE
                                                SE GARANTIZA, SI ES QUE SE GARANTIZA, ??NICAMENTE DE ACUERDO CON LOS T??RMINOS
                                                DEL ACUERDO DE LICENCIA.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={10} >
                            <Card >
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={10} >
                                        Destinos de viajes
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={10}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Aunque la mayor??a de los viajes, incluyendo los viajes a destinos internacionales, finalizan sin
                                                incidentes, los viajes a ciertos destinos pueden implicar mayores riesgos que otros. <b>ORANGE
                                                WELLBEING SERVICES INC</b> recomienda a los pasajeros investigar y analizar las prohibiciones,
                                                advertencias, declaraciones y los anuncios oficiales sobre viajes expedidos por el Gobierno de
                                                Estados Unidos y los gobiernos de los pa??ses de destino, antes de reservar viajes a destinos
                                                internacionales. A fin de obtener informaci??n sobre las circunstancias en diversos pa??ses y el nivel
                                                de riesgo relacionado con los viajes a destinos internacionales espec??ficos, favor de consultar las
                                                siguientes p??ginas web: <a target="_black" href="https://www.state.gov">www.state.gov</a>, <a target="_black" href="https://www.tsa.gov">www.tsa.gov</a>, <a target="_black" href="https://www.dot.gov">www.dot.gov</a>, <a target="_black" href="https://www.faa.gov">www.faa.gov</a>, <a target="_black" href="https://www.cdc.gov">www.cdc.gov</a>, <a target="_black" href="https://www.treas.gov/ofac">www.treas.gov/ofac</a> y <a target="_black" href="https://www.customs.gov">www.customs.gov</a> y </p>
                                            <p>
                                                AL MENCIONAR INFORMACI??N RELATIVA A LOS VIAJES A DESTINOS INTERNACIONALES
                                                ESPEC??FICOS, BEST ASSURANCE COMPANY NO DECLARA NI GARANTIZA QUE EL VIAJE A
                                                DICHOS LUGARES SEA CONVENIENTE O EST?? LIBRE DE RIESGOS, Y NO ES RESPONSABLE
                                                POR LOS DA??OS O P??RDIDAS QUE PUEDAN RESULTAR DE VIAJES A DICHOS DESTINOS.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={11} >
                            <Card >
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={11} >
                                        Indemnizaci??n
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={11}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                El usuario se compromete a defender e indemnizar a ORANGE WELLBEING SERVICES INC y sus
                                                filiales y cualquiera de sus funcionarios, directores, empleados y agentes ante y contra cualesquiera
                                                reclamaciones, pretensiones judiciales, demandas, medidas de recuperaci??n, p??rdidas,
                                                indemnizaciones por da??os y perjuicios, multas, sanciones u otros costos o gastos de cualquier tipo
                                                o naturaleza incluyendo pero no taxativamente honorarios de asesores legales y contables
                                                razonables, presentados o solicitados por cualquier tercero como resultado de:
                                            </p>

                                            <ol style={{listStyle: `none`}}>
                                                <li className="mb10">
                                                    (i) el incumplimiento por parte del usuario del presente Acuerdo o de los documentos a los que se hace referencia en el presente;
                                                </li>
                                                <li className="mb10">
                                                    (ii) la violaci??n por parte del usuario de cualquier ley o los derechos de un tercero; o
                                                </li>
                                                <li className="mb10">
                                                    (iii) el uso por parte del usuario de este Sitio Web.
                                                </li>
                                            </ol>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={12} >
                            <Card >
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={12} >
                                        Tasas de cambio
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={12}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                Las tasas de cambio se basan en diversas fuentes disponibles al p??blico y deben usarse ??nicamente
                                                como pauta. No se verifica la exactitud de las tasas, y las tasas reales pueden variar. Es posible que
                                                las cotizaciones de las divisas no se actualicen a diario. Se considera que la informaci??n
                                                proporcionada por esta aplicaci??n es exacta, pero <b>ORANGE WELLBEING SERVICES INC</b> y/o sus
                                                filiales no garantizan ni avalan dicha exactitud. Se recomienda al usuario que, al usar esta
                                                informaci??n con cualquier fin financiero, consulte a un personal calificado para verificar la exactitud
                                                de las tasas de cambio. La empresa no autoriza el uso de esta informaci??n con cualquier fin que no
                                                sea su uso personal y se proh??be expresamente la reventa, redistribuci??n y el uso de esta informaci??n
                                                con fines comerciales.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion key={13} >
                            <Card >
                                <Card.Header classname="border-bottom">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={13} >
                                        Contacto
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={13}>
                                    <Card.Body>
                                        <div>
                                            <p>
                                                En caso de preguntas o para comunicarse con nosotros, favor de enviar un mensaje de correo
                                                electr??nico o correspondencia a
                                            </p>
                                            <h6>
                                                ORANGE WELLBEING SERVICES INC.
                                            </h6>
                                            <p>
                                                <b>Direcci??n:</b> 2893 Executive Park Dr. Suite 202 - 203. Weston, FL 33331.
                                            </p>
                                            <p>
                                                <b> Tel??fono: </b>+1 954 453 6060
                                            </p>
                                            <p>
                                                <b>Correo electr??nico:</b> <a href= "mailto:orange@orangetravelassist.net">orange@orangetravelassist.net</a>
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
export default WebServiceDetails;