import React from 'react';
import { Accordion, Card, Button } from "react-bootstrap";

const ServiceDetails =()=> {
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
                                <p className="f_400 f_size_15">  Invitamos a los Beneficiarios de un voucher o plan de asistencia <strong>ORANGE TRAVEL ASSIST</strong> &nbsp; 
                                    a leer estas condiciones Generales antes de emprender su viaje. En las siguientes p??ginas, 
                                    encontrar?? las Condiciones Generales, Condiciones Particulares y Exclusiones, 
                                    as?? como las instrucciones que le permitir??n un mejor uso de los beneficios y servicios contratados.
                                </p>
                                <div >
                                    <Accordion key={1} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={1} >
                                            Introduccion
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={1}>
                                        <Card.Body>
                                            <div>

                                            Todos los servicios proporcionados por este plan de asistencia, son cubiertos a trav??s de <strong>ORANGE TRAVEL ASSIST</strong>
                                            , compa????a cuyo objeto principal es el de proporcionar, entre otros, servicios de asistencia m??dica, jur??dica y personal ??nicamente en casos de EMERGENCIAS en el transcurso
                                            de un viaje internacional durante el periodo de vigencia del plan contratado.

                                            <h5>Aceptaci??n del Beneficiario.</h5>
                                            <p>
                                                Las presentes Condiciones Generales, junto con la restante documentaci??n se pone a disposici??n del Beneficiario al momento de la
                                            compra del plan, conforman el contrato de asistencia al viajero que brinda <strong>ORANGE TRAVEL ASSIST</strong>. El Beneficiario declara conocer y aceptar las
                                            presentes Condiciones Generales, dicha aceptaci??n queda ratificada por medio de cualquiera de los siguientes actos:
                                            </p>
                                            <ol className="list-style-decimal">
                                                <li>El pago de los servicios contratados</li>
                                                <li>El uso o el intento de uso de cualquiera de los servicios contratados</li>
                                            </ol>
                                            <p>
                                                En ambos casos, el Beneficiario reconoce que ha elegido, le??do y que acepta todos los t??rminos y condiciones de los
                                                servicios expresados en las presentes Condiciones Generales y que las mismas rigen la relaci??n entre las partes en todo
                                                momento convirti??ndose en un contrato de adhesi??n.
                                            </p>
                                            <p>
                                                Es claramente entendido y aceptado por el Beneficiario que los planes de
                                            <strong>ORANGE TRAVEL ASSIST</strong>, no constituyen bajo ning??n motivo un seguro o producto af??n,
                                            como tampoco es: un programa de seguridad social o de medicina pre-pagada, un servicio m??dico a domicilio o
                                            servicio m??dico ilimitado. Por lo tanto, no tienen como objeto principal la sanidad completa, ni el tratamiento
                                            definitivo de las dolencias del Beneficiario. Los servicios de asistencia m??dica a ser brindados por
                                            <strong>ORANGE TRAVEL ASSIST</strong> se limitan expresa y ??nicamente a tratamientos de urgencia de cuadros agudos y
                                            est??n ??nicamente orientados a la asistencia primaria en viaje de eventos s??bitos e imprevisibles donde se haya
                                            diagnosticado una enfermedad o condici??n m??dica clara, comprobable y aguda que impida la normal continuaci??n de un viaje,
                                            siempre y cuando dicha enfermedad o condici??n m??dica no se encuentre en la lista de las exclusiones. Estos planes est??n
                                            dise??ados para garantizar la recuperaci??n primaria y normal e inicial del Beneficiario y las condiciones f??sicas que
                                            permitan una normal continuaci??n de su viaje. No est??n dise??ados ni se contratan ni se prestan para:
                                            </p>
                                            <ul>
                                                <li>Procedimientos m??dicos electivos</li>
                                                <li>Efectuarse chequeos m??dicos de rutina, ni chequeos que no hayan sido previamente autorizados por la Central de Servicios de Asistencia</li>
                                                <li>Adelantar tratamientos o procedimientos benignos o de larga duraci??n</li>
                                            </ul>
                                            <p>
                                                Toda asistencia o tratamiento cesar?? y no ser?? responsabilidad de
                                            <strong>ORANGE TRAVEL ASSIST</strong> una vez que el Beneficiario regrese a su lugar de residencia o
                                            cuando expire el per??odo de validez del plan elegido. La adquisici??n por parte de un Beneficiario de uno o
                                            m??s voucher no produce la acumulaci??n de los beneficios ni del tiempo en ellas contempladas, en estos
                                            casos solo podr??n aplicarse los topes establecidos en el voucher que primero haya sido emitido.
                                            </p>
                                            <p>
                                                <b>NOTA: Es claramente entendido por el Beneficiario que este plan es un producto de asistencia en viajes y
                                                que en la eventualidad que sea ofrecido a trav??s de una compa????a de seguros no lo hace un seguro m??dico
                                            internacional.</b>
                                            </p>
                                            <p>
                                                Por otra parte, una vez iniciada la vigencia del voucher, el Beneficiario no podr?? hacer cambios ni
                                                ampliaci??n del producto contratado, tampoco se proceder?? a la cancelaci??n del voucher por ninguna raz??n,
                                                ni bajo ninguna circunstancia. Sin perjuicio de lo anterior, cuando el Beneficiario prolongue su viaje en
                                            forma imprevista, podr?? solicitar la emisi??n de un nuevo voucher. <strong>ORANGE TRAVEL ASSIST</strong>
                                            se reserva el derecho de aceptar o negar esta renovaci??n sin dar m??s explicaciones rigi??ndose bajo las
                                            siguientes condiciones:
                                            </p>
                                            <ol className="list-style-alpha">
                                                <li>El Beneficiario no podr?? solicitar la renovaci??n de su voucher si ha hecho uso de cualquiera de los servicios de <strong>ORANGE TRAVEL ASSIST</strong> durante la vigencia del primer voucher.</li>
                                                <li>El Beneficiario podr?? renovar su voucher con un plan que tenga la misma cobertura del
                                                        primero o mayor, no se emitir?? con coberturas menor a la contratada originalmente. </li>
                                                <li>El Beneficiario deber?? solicitar autorizaci??n para la emisi??n de un nuevo voucher
                                                exclusivamente al agente emisor con el cual contrat?? la asistencia original o de haber sido
                                                comprado en p??gina web, a trav??s del formulario de ???Contacto??? en la misma, indicando la
                                                        cantidad de d??as que desea contratar, el agente emisor est?? obligado a informar a <strong>ORANGE TRAVEL ASSIST</strong> que se trata de una emisi??n en destino y solicitar?? la autorizaci??n para el nuevo
                                                        per??odo de contrataci??n.
                                                        </li>
                                                <li>La solicitud de emisi??n de un nuevo voucher deber?? efectuarse antes de la finalizaci??n de la vigencia del voucher original.</li>
                                                <li>El Beneficiario deber?? realizar el pago del nuevo voucher al momento de la emisi??n.</li>
                                            </ol>
                                            <p>
                                                El nuevo plan de su servicio de asistencia en viajes y su correspondiente voucher emitido en las condiciones
                                                referidas en esta cl??usula no podr?? ser utilizado bajo ning??n concepto, para iniciar o continuar el tratamiento
                                                y/o asistencia de problemas que ya hubieran surgido durante la vigencia del primer voucher original y/o anteriores
                                                o antes de la vigencia del nuevo plan y/o voucher, independientemente de las gestiones o tratamientos en curso
                                            hayan sido autorizados por <strong>ORANGE TRAVEL ASSIST</strong> o por terceros. Toda asistencia m??dica tratada
                                            durante la vigencia del primer voucher pasar?? autom??ticamente a ser considerada como preexistencia durante la
                                            vigencia del segundo voucher y por lo tanto no ser?? asumida por <strong>ORANGE TRAVEL ASSIST</strong>.
                                            </p>
                                            <p>
                                                Cuando la vigencia del voucher anterior haya finalizado al momento de la compra o el pasajero
                                                compre en destino, el voucher ser?? expedido con 15 (quince) d??as de carencia para gastos por
                                                COVID-19 y de 3 (tres) d??as para cualquier otro gasto contemplado dentro de la tabla de coberturas.
                                                Lo anterior, ??nicamente tras haber recibido la agencia emisora/operadora tur??stica y dem??s,
                                                autorizaci??n expresa de la Central de Servicios de Asistencia.
                                            </p>
                                            <h5>
                                                Definiciones.
                                            </h5>
                                            <p>
                                                A continuaci??n, enumeramos las definiciones de los t??rminos usados en estas condiciones generales,
                                            para un mayor entendimiento de los Beneficiarios de un plan <strong>ORANGE TRAVEL ASSIST</strong>:
                                            </p>
                                            <h6>A</h6>
                                            <dl>
                                                <dt>Accidente:</dt>
                                                <dd>es el evento generativo de un da??o corporal que sufre el Beneficiario,
                                                causado por agentes extra??os, fuera de control y en movimiento, agentes externos, violentos y visibles y
                                                s??bitos. Siempre que se mencione el t??rmino "accidente", se entender?? que la lesi??n o dolencia resultante
                                                fue provocada directamente por tales agentes e independientemente de cualquier otra causa. Los accidentes
                                                cuyo origen es debido a descuido, provocaci??n o la falta de medidas de prevenci??n por parte del
                                                Beneficiario se encuentran excluidos de toda asistencia. Si el da??o corporal es producido como
                                                consecuencia de causas diferentes a las anteriores mencionadas, el Beneficiario tendr?? cobertura hasta el
                                                monto de Asistencia M??dica por Enfermedad del plan adquirido.</dd>
                                                <dt>Accidente Grave:</dt> <dd>Aquel que trae como consecuencia amputaci??n de cualquier segmento
                                                corporal; fractura de huesos largos (f??mur, tibia, peron??, humero, radio y c??bito); trauma
                                                craneoencef??lico; quemaduras de segundo y tercer grado; lesiones severas de mano, tales
                                                como, aplastamiento o quemaduras; lesiones severas de columna vertebral con compromiso
                                                de m??dula espinal; lesiones oculares que comprometan la agudeza o el campo visual o
                                                lesiones que comprometan la capacidad auditiva. En general todo accidente en el cual este
                                                en riesgo la vida del paciente.
                                                </dd>
                                            </dl>
                                            <h6>C</h6>
                                            <dl>
                                                        <dt>Cat??strofe:</dt> <dd>Suceso infausto que altera gravemente el orden regular de las cosas, donde se ven implicadas numerosas personas.</dd>
                                                        <dt>Central de Servicios de Asistencia:</dt> <dd>Es la oficina que coordina la prestaci??n de los servicios requeridos por el Beneficiario con motivo de su asistencia. Es igualmente el departamento de profesionales que presta los servicios de supervisi??n, control y coordinaci??n que intervienen y deciden todos aquellos asuntos y/o prestaciones a brindarse o prestarse en virtud de las presentes condiciones generales que est??n relacionados con temas m??dicos.</dd>
                                                    </dl>
                                            <h6>D</h6>
                                            <dl>
                                                        <dt>Departamento M??dico:</dt> <dd>Grupo de profesionales m??dicos de <strong>ORANGE TRAVEL ASSIST</strong> que intervienen y toman decisi??n en todos los asuntos y/o prestaciones brindadas o que vayan a brindarse de conformidad con las presentes Condiciones Generales.</dd>
                                                        <dt>Deportes Amateur:</dt> <dd>Es el practicado por aficionados, por ocio y/o actividades recreativas.</dd>
                                                        <dt>Deportes Profesionales:</dt> <dd>E: Es el practicado con o sin ??nimo de lucro, realizado en cualquier tipo de competencia como intercolegiados, torneos, campeonatos, deportes que supongan un alto riesgo, entre otros.</dd>
                                                    </dl>
                                            <h6>E</h6>
                                            <dl>
                                                        <dt>Enfermedad o Condici??n M??dica Aguda:</dt> <dd>Proceso corto y relativamente severo de la alteraci??n del estado del cuerpo o alguno de sus ??rganos, que pudiere interrumpir o alterar el equilibrio de las funciones vitales, pudiendo provocar dolor, debilidad u otra manifestaci??n extra??a al comportamiento normal del mismo.</dd>
                                                        <dt>Enfermedad Cong??nita:</dt> <dd>Patolog??a presente o existente desde antes del momento de nacer.</dd>
                                                        <dt>Enfermedad Cr??nica:</dt> <dd>Todo proceso patol??gico continuo, repitente y persistente en el tiempo, mayor a 30 d??as de duraci??n.</dd>
                                                        <dt>Enfermedad o Condici??n M??dica Preexistente:</dt> <dd>todo proceso f??sico patol??gico que reconozca un origen o una etiolog??a anterior a la fecha de inicio de la vigencia del plan o del viaje (o la que sea posterior) y que sea factible de ser objetivado a trav??s de m??todos complementarios de diagn??stico de uso habitual, cotidiano, accesible y frecuente en todos los pa??ses del mundo (incluyendo, pero no limitado a: Doppler, resonancia nuclear, magn??tica, Cateterismo, radiolog??a, etc.). Se entiende por preexistencia toda enfermedad, o estado del cuerpo, o proceso conocido o no por el Beneficiario, que haya necesitado o requerido de un periodo de formaci??n, o de una gestaci??n, o de una incubaci??n dentro del organismo del Beneficiario antes de haber iniciado el viaje. Ejemplos claros y comunes de preexistencias solo para citar algunos son: los c??lculos renales o biliares, las obstrucciones de arterias o venas por co??gulos u otros, enfermedades respiratorias como el asma, problemas pulmonares, enfisemas, el VIH, generalmente problemas relacionados con la tensi??n arterial, glaucoma, cataratas, nefritis, ??lceras o enfermedades g??stricas, enfermedades resultantes de deformaciones cong??nitas, micosis genitales, abscesos hep??ticos, cirrosis, az??car en la sangre, colesterol alto, triglic??ridos altos, y otras. Los mismos requieren de un periodo de formaci??n corto o largo, pero en todos los casos superior a unas horas de vuelo, reconociendo que dicho estado o proceso patol??gico exist??a dentro del organismo antes de subirse al avi??n o al medio de transporte en la fecha de la entrada en vigencia del servicio de asistencia, aun cuando la sintomatolog??a se presente por primera vez despu??s de haber iniciado el viaje.</dd>
                                                        <dt>Enfermedad o Condici??n M??dica Recurrente:</dt> <dd>regreso, repetici??n u aparici??n de la misma enfermedad o condici??n luego de haber sido tratada.</dd>
                                                        <dt>Enfermedad o Condici??n M??dica Repentina o Imprevista:</dt> <dd>Enfermedad pronta, impensada, no prevista, contra??da con posterioridad a la fecha de inicio de vigencia del Beneficiario del servicio de asistencia m??dico para viajes <strong>ORANGE TRAVEL ASSIST</strong>.</dd>
                                                        <dt>Enfermedad Grave:</dt> <dd>Es una alteraci??n o desviaci??n del estado fisiol??gico en una o varias partes del cuerpo, manifestadas por s??ntomas y unos signos caracter??sticos, y cuya evoluci??n es m??s o menos previsible es decir cualquier dolencia o lesi??n con secuelas permanentes o no permanentes que limiten parcialmente o impidan totalmente la ocupaci??n o actividad habitual de la persona afectada, o la incapaciten para cualquier actividad y requiera o no la asistencia de otras personas para las actividades m??s esenciales de la vida.</dd>

                                            </dl>
                                            <h6>F</h6>
                                            <dl>
                                                <dt>Fuerza Mayor:</dt> <dd>la que, por no poderse prever o resistir, exime del cumplimiento de alguna obligaci??n y/o que procede de la voluntad de un tercero.</dd>
                                            </dl>
                                            <h6>G</h6>
                                            <dl>
                                                <dt>Gastos de Primera Necesidad:</dt> <dd>gastos realizados por la compra de elementos de uso personal e intransferible. Se entienden por estos, ??nica y exclusivamente: ropaje (ropa exterior, ropa interior), zapatos, elementos de aseo personal (shampoo, acondicionador, jab??n -l??quido, en barra, en polvo-, cepillo de dientes, pasta de dientes, desodorante, crema de afeitar, m??quina de afeitar, productos de higiene femenina) y maquillaje. Cualquier otro elemento no considerado dentro del listado anteriormente indicado, se entender?? como excluido de cualquier tipo de cobertura.</dd>
                                            </dl>
                                            <h6>M</h6>
                                            <dl>
                                                <dt>M??dico Tratante:</dt> <dd>Profesional m??dico provisto o autorizado por la Central de Servicios de Asistencia de <strong>ORANGE TRAVEL ASSIST</strong> que asiste al Beneficiario en el lugar donde se encuentra este ??ltimo.</dd>
                                            </dl>
                                            <h6>P</h6>
                                            <dl>
                                                        <dt>Paciente Estable:</dt> <dd>que no presenta variaci??n de su estado de salud y suele hacer referencia a que los s??ntomas y signos no han cambiado recientemente.</dd>
                                                        <dt>Plan o Producto de Asistencia:</dt> <dd>Es el conjunto detallado de los servicios de asistencia en viaje ofrecidos, indicando una enumeraci??n taxativa de las mismas y sus l??mites monetarios, cuantitativos, geogr??ficos y de edad del Beneficiario.</dd>
                                                        <dt>Plazo o Per??odo de Carencia:</dt> <dd>Intervalo de tiempo durante el cual no son efectivas las coberturas incluidas dentro del Plan. Dicho plazo se computa por d??as contados desde la fecha de inicio de vigencia del voucher, siempre que el Beneficiario ya se encuentre fuera del lugar de residencia habitual al momento de contrataci??n.</dd>
                                                    </dl>
                                            <h6>T</h6>
                                            <dl>
                                                <dt>Topes M??ximos:</dt> <dd>Montos m??ximos de cobertura por parte de <strong>ORANGE TRAVEL ASSIST</strong>, indicados en el voucher para cada prestaci??n y seg??n el producto de asistencia contratado.</dd>
                                            </dl>
                                            <h6>V</h6>
                                            <dl>
                                                <dt>Voucher:</dt> <dd>Es el documento que usted recibe al momento de la compra de su producto <strong>ORANGE TRAVEL ASSIST</strong> y que lleva sus datos para ser informados a la central en caso de solicitar asistencia.</dd>
                                            </dl>
                                            </div>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={2} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={2} >
                                        Beneficiario/Edad L??mite
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={2}>
                                        <Card.Body>
                                        <div>
                                            <p>
                                            El Beneficiario es la persona natural cuyo nombre aparece reflejado en el plan de asistencia y es la sola 
                                            beneficiaria de todas sus coberturas hasta el d??a aniversario, inclusive, de su edad l??mite seg??n el tipo de Plan 
                                            adquirido, fecha a partir de la cual el Beneficiario pierde todo derecho a los beneficios y a todas las prestaciones
                                            de asistencia definidas en estas condiciones generales, as?? como derecho a cualquier reembolso o reclamo alguno 
                                            originado en eventos posteriores a tal d??a.
                                            </p>
                                            <p>Las prestaciones o beneficios del Plan respectivo los podr?? recibir exclusivamente el Beneficiario y son 
                                            intransferibles, por lo cual el mismo deber?? comprobar y demostrar su identidad, presentar el voucher carta, 
                                            o voucher correspondiente y documentos de viajes para determinar la vigencia y aplicabilidad de las prestaciones 
                                            o beneficios solicitados.
                                            </p>
                                            <p>
                                            El Beneficiario podr?? hacer uso de los servicios contratados hasta las cero 00:00 horas del d??a de su 
                                            aniversario seg??n el plan contratado. A partir de esa fecha el Beneficiario pierde todo derecho a los 
                                            beneficios en cuanto a las prestaciones de Asistencia definidas en estas Condiciones Generales, as?? como el 
                                            derecho a reembolso o reclamo alguno originado en eventos posteriores a tal d??a. A manera de ejemplo, se 
                                            considera que una persona tiene 84 a??os hasta el d??a anterior a cumplir los 85 a??os.
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
                                        Vigencia - Validez
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={3}>
                                        <Card.Body>
                                            <div>
                                            <p>
                                            Es el lapso de tiempo en el que pueden ser obtenidos los beneficios indicados en los planes de un servicio 
                                            de asistencia m??dica <strong>ORANGE TRAVEL ASSIST</strong>, incluyendo ??ste, es el que transcurre desde las 
                                            cero horas del d??a de comienzo de validez de dicho plan, estando el pasajero en territorio extranjero, 
                                            hasta las 24 (23.59) horas del d??a del fin de dicha validez ambas fechas reflejadas en el voucher adquirido 
                                            por el Beneficiario. La finalizaci??n de la vigencia, implicar?? el cese autom??tico de todos los beneficios, 
                                            prestaciones, o servicios en curso o no, incluyendo aquellos casos o tratamientos iniciados al momento o antes 
                                            del t??rmino de la vigencia.
                                            </p>
                                            <p>
                                            Los planes en la categor??a ???Viajes Cortos???, tendr??n una vigencia m??xima de 90 d??as consecutivos de viaje, 
                                            mientras que los planes ???Larga Estad??a???, tendr??n una vigencia total de 365 d??as consecutivos de cobertura. 
                                            Pasados estos per??odos, el Beneficiario perder?? todo beneficio de los servicios de asistencia contratados 
                                            mientras est?? en ese viaje.
                                            </p>
                                            <p><b>Nota: los planes ???Estudiantiles??? s??lo podr??n ser adquiridos por personas que actualmente est??n estudiando o 
                                            que vayan a cursar alg??n estudio, por ello se solicitar?? un certificado o carnet de escolaridad, estudiantil o de 
                                            aceptaci??n a una instituci??n educativa a la hora de solicitar asistencia.
                                            </b></p>
                                            <p>
                                            Los planes de asistencia ???Anuales Multiviajes??? tienen una vigencia de 365 d??as en total, sin embargo, 
                                            el Beneficiario no podr?? permanecer en cada viaje, seg??n lo indicado en el plan de asistencia del producto 
                                            que haya adquirido, m??s de 30, 45, 60 o 90 d??as en el exterior por cada viaje que realice dentro de su 
                                            vigencia. La Central de Servicios de Asistencias de <strong>ORANGE TRAVEL ASSIST</strong> le pedir?? al 
                                            momento de atenderlo la copia de su pasaporte por fax o e-mail, demostrando la fecha de salida de su pa??s de
                                            residencia habitual o la fecha de entrada al pa??s desde donde solicita asistencia.
                                            </p>
                                            <p>
                                            Los planes <strong>ORANGE TRAVEL ASSIST</strong>, operan bajo la modalidad de d??as corridos, por lo tanto, 
                                            una vez iniciada la vigencia de un plan, no es posible interrumpir la misma, los periodos de d??as no utilizados 
                                            en los voucher no son reembolsables. Una vez interrumpida la vigencia de un plan, ??ste caduca y no puede 
                                            reactivarse posteriormente.
                                            </p>
                                            <p>
                                            El prop??sito del viaje tendr?? que ser tur??stico y en ning??n momento podr?? garantizar a personas que ejerzan 
                                            una actividad profesional en el exterior. Si el motivo del viaje del Beneficiario fuese la ejecuci??n de 
                                            trabajos o tareas que involucren un riesgo profesional, por realizar tareas de alta especializaci??n en 
                                            donde se exponga la vida, se est?? expuesto a sustancias peligrosas, al manejo de maquinarias pesadas o que 
                                            funcionen con gases, presi??n de aire o fluidos hidroneum??ticos, que requieran habilidades f??sicas especiales, 
                                            o donde se vea expuesto a peligro y como consecuencia de ello sufra un accidente o una enfermedad 
                                            consecuencial, <strong>ORANGE TRAVEL ASSIST</strong> quedar?? eximido de toda responsabilidad de prestar sus 
                                            servicios o asumir costos que se deriven de tales circunstancias, y en estos casos ser?? obligaci??n patronal 
                                            de asumirlos a trav??s de su plan de responsabilidad de riesgos profesionales. Esta normatividad aplica 
                                            igualmente a aquellas personas que no est??n ligadas laboralmente con una empresa y que act??an por su cuenta 
                                            como trabajadores independientes o en situaci??n migratoria o laboral ilegal.
                                            </p>
                                            <p>
                                            El prop??sito del viaje tendr?? que ser tur??stico y en ning??n momento podr?? garantizar a personas que 
                                            ejerzan una actividad profesional en el exterior. Si el motivo del viaje del Beneficiario fuese la 
                                            ejecuci??n de trabajos o tareas que involucren un riesgo profesional, por realizar tareas de alta 
                                            especializaci??n en donde se exponga la vida, se est?? expuesto a sustancias peligrosas, al manejo de 
                                            maquinarias pesadas o que funcionen con gases, presi??n de aire o fluidos hidroneum??ticos, que requieran 
                                            habilidades f??sicas especiales, o donde se vea expuesto a peligro y como consecuencia de ello sufra un 
                                            accidente o una enfermedad consecuencial, <strong>ORANGE TRAVEL ASSIST</strong> quedar?? eximido de toda 
                                            responsabilidad de prestar sus servicios o asumir costos que se deriven de tales circunstancias, y en estos
                                            casos ser?? obligaci??n patronal de asumirlos a trav??s de su plan de responsabilidad de riesgos profesionales. 
                                            Esta normatividad aplica igualmente a aquellas personas que no est??n ligadas laboralmente con una empresa y 
                                            que act??an por su cuenta como trabajadores independientes o en situaci??n migratoria o laboral ilegal.
                                            </p>
                                            <ol className="list-style-decimal">
                                                        <li>Hasta ocho (8) d??as adicionales contados desde el d??a de finalizaci??n de vigencia del voucher, o</li>
                                                        <li>Hasta que se haya agotado la cobertura contratada, o</li>
                                                        <li>Hasta que el m??dico firme el alta del Beneficiario en el transcurso de los ocho (8) d??as de ampliaci??n de cobertura</li>
                                            </ol>
                                            <p>
                                            Toda asistencia o tratamiento cesar?? y no ser?? responsabilidad de <strong>ORANGE TRAVEL ASSIST</strong> una 
                                            vez que el Beneficiario regrese a su lugar de residencia o expire el per??odo de validez del plan elegido salvo 
                                            excepciones anteriormente mencionadas.
                                            </p>
                                            <p><b>
                                            Nota: en los casos que el Beneficiario ya se encuentre en el pa??s destino y solicite la
                                            autorizaci??n para emitir un plan de asistencia en viajes, siempre y cuando la misma sea
                                            autorizada por la Central de Emergencia, dicho plan tendr?? 5 d??as de carencia.
                                            </b></p>
                                            </div>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={4} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={4} >
                                            Validez Geogr??fica
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={4}>
                                        <Card.Body>
                                        <p>
                                            La cobertura geogr??fica ser?? de car??cter Mundial o exclusivamente para Europa, dependiendo del voucher comprado. 
                                            Independientemente de donde se encuentre el Beneficiario, se le dar?? cobertura en caso de requerir asistencia de 
                                            acuerdo al respectivo plan adquirido. Se excluye en todo caso el pa??s de residencia habitual del Beneficiario o pa??s 
                                            donde se emiti?? el Plan de Asistencia.
                                        </p>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={5} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={5} >
                                            Procedimiento para solicitar asistencia - centrales de asistencia
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={5}>
                                        <Card.Body>
                                            <div>
                                            <p>
                                                De necesitar asistencia, e independientemente de su situaci??n geogr??fica en estricta concordancia con el resto 
                                                de las cl??usulas de este condicionado general, el Beneficiario contactar?? a la Central de Servicios de Asistencia 
                                                <strong>ORANGE TRAVEL ASSIST</strong>. Para poder comunicarse con dicha central por v??a telef??nica, el 
                                                Beneficiario debe solicitar la llamada por cobrar o llamar directamente a la Central de Servicios de Asistencia en
                                                los n??meros habilitados por los pa??ses indicados.
                                            </p>
                                            <p>
                                                En caso tal de existir cobro por llamar a la Central de Servicios de Asistencia, 
                                                <strong>ORANGE TRAVEL ASSIST</strong> le reembolsar?? al Beneficiario el costo de la llamada; para ello 
                                                solicitamos guardar el comprobante o factura por el pago de dicha llamada, donde est?? reflejado el cobro a 
                                                alguno de los n??meros indicados abajo.
                                            </p>
                                            <p>
                                                Es obligaci??n del Beneficiario siempre llamar y reportar la emergencia. En los casos en que el 
                                                Beneficiario no pueda hacerlo personalmente deber?? y podr?? hacerlo cualquier acompa??ante, amigo o 
                                                familiar pero siempre la llamada o aviso deber?? hacerse a m??s tardar dentro de las 24 horas de haber 
                                                sucedido la emergencia. Para los casos en que el beneficiario se encuentre en altamar, y por ende impedido 
                                                de comunicarse con la Central de Asistencias, deber?? informar el hecho m??dico hasta 24 horas despu??s de 
                                                desembarcado en el primer puerto al que arribe. El no cumplimiento de esta norma acarrea la p??rdida 
                                                autom??tica de cualquier derecho de reclamo de parte del Beneficiario.
                                            </p>
                                            <table className="table" style={{color: "#9ca9b3"}}>
                                                        <thead>
                                                            <tr><th>Pa??s</th><th>Tel??fono</th><th>Pa??s</th><th>Tel??fono</th></tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr><th>Alemania</th><td>800-185-9976</td><th>Reino Unido</th><td>808-234-1766</td></tr>
                                                            <tr><th>Argentina</th><td>800-666-2984</td><th>Costa Rica</th><td>800-013-1372</td></tr>
                                                            <tr><th>Brasil</th><td>800-891-4530</td><th>Colombia</th><td>571-5938795</td></tr>
                                                            <tr><th>Espa??a</th><td>911-815-905</td><th>Rep??blica Dominica</th><td>1888-751-8475</td></tr>
                                                            <tr><th>Francia</th><td>800-905-030</td><th>Estados Unidos</th><td>1-877-889-0149</td></tr>
                                                            <tr><th>Italia</th><td>800-839-070</td><th>Estados Unidos/Cobro revertido</th><td>+1-954-472-1895</td></tr>
                                                            <tr><th>Chile</th><td>562-29382411</td><th>E-mail</th><td>assistance@wt-assist.com</td></tr>
                                                            <tr><th>M??xico</th><td>1866-261-1935</td><th>Skype</th><td>asistencia.internacional</td></tr>
                                                            <tr><th>Whatsapp</th><td>+ 57 316 763 6033</td></tr>
                                                        </tbody>
                                            </table>
                                            <p><b>
                                                Nota: Los tel??fonos toll free (0800) se deber??n marcar tal cual como aparecen desde tel??fonos fijos. 
                                                En caso que el pa??s donde se encuentre no tenga un tel??fono toll free, se deber?? llamar a trav??s de la 
                                                operadora internacional del pa??s donde se encuentre el Beneficiario solicitando cobro revertido al tel??fono 
                                                de Estados Unidos indicado en la tabla superior, asimismo, a trav??s de medios electr??nicos como E-mail, WhatsApp 
                                                y Skype.
                                            </b></p>
                                            </div>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={6} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={6} >
                                            Obligaciones del beneficiario
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={6}>
                                        <Card.Body>
                                            <div>
                                            <p>En todos los casos, para la obtenci??n de los servicios el Beneficiario debe:</p>
                                            <ol className="list-style-decimal">
                                                        <li>Solicitar y obtener la autorizaci??n de la Central de Servicios de Asistencia antes de tomar cualquier iniciativa o comprometer cualquier gasto en relaci??n a los beneficios otorgados por el plan de la voucher de asistencia. En los casos donde no se haya solicitado la autorizaci??n a la central ni se haya obtenido la autorizaci??n, no proceder??n reembolsos algunos, ni dar??n derechos a reclamos.</li>
                                                        <li>Queda claramente entendido que la notificaci??n a la central resulta imprescindible, aun cuando el problema suscitado se encuentre totalmente resuelto, ya que <strong>ORANGE TRAVEL ASSIST</strong> no podr?? tomar a su cargo el costo de ninguna asistencia sin el previo conocimiento y autorizaci??n de la Central de Servicios de Asistencia.</li>
                                                        <li>El Beneficiario acepta que <strong>ORANGE TRAVEL ASSIST</strong> se reserva el derecho de grabar y auditar las conversaciones telef??nicas que estime necesarias para el buen desarrollo de la prestaci??n de sus servicios. El Beneficiario acepta expresamente la modalidad indicada y manifiesta su conformidad por la eventual utilizaci??n de los registros como medio de prueba en caso de existencia de controversias respecto de la asistencia prestada.</li>
                                                        <li>Si el Beneficiario o una tercera persona no pudiera comunicarse por una circunstancia o raz??n involuntaria con la Central de Servicios de Asistencia antes de ser asistido, el Beneficiario o una tercera persona, con la obligaci??n ineludible, deber?? informar a m??s tardar dentro de las 24 horas de producido el evento. No notificar dentro de las 24 horas acarrea la p??rdida autom??tica de los derechos del Beneficiario a reclamar o solicitar indemnizaci??n alguna.</li>
                                                        <li>Aceptar y acatar las soluciones indicadas y recomendadas por la Central de Servicios de Asistencia y llegado el caso, consentir con la repatriaci??n a su pa??s de origen cuando, seg??n opini??n m??dica, su estado sanitario lo permita y lo requiera.</li>
                                                        <li>Proveer la documentaci??n que permita confirmar la procedencia del caso, as?? como todos los comprobantes originales de gastos a ser evaluados para su eventual reembolso por <strong>ORANGE TRAVEL ASSIST</strong> y toda la informaci??n m??dica (incluyendo la anterior al inicio del viaje), que permita a la central la evaluaci??n del caso.</li>
                                                        <li>En todos aquellos casos en que <strong>ORANGE TRAVEL ASSIST</strong> lo requiera, el Beneficiario deber?? otorgar las autorizaciones para revelar su historia cl??nica completando el Record Release Form que el centro m??dico solicitar?? firmar y devolver?? por fax a la Central de Servicios de Asistencia. Asimismo, el Beneficiario autoriza en forma absoluta e irrevocable a <strong>ORANGE TRAVEL ASSIST</strong> a requerir en su nombre cualquier informaci??n m??dica a los profesionales tanto del exterior como del pa??s de su residencia, con el objetivo de poder evaluar y eventualmente decidir sobre la aplicabilidad de las restricciones en casos de enfermedades o condiciones preexistentes o de la afecci??n que haya dado origen a su asistencia. Recomendamos en forma especial a los Beneficiarios diligenciar siempre el Formulario cuando se registren en un centro hospitalario, eso ser?? de gran ayuda en los casos de reembolsos y/o en la toma de decisiones sobre determinados casos que requieran del estudio del historial m??dico del paciente.</li>
                                            </ol>
                                            <p><b>
                                                Nota: En algunos pa??ses y principalmente en los Estados Unidos de Norteam??rica y Europa, debido a razones de
                                                estandarizaci??n inform??tica la mayor??a de los centros m??dicos asistenciales tales como hospitales, 
                                                consultorios, cl??nicas, laboratorios suelen enviar facturas y/o reclamos de pago a los pacientes atendidos, 
                                                inclusive aun despu??s de que las cuentas o facturas haya sido pagadas y saldadas. En caso de que ello ocurra,
                                                el Beneficiario deber?? contactar la oficina de la Central de Servicios de Asistencias marcando los n??meros 
                                                proporcionados anteriormente o escribiendo a claims@wt-assist.com y notificar esta situaci??n. La Central se 
                                                encargar?? de aclarar dicha situaci??n con el proveedor.
                                            </b></p>
                                            </div>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={7} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={7} >
                                            Obligaciones asumidas por <strong>Orange Travel Assist</strong>
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={7}>
                                        <Card.Body>
                                            <div>
                                            <ol className="list-style-decimal">
                                                        <li>Cumplir las prestaciones y beneficios descritos en las Condiciones Generales de eventos cubiertos en el plan contratado durante la vigencia del voucher.</li>
                                                        <li><strong>ORANGE TRAVEL ASSIST</strong> queda expresamente liberada, exenta y excusada de cualquiera de sus obligaciones y responsabilidades en caso de que el Beneficiario sufra alg??n da??o o solicite asistencia a consecuencia y/o derivada de caso fortuito o de fuerza mayor, la cuales se citan a t??tulo de ejemplo y no taxativamente: cat??strofes, sismos, inundaciones, tempestades, guerra internacional o guerra civil declaradas o no, rebeliones, conmoci??n interior, insurrecci??n civil, actos de guerrilla o anti guerrilla, hostilidades, represalias, conflictos, embargos, apremios, huelgas, movimientos populares, lockout, actos de sabotaje o terrorismo, disturbios laborales, actos de autoridades gubernamentales, etc.; as?? como problemas y/o demoras que resulten por la terminaci??n, interrupci??n o suspensi??n de los servicios de comunicaci??n. Cuando elementos de esta ??ndole interviniesen y una vez superados los mismos, <strong>ORANGE TRAVEL ASSIST</strong> se compromete a ejecutar sus compromisos y obligaciones dentro del menor plazo posible.</li>
                                                        <li><strong>ORANGE TRAVEL ASSIST</strong> se obliga a analizar cada solicitud de reembolso para determinar si es procedente y en consecuencia reintegrar los montos que correspondieren de acuerdo a las presentes condiciones generales y montos de cobertura del Plan contratado. Todas las compensaciones y/o reintegros y/o dem??s gastos que vayan a asumirse por <strong>ORANGE TRAVEL ASSIST</strong>, en el marco del presente contrato, podr??n ser abonados en moneda local.</li>
                                            </ol>
                                            <p>Los tiempos establecidos para el procesamiento de un reembolso son:</p>
                                            <ol className="list-style-alpha">
                                                        <li>El Beneficiario tiene hasta treinta (30) d??as continuos a partir del d??a finalizaci??n de la vigencia del voucher para presentar la documentaci??n y respaldos necesarios para iniciar el proceso del reembolso. Despu??s de ese plazo, no se aceptar??n documentos para tramitar ning??n reembolso.</li>
                                                        <li>Una vez recibidos los documentos, <strong>ORANGE TRAVEL ASSIST</strong> tiene hasta cinco (5) d??as continuos para solicitar cualquier documento faltante que no haya sido entregado por el Beneficiario.</li>
                                                        <li>Con todos los documentos necesarios en mano, <strong>ORANGE TRAVEL ASSIST</strong> proceder?? durante los siguientes quince (15) d??as h??biles a analizar el caso y emitir la carta de aprobaci??n o negaci??n de dicho reembolso.</li>
                                                        <li>Siendo procedente el reembolso, <strong>ORANGE TRAVEL ASSIST</strong> proceder?? a efectuar el pago en 15 d??as h??biles, posteriores a la fecha de recepci??n de los datos completos v??a escrita para la realizaci??n de la transferencia.</li>
                                            </ol>
                                            <p><b>
                                                Nota: Los reembolsos pagados directamente por <strong>ORANGE TRAVEL ASSIST</strong> pueden hacerse a 
                                                trav??s de transferencia bancaria, giro postal o cheque. <strong>ORANGE TRAVEL ASSIST</strong> asumir?? los 
                                                gastos generados por la agencia de giro postal, el env??o del cheque, as?? como los cobros directos de su 
                                                entidad bancaria; cargos adicionales realizados por el banco del Beneficiario ser??n cubiertos por el mismo.
                                            </b></p>
                                            </div>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={8} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={8} >
                                            Moneda de alcances y servicios
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={8}>
                                        <Card.Body>
                                            <div>
                                            <p>
                                                Los beneficios ofrecidos por <strong>ORANGE TRAVEL ASSIST</strong> se detallan en el punto IX. y sus 
                                                l??mites de cobertura m??ximos est??n reflejados en el voucher contratado expresados en D??lares Americanos (USD) o 
                                                Euros (EUR), dependiendo del plan elegido y de su cobertura geogr??fica.
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
                                            Definicion de los beneficios
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={9}>
                                        <Card.Body>
                                            <div>
                                            <p>
                                            Algunos beneficios se encuentran incluidos solo en algunos productos <strong>ORANGE TRAVEL ASSIST</strong>. 
                                            Verifique en su voucher los beneficios y topes contratados. Si en su voucher no figura alg??n ??tem, es porque el 
                                            producto por usted elegido no dispone de este servicio.
                                            </p>
                                            <h5>Asistencia m??dica por accidente/enfermedad o condici??n m??dica no preexistente</h5>
                                            <dl>
                                                        <dt>Consultas M??dicas:</dt> <dd>Se prestar??n en caso de accidente y enfermedad o condici??n m??dica aguda e imprevista no preexistente.</dd>
                                                        <dt>Atenci??n por Especialistas:</dt> <dd>Se prestar?? ??nicamente cuando sea indicada y autorizada por el Departamento M??dico de la Central de Servicios de Asistencia de <strong>ORANGE TRAVEL ASSIST</strong> o por el m??dico tratante de la central.</dd>
                                                        <dt>Ex??menes M??dicos Complementarios:</dt> <dd>??nicamente cuando sean indicados y previamente autorizados por el Departamento M??dico de la Central de Servicios de Asistencia.</dd>
                                                        <dt>Internaciones:</dt> <dd>De acuerdo a la naturaleza de la lesi??n o enfermedad, y siempre que el Departamento M??dico de la Central de Servicios de Asistencia de <strong>ORANGE TRAVEL ASSIST</strong> as?? lo prescriba, se proceder?? a la internaci??n del Beneficiario en el centro sanitario m??s pr??ximo al lugar donde ??ste se encuentre. Este ??tem aplicar?? ??nicamente al Beneficiario del plan de asistencia, y bajo ning??n motivo se cubrir?? cama y/o alimentaci??n en el hospital o cl??nica para una persona acompa??ante.</dd>
                                                        <dt>Intervenciones Quir??rgicas:</dt> <dd>Cuando sean autorizadas por el Departamento M??dico de la Central de Servicios de Asistencia, en los casos de emergencia que requieran en forma inmediata tratamiento, y que no puedan ser diferidas o postergadas hasta el retorno del Beneficiario a su pa??s de origen.</dd>
                                                        <dt>Terapia Intensiva y Unidad Coronaria:</dt> <dd>cuando la naturaleza de la enfermedad o lesi??n as?? lo requiera, y siempre con la previa autorizaci??n del Departamento M??dico de la Central de Servicios de Asistencia se autorizar?? este servicio.</dd>
                                            </dl>
                                            <p><b>
                                            Nota 1: La Central de Servicios de Asistencia se reserva el derecho de decidir el m??s adecuado de entre 
                                            los tratamientos propuestos por el cuerpo m??dico y/o la repatriaci??n al pa??s de residencia si su condici??n 
                                            f??sica lo permitiere. Si a juicio de los m??dicos tratantes de la Central de Servicios de Asistencia fuese 
                                            posible el regreso al lugar de origen para recibir en ??l tratamiento de larga duraci??n, cirug??a programable o 
                                            cirug??as no urgentes, se proceder?? a la repatriaci??n del Beneficiario, quien est?? obligado a aceptar tal 
                                            soluci??n, perdiendo en caso de rechazo todos los beneficios otorgados por su plan 
                                            <strong>ORANGE TRAVEL ASSIST</strong>.
                                            </b></p>
                                            <h5>Asistencia m??dica por COVID-19</h5>
                                            <p style={{fontSize: "13px", fontWeight: "normal"}}>
                                                        El Beneficiario deber?? siempre y sin excepci??n entrar en contacto con la Central de Emergencias,
                                                        quienes a su vez coordinar??n una cita virtual por Telemedicina y, de acuerdo al dictamen brindado
                                                        por el Departamento M??dico, si el Beneficiario presenta sintomatolog??a relacionada al COVID-19, la
                                                        Central de Asistencias coordinar?? la consulta m??dica pertinente, de acuerdo a los protocolos de
                                                        seguridad y salud de cada pa??s, cubriendo los gastos incurridos hasta el tope de cobertura indicado
                                                        en el voucher. Los siguientes gastos estar??n cubiertos bajo el mismo tope:
                                            </p>
                                            <ul className="list-style-alpha">
                                                        <li style={{fontSize: "13px", fontWeight: "normal"}}>
                                                            <b>Gastos Hospitalarios por COVID-19:</b> En caso de requerir internaci??n hospitalaria para
                                                            estabilizar la condici??n del Beneficiario.
                                                        </li>
                                                        <li style={{fontSize: "13px", fontWeight: "normal"}}>
                                                            <b>Gastos de respirador mec??nico:</b> Si el Departamento M??dico, en conjunto con el m??dico
                                                            tratante, considera necesario el uso de un respirador mec??nico, la Central autorizar?? y
                                                            cubrir?? dicho gasto.
                                                        </li>
                                            </ul>
                                            <p style={{fontSize: "13px"}}>
                                                        ESTE BENEFICIO NO OPERAR?? A MANERA DE REEMBOLSO.
                                                        <br />
                                                        <br />
                                                        Nota1: El l??mite de edad para este beneficio es de 70 a??os. Para el caso de beneficiarios hasta
                                                        los 64 a??os, la cobertura contratada ser?? igual al tope por enfermedad no preexistente. Los
                                                        beneficiarios con edades comprendidas entre los 65 a 70 a??os, tendr??n una cobertura
                                                        m??xima de USD 30.000 para emisiones desde pa??s de origen, y para el caso de emisiones en
                                                        destino la cobertura m??xima ser?? de USD 10.000. Los beneficiarios mayores de 70 a??os, y
                                                        hasta los 85, podr??n adquirir la cobertura adicional por COVID-19, a trav??s de la compra del
                                                        beneficio, el cual les otorgar?? un monto m??ximo de USD 30.000 siempre y cuando el plan
                                                        contratado sea igual o superior a USD/EUR 30.000. Finalmente, los beneficiarios mayores de
                                                        85 a??os, podr??n adquirir la cobertura adicional por COVID-19, a trav??s de la compra del
                                                        beneficio, el cual les otorgar?? un monto m??ximo para gastos m??dicos hasta por un monto
                                                        m??ximo de USD 10.000.
                                                        <br />
                                                        <br />
                                                        Nota2: Este producto no cubrir?? gastos de cuarentena en hotel, se limitar?? ??nicamente a
                                                        gastos m??dicos.
                                            </p>
                                            <h5>Asistencia m??dica por enfermedad preexistente.</h5>
                                            <p>
                                            En aquellos casos en que el Beneficiario contrate espec??ficamente la cobertura para emergencias sufridas 
                                            por una condici??n preexistente y/o cr??nica, se cubrir?? hasta el monto que se especifique claramente en su 
                                            voucher. La cobertura proporcionada para enfermedades cr??nicas y/o preexistentes contempla las siguientes 
                                            eventualidades:
                                            </p>
                                            <p>
                                            Episodio agudo o evento no predecible, descompensaci??n de enfermedades cr??nicas y/o preexistentes conocidas 
                                            o previamente asintom??ticas. Esta cobertura se proporciona exclusivamente para la atenci??n m??dica primaria en 
                                            el episodio agudo, o caso no predecible, la emergencia debe requerir la asistencia durante el viaje y no puede 
                                            aplazarse hasta el retorno al pa??s de residencia, la Central de Asistencias se reserva el derecho de decidir el 
                                            tratamiento m??s adecuado de entre los propuestos por el personal m??dico y/o la repatriaci??n a su pa??s de 
                                            residencia. La repatriaci??n ser?? una soluci??n en los casos en los que los tratamientos requiere evoluci??n a 
                                            largo t??rmino, cirug??as programadas o cirug??as no urgentes, el beneficiario est?? obligado a aceptar esta soluci??n, 
                                            perdiendo en caso de rechazo de la soluci??n de todos los beneficios que ofrece el plan de asistencia.
                                            </p>
                                            <p>
                                            Se excluye de este beneficio el inicio o la continuaci??n de tratamientos, procedimientos diagn??sticos, 
                                            de investigaci??n, o conducta diagn??stica y terap??utica, que no est??n relacionados con el episodio agudo e 
                                            impredecible.
                                            </p>
                                            <p>
                                            Se excluye de esta cobertura todas las enfermedades relacionadas con la transmisi??n sexual, incluyendo, 
                                            pero no limitando a la s??filis, la gonorrea, el herpes genital, la clamidia, el virus del papiloma humano 
                                            tricomonas vaginalis, tricomoniasis, virus de la inmunodeficiencia humana (VIH), el s??ndrome de 
                                            inmunodeficiencia adquirida (SIDA), entre otros.
                                            </p>
                                            <p>
                                            No se trata en cualquiera de nuestros planes, procedimientos de di??lisis, trasplantes, 
                                            tratamiento de oncolog??a ni tratamiento psiqui??trico, aud??fonos, anteojos, lentes de contacto, puentes 
                                            dentales, marcapasos, desfibriladores implantables, respiradores externos, dispositivos implantables, 
                                            equipo desechable espec??fico, etc. enfermedades causadas por la ingesti??n de drogas, estupefacientes, 
                                            medicamentos que se toman de forma no fiable sin receta, alcoholismo, etc.
                                            </p>
                                            <p>
                                            Las lesiones sufridas durante un acto il??cito, no est??n bajo nuestra cobertura. Obligaciones del beneficiario:
                                            </p>
                                            <ol className="list-style-decimal">
                                                        <li>El Beneficiario deber?? seguir todas las instrucciones m??dicas dadas por el m??dico tratante asignado por <strong>ORANGE TRAVEL ASSIST</strong> y tomar todos los medicamentos de la forma prescrita y seg??n se requiera.</li>
                                                        <li>Si el Beneficiario interesado en la contrataci??n de un plan que incluya cobertura de asistencia de emergencia para condiciones pre-existente, sufren alguna(s) de las siguientes condiciones: cualquier tipo de c??ncer, enfermedades del coraz??n, enfermedad pulmonar cr??nica y/o enfermedad hep??tica cr??nica, el beneficiario debe consultar a su m??dico personal en su pa??s de origen antes de iniciar el viaje y obtener confirmaci??n por escrito que est?? en condiciones de viajar por todos los d??as previstos, el destino deseado y puede hacer sin inconvenientes todas las actividades programadas.</li>
                                                        <li>El beneficiario no podr?? iniciar el viaje despu??s de recibir un diagn??stico terminal.</li>
                                                        <li>Para poder acceder a esta cobertura el beneficiario deber?? haber estado estable por m??s de 12 meses.</li>
                                            </ol>
                                            <p>
                                            En caso de que se determine la raz??n del viaje fue el tratamiento en el extranjero para una condici??n cr??nica 
                                            o preexistente, la Central de Asistencias negar?? cobertura.
                                            </p>
                                            <h5>Medicamentos recetados</h5>
                                            <p>
                                            En los l??mites de cobertura, <strong>ORANGE TRAVEL ASSIST</strong> se har?? cargo de los gastos de los 
                                            medicamentos recetados por el M??dico Tratante de la Central de Servicios de Asistencia hasta los montos 
                                            establecidos en los topes de cobertura del plan contratado. Los desembolsos realizados por el Beneficiario 
                                            para la compra de medicamentos previamente autorizados por la Central de Servicios de Asistencia ser??n 
                                            reintegrados, dentro de los l??mites de cobertura y una vez retornado al pa??s de origen, y contra la previa 
                                            presentaci??n de los comprobantes originales de compra, de la copia original del dictamen o informe m??dico en 
                                            donde indique claramente el diagn??stico recibido, as?? la f??rmula o receta m??dica. Recomendamos a los 
                                            Beneficiarios no olvidar solicitar estos documentos al m??dico tratante, la no presentaci??n de estos documentos 
                                            puede resultar en el no reembolso de los gastos.
                                            </p>
                                            <p>
                                            Se deja constancia y se informa que los gastos de medicamentos por concepto de enfermedades preexistentes no 
                                            ser??n asumidos por <strong>ORANGE TRAVEL ASSIST</strong>, as?? hayan sido diagnosticados por el M??dico 
                                            Tratante de la Central de la Central de Servicios de Asistencia. Se encuentran tambi??n excluidos los 
                                            medicamentos por tratamiento de enfermedades mentales o ps??quicas o emocionales, aun en los casos en que la 
                                            consulta m??dica haya sido autorizada por el Departamento M??dico de <strong>ORANGE TRAVEL ASSIST</strong>.
                                            </p>
                                            <p>
                                            Tampoco se cubrir??n bajo ning??n motivo las pastillas anticonceptivas, inyecciones anticonceptivas, 
                                            dispositivos intrauterinos o cualquier otro m??todo de planificaci??n familiar, as?? hayan sido diagnosticados 
                                            por el M??dico Tratante de la Central de la Central de Servicios de Asistencia.
                                            </p>
                                            <p><b>
                                            Nota: Las prescripciones m??dicas destinadas a la recuperaci??n inicial de los s??ntomas s??lo ser??n 
                                            autorizadas por los primeros 30 d??as de tratamiento.
                                            </b></p>
                                            <h5>Emergencia dental</h5>
                                            <p>
                                            En los l??mites de cobertura, <strong>ORANGE TRAVEL ASSIST</strong> se har?? cargo de los gastos por 
                                            atenci??n odontol??gica derivados de una urgencia, debido o causada por un trauma, accidente o infecci??n, 
                                            limit??ndose ??nicamente al tratamiento del dolor y/o a la extracci??n de la pieza dentaria resultante de 
                                            infecci??n o trauma ??nicamente. Los tratamientos odontol??gicos de conductos, cambios de calzas, coronas, 
                                            pr??tesis, sellamientos, limpiezas dentales, dise??os de sonrisa o cualquier otro tratamiento no especificado 
                                            claramente en estas condiciones se encuentran excluidos de la cobertura.
                                            </p>
                                            <h5>Traslado sanitario y/o repatriaci??n sanitaria</h5>
                                            <p>
                                            En caso de emergencia o de urgencia y si la Central de Servicios de Asistencia lo juzgare necesario, 
                                            se organizar?? el traslado del Beneficiario al centro de salud m??s cercano, por el medio de transporte que el 
                                            Departamento M??dico de la Central de Servicios de Asistencia considere m??s apropiado y seg??n corresponda a la 
                                            naturaleza de la lesi??n o enfermedad. Queda igualmente establecido que aun para los casos de tratamientos y 
                                            cirug??as que ocurren en casos catalogados como urgencia o emergencia el traslado sanitario debe ser 
                                            previamente solicitado y autorizado por la central de <strong>ORANGE TRAVEL ASSIST</strong>. El no 
                                            cumplimiento de esta norma exime a <strong>ORANGE TRAVEL ASSIST</strong> de tomar a cargo la cobertura de 
                                            dicho traslado.
                                            </p>
                                            <p>Se entiende por repatriaci??n sanitaria el traslado del Beneficiario enfermo o accidentado desde el lugar en donde se encuentra hasta el aeropuerto de ingreso del pa??s de residencia habitual y en el que debi?? ser emitido el voucher. Solamente el Departamento M??dico de <strong>ORANGE TRAVEL ASSIST</strong> podr?? autorizar a tomar todas las providencias mencionadas en esta cl??usula, quedando el Beneficiario o un familiar prohibido de realizarlo por cuenta propia sin la previa autorizaci??n escrita de <strong>ORANGE TRAVEL ASSIST</strong>. Adicionalmente la repatriaci??n deber?? ser autorizada y justificada m??dica y cient??ficamente por el M??dico Tratante de <strong>ORANGE TRAVEL ASSIST</strong> , en el caso en que el Beneficiario y o sus familiares o acompa??antes decidieran efectuar la repatriaci??n dejando de lado o sin solicitar la opini??n del Departamento M??dico de <strong>ORANGE TRAVEL ASSIST</strong>, de realizarse de esta manera, ninguna responsabilidad recaer?? sobre <strong>ORANGE TRAVEL ASSIST</strong> siendo por lo tanto la repatriaci??n as?? como todos los dem??s gastos y consecuencias, responsabilidad del Beneficiario o de sus familiares o acompa??antes, sin derecho a reclamo contra <strong>ORANGE TRAVEL ASSIST</strong>.</p>
                                            <p>Cuando el Departamento M??dico de <strong>ORANGE TRAVEL ASSIST</strong> en com??n acuerdo con el M??dico Tratante estime necesario y recomiende la repatriaci??n sanitaria, esta se efectuar?? en primera instancia por el medio de transporte disponible m??s conveniente para ello, y/o por avi??n de l??nea a??rea comercial, en clase turista y sujeta a disponibilidad de cupo a??reo, hasta el aeropuerto de ingreso del pa??s de residencia o de compra de la tarjeta. <strong>ORANGE TRAVEL ASSIST</strong> se har?? cargo del pago de las diferencias por cambio de fecha del pasaje o la compra de uno nuevo si el original se tratase de un tiquete sin posibilidad de cambio. Esta asistencia comprende su transporte en ambulancia u otro medio de transporte que sea compatible con su estado de salud y aprobado por el Departamento M??dico de <strong>ORANGE TRAVEL ASSIST</strong> desde el lugar de internaci??n hasta su lugar de residencia, con la estructura de apoyo necesaria incluyendo camilla, sillas de rueda, caminador, acompa??amiento m??dico, etc.</p>
                                            <p>No ser?? reconocido ning??n gasto por concepto de repatriaci??n cuando la causa que dio origen a ella es a consecuencia de una enfermedad preexistente u obedezca a un evento que figura dentro de las exclusiones generales, salvo en planes que contemplen preexistencias. Este beneficio aplicar?? ??nica y exclusivamente dentro de las fechas de vigencia de su voucher.</p>
                                            <h5>Repatriaci??n funeraria</h5>
                                            <p>En caso de fallecimiento del Beneficiario durante la vigencia de la tarjeta <strong>ORANGE TRAVEL ASSIST</strong> a causa de un evento no excluido en las condiciones generales. <strong>ORANGE TRAVEL ASSIST</strong> organizar?? y sufragar?? la repatriaci??n funeraria tomando a su cargo los gastos de: f??retro simple obligatorio para el transporte internacional, los tr??mites administrativos y el transporte del cuerpo por el medio que consideren m??s conveniente hasta el lugar de ingreso al pa??s de residencia habitual del fallecido, hasta el tope especificado en la tabla de beneficios.</p>
                                            <p>Si el derechohabiente lo desea, dentro de esta misma cobertura, puede optar por la cremaci??n del cuerpo y tambi??n estar??n incluidos todos los tr??mites administrativos a los que haya lugar y traslado de cenizas hasta el pa??s de residencia habitual del fallecido.</p>
                                            <p>Los gastos de f??retro definitivo, tr??mites funerarios, traslados terrestres o a??reos en el pa??s de residencia e inhumaci??n no estar??n a cargo de <strong>ORANGE TRAVEL ASSIST</strong>.</p>
                                            <p><strong>ORANGE TRAVEL ASSIST</strong> quedar?? eximido de prestar los servicios y asumir los costos relativos al presente beneficio en caso que el fallecimiento del Beneficiario se origine por causa de un suicidio o fallecimiento por consecuencia de ingesta de alcohol o cualquier tipo de drogas, o por una enfermedad o condici??n m??dica preexistente, cr??nica, o recurrente. Este beneficio no contempla ni incluye bajo ninguna circunstancia gastos de regreso de familiares acompa??antes del fallecido, por lo que <strong>ORANGE TRAVEL ASSIST</strong> no tomar?? a su cargo ning??n gasto de terceros.</p>
                                            <h5>Traslado de un familiar por hospitalizaci??n en 1??. Grado de consanguinidad</h5>
                                            <p>En caso de que la hospitalizaci??n de un Beneficiario, viajando solo y no acompa??ado, fuese superior a diez (10) d??as, <strong>ORANGE TRAVEL ASSIST</strong> se har?? cargo de un pasaje a??reo en clase turista, sujeto a disponibilidad de espacio para un familiar de compa????a. En caso de ser contemplado en la tabla de beneficios de los productos, el Beneficiario podr?? tener derecho a los gastos de hotel por USD 80.00 (ochenta d??lares) diarios para su familiar acompa??ante durante m??ximo siete d??as o hasta el alta del paciente, lo que suceda primero.</p>
                                            <p><b>Atenci??n: Tanto para esta cl??usula como para cualquier otra que cubra gastos de hoteler??a, se entiende estos limitados al hospedaje simple, sin gastos de restaurante, lavander??a, telefon??a u otro cualquier como mini bar, alimentaci??n tomada en la habitaci??n, u otro tipo de gasto cualquiera.</b></p>
                                            <h5>Gastos de hotel por convalecencia</h5>
                                            <p>Cuando de acuerdo con el m??dico tratante y en com??n acuerdo con el Departamento M??dico de la Central de Servicios de Asistencia, el Beneficiario hubiese estado internado en un hospital al menos cinco (5) d??as y que a su salida deba obligatoriamente guardar reposo forzoso, <strong>ORANGE TRAVEL ASSIST</strong> cubrir?? los gastos de hotel hasta el monto indicado en su plan de asistencia, con un m??ximo de 10 (diez) d??as. Este ??tem aplicar?? ??nicamente al Beneficiario del plan de asistencia, y bajo ning??n motivo se cubrir??n los gastos para una persona acompa??ante.</p>
                                            <p>Se aclara que <strong>ORANGE TRAVEL ASSIST</strong> no asumir?? ning??n gasto de hotel por convalecencia cuando la internaci??n haya sido suscitada por una enfermedad o condici??n m??dica preexistente.</p>
                                            <p><b>Atenci??n: Dicho reposo deber?? ser ordenado por los m??dicos de la central exclusivamente y contemplar??n ??nicamente el cubrimiento del costo de la habitaci??n sin ning??n tipo de alimentaci??n o gastos de otra ??ndole tales como lavander??a, llamadas telef??nicas (salvo aquellas efectuadas a la central de <strong>ORANGE TRAVEL ASSIST</strong>.), mini bares, etc.</b></p>
                                            <h5>Orientaci??n en caso de extrav??o de equipaje/documentos</h5>
                                            <p><strong>ORANGE TRAVEL ASSIST</strong> asesorar?? al Beneficiario para la denuncia del extrav??o o robo de su equipaje y efectos personales, para lo cual pondr?? a su disposici??n los servicios de la Central de Servicios de Asistencia m??s pr??xima. Igualmente, <strong>ORANGE TRAVEL ASSIST</strong> asesorar?? al Beneficiario en caso de p??rdida de documentos de viajes, y o tarjetas de cr??dito d??ndole las instrucciones para que el Beneficiario interponga los denuncios respectivos, y tramite la recuperaci??n de los mismos.</p>
                                            <h5>Viaje de regreso por fallecimiento de familiar en 1?? grado</h5>
                                            <p>Si el Beneficiario debiera retornar a su pa??s de residencia habitual por causa del fallecimiento de un familiar directo (padre, c??nyuge, hijo o hermano) all?? residente, <strong>ORANGE TRAVEL ASSIST</strong> se har?? cargo de la diferencia del costo del pasaje a??reo de regreso del Beneficiario a su pa??s de origen, ??nicamente cuando su pasaje sea de tarifa reducida por fecha fija o limitada de regreso. Esta asistencia deber?? acreditarse mediante certificado de defunci??n del familiar y documento que acredite el parentesco.</p>
                                            <h5>Regreso anticipado por siniestro grave en domicilio</h5>
                                            <p>En caso de incendio, explosi??n, inundaci??n o robo con da??os y violencia en el domicilio de un Beneficiario, mientras ??ste se encuentre de viaje, si no hubiese ninguna persona que pueda hacerse cargo de la situaci??n y si su pasaje original de regreso no le permitiera el cambio gratuito de fecha, <strong>ORANGE TRAVEL ASSIST</strong> tomar?? a su cargo la diferencia que correspondiese o el costo de un nuevo pasaje en clase turista desde el lugar en que el Beneficiario se encuentre hasta el aeropuerto m??s cercano al hogar del Beneficiario en el pa??s de residencia. Esta solicitud de asistencia deber?? acreditarse mediante la presentaci??n en la Central de Servicios de Asistencias el original de la denuncia policial correspondiente, dentro de las veinticuatro horas siguientes al suceso. El Beneficiario deber?? indefectiblemente comunicarse con la Central de Servicios de Asistencias a fin de ser autorizado. No ser??n aceptados pedidos de reembolso sin ninguna justificaci??n.</p>
                                            <h5>Acompa??amiento de menores de 15 a??os</h5>
                                            <p>Si un Beneficiario viajara como ??nica compa????a de menores de quince (15) a??os tambi??n Beneficiarios de un plan de asistencia <strong>ORANGE TRAVEL ASSIST</strong> y por causa de enfermedad o accidente constatado por el Departamento M??dico de la Central de Servicios de Asistencia, se viera imposibilitado para ocuparse de ellos, <strong>ORANGE TRAVEL ASSIST</strong> organizar?? a su cargo el desplazamiento de dichos menores hasta el domicilio habitual en su pa??s de origen, por el medio que considere m??s adecuado.</p>
                                            <h5>Cancelaci??n de viaje contratado</h5>
                                            <p><strong>ORANGE TRAVEL ASSIST</strong> cubrir?? hasta el tope de cobertura seg??n el plan contratado las penalidades por cancelar anticipadamente un viaje conocido como tours, paquetes tur??sticos, excursiones, boletos a??reos y cruceros.</p>
                                            <p>Para ser acreedor de este beneficio, el Beneficiario del voucher deber??:</p>
                                            <ol className="list-style-decimal">
                                                        <li>Contratar el plan con una diferencia de hasta 72 horas siguientes en que se contrate el paquete tur??stico y/o crucero. Siempre y cuando no haya iniciado el periodo de penalidades publicados por la agencia de viajes o naviera.</li>
                                                        <li>Dar aviso a la Central de Servicios de Asistencias en un m??ximo de 24 horas luego de ocurrido el evento que motiva la cancelaci??n.</li>
                                                        <li>Presentar toda la documentaci??n que <strong>ORANGE TRAVEL ASSIST</strong> considere para evaluar la cobertura de este beneficio, incluyendo, pero no limitando a: documento donde se demuestre de forma clara y fehaciente el motivo de cancelaci??n de viaje (informe m??dico, partida de defunci??n, entre otros), cartas de los respectivos prestadores del servicio, facturas, recibos de pago. (Ver requisitos espec??ficos en los casos de cruceros abajo se??alados).</li>
                                                        <li>
                                                            El Beneficiario tiene hasta treinta (30) d??as continuos a partir de la fecha de sucedido el evento para presentar la documentaci??n completa y respaldos necesarios para iniciar el proceso del reembolso. Despu??s de ese plazo, no se aceptar??n documentos para tramitar ning??n reembolso.
                                                        </li>
                                            </ol>
                                            <p><b><u>Nota: para los planes Anuales Multiviajes la cancelaci??n se renovar?? cada vez que el Beneficiario viaje seg??n indique el plan de asistencia del producto que haya adquirido y aplica siempre y cuando se cumplan los requisitos establecidos para ser acreedor de este beneficio en cada viaje. Este beneficio no aplica para Beneficiarios mayores de 74 a??os.</u></b></p>
                                            <p><u>Cancelaci??n de un viaje de Crucero antes de su inicio:</u></p>
                                            <p>El Beneficiario deber?? en este caso:</p>
                                            <ul>
                                                        <li>Notificar de inmediato su decisi??n a la naviera por escrito y obtener de ??sta un comprobante que indique en forma inequ??voca la fecha de dicha notificaci??n formal de la imposibilidad de iniciar el viaje de crucero en el barco y fecha originalmente contratados.</li>
                                                        <li>Deber?? adem??s obtener de la naviera las Condiciones Generales de contrataci??n de cruceros, en donde se indique claramente el procedimiento de aplicaciones de las penalidades o cl??usulas penales por cancelaci??n anticipada de un crucero contratado y totalmente pagado.</li>
                                                        <li>Deber?? obtener de la naviera un comprobante que demuestre el monto de la penalidad aplicable a su contrato de crucero en particular y el monto del reembolso si fuere el caso.</li>
                                            </ul>
                                            <p>Una vez obtenida la documentaci??n anterior, deber?? demostrar por escrito a <strong>ORANGE TRAVEL ASSIST</strong> en forma clara y fehaciente la causal o causales que ocasionaron la cancelaci??n de viaje y enviar a la Central de Servicios de Asistencia toda dicha documentaci??n para su eventual comprobaci??n por parte de <strong>ORANGE TRAVEL ASSIST</strong> y eventual reembolso de ser procedente.</p>
                                            <p>Son causas justificadas a los efectos del presente beneficio:</p>
                                            <ol className="list-style-decimal">
                                                        <li>El fallecimiento, accidente o enfermedad grave no preexistente del Beneficiario o familiar en primer grado de consanguinidad (padres, hijos o hermanos) o c??nyuge, entendi??ndose por enfermedad grave una alteraci??n de la salud que, a juicio del Departamento M??dico de la Central de Servicios de Asistencias, imposibilite al Beneficiario para iniciar el viaje en la fecha contratada originalmente.</li>
                                                        <li>La convocatoria como parte, testigo o jurado de un tribunal.</li>
                                                        <li>Los da??os que, por incendio, robo, hurto o por la fuerza de la naturaleza en su residencia habitual o en sus locales profesionales que los hagan inhabitables y justifican ineludiblemente su presencia.</li>
                                                        <li>Cuarentena m??dica que obligue al Beneficiario a mantener dentro de su pa??s de origen.</li>
                                                        <li>Despido laboral comprobado del Beneficiario, con fecha posterior a la contrataci??n del plan de asistencia.</li>
                                                        <li>Convocatoria de emergencia para prestaci??n de servicio militar, m??dico o p??blico.</li>
                                                        <li>Epidemia, cat??strofes naturales o cenizas volc??nicas.</li>
                                                        <li>Si la persona que ha de acompa??ar al Beneficiario en el viaje, entendi??ndose como tal(es) a la(s) persona(s) que compartan la misma habitaci??n de hotel o camarote de crucero con el Beneficiario, o sea(n) familiar(es) de primer grado de consanguinidad (padres, hijos o hermanos) o c??nyuges, tambi??n poseedor(es) de un plan de asistencia en las mismas condiciones que el Beneficiario y dicho(s) acompa??ante(s) se viese(n) obligado(s) a anular el viaje por alguna de las causas enumeradas anteriormente.</li>
                                            </ol>
                                            <p>Adquirido el plan en las condiciones antes indicadas, y de ser aplicable el beneficio, la vigencia del mismo comienza en el momento en que el Beneficiario adquiere su plan de asistencia y finaliza en el momento de inicio de la vigencia del voucher. Este beneficio no aplica para Beneficiarios mayores de 74 a??os.</p>
                                            <h5>Cancelaci??n de viaje por COVID-19</h5>
                                            <p>
                                                        En caso de ser contemplado dentro del voucher, el Beneficiario podr?? cancelar anticipadamente su
                                                        viaje por los siguientes motivos:
                                            </p>
                                            <ol className="list-style-decimal">
                                                        <li>
                                                            En caso de diagn??stico positivo de COVID-19 del Beneficiario, acompa??ante de viaje o familiar en primer grado de consanguinidad.
                                                        </li>
                                            </ol>
                                            <p>
                                                        En todo caso, el Voucher deber?? ser emitido con una antelaci??n m??nima de 14 d??as a la fecha de
                                                        partida, o inicio de vigencia, lo que suceda primero.
                                            </p>
                                            <p>
                                                        <b>
                                                            Nota1: No aplica para Beneficiarios mayores de 65 a??os. No tendr??n cobertura solicitudes de
                                                            Cancelaci??n de viaje, si la misma se llegase a dar por un cierre de fronteras por parte del
                                                            Gobierno de origen o destino. Adicionalmente, si el proveedor hotelero, aerol??nea o cualquier
                                                            otro operador tur??stico le ofrece al Beneficiario la opci??n de dejar abiertas las fechas,
                                                            reprogramar, cr??dito a favor, y entre otras soluciones, aun si el Beneficiario rechaza dicha
                                                            opci??n, no habr?? lugar a reembolso por gastos incurridos.
                                                        </b>
                                                    </p>
                                                    <p>
                                                        <b>
                                                            Nota: Queda excluido de cobertura cualquier evento ocurrido con anterioridad a la emisi??n
                                                            del Plan de Asistencia. En caso de un mismo evento que involucre a m??s de una reserva y
                                                            cualquiera sea la cantidad de Titulares involucrados en el mismo, la responsabilidad m??xima
                                                            de indemnizaci??n de TAGIT por todos los titulares afectados, no ser?? mayor a CUARENTA
                                                            MIL D??LARES NORTEAMERICANOS US$40,000.00 como monto m??ximo global por el mismo
                                                            siniestro. En caso de que la suma de las indemnizaciones a abonar supere los montos
                                                            antedichos, cada indemnizaci??n individual ser?? efectuada a prorrata de la responsabilidad
                                                            m??xima definida en el Voucher.
                                                        </b>
                                                    </p>
                                                    <h5>Sustituci??n de ejecutivo</h5>
                                                    <p>En el caso que el Beneficiario se encontrara en viaje de negocios en el extranjero y fuese internado por una emergencia m??dica grave que le impida proseguir con su cometido profesional, <strong>ORANGE TRAVEL ASSIST</strong> se har?? cargo del pasaje en clase turista, sujeto a disponibilidad de plazas, de la persona que su empresa designe como sustituto y de los gastos de hotel hasta un m??ximo de USD 80 (ochenta d??lares) diarios durante cinco (5) d??as.</p>
                                                    <h5>L??nea de consultas 24 horas</h5>
                                                    <p>Los Beneficiarios de un plan <strong>ORANGE TRAVEL ASSIST</strong>, podr??n pedir a la Central de Servicios de Asistencia, informaciones relativas a obligaciones consulares, sanitarias, tur??sticas y otras concernientes al pa??s de destino. Igualmente estar?? a disposici??n de los pasajeros el servicio conserje de <strong>ORANGE TRAVEL ASSIST</strong> para ayuda con la reserva de hoteles, restaurantes, eventos deportivos, culturales, entre otros.</p>
                                                    <h5>Asistencia concierge</h5>
                                                    <p>El servicio de concierge <strong>ORANGE TRAVEL ASSIST</strong> se encuentra disponible las 24 horas del d??a, los 365 d??as del a??o para asistir a los Beneficiarios en la consecuci??n de informaci??n sobre entradas para espect??culos, arreglos de viaje, renta de veh??culos, reservaciones para obras de teatro y cualquier otra informaci??n que el Beneficiario pueda necesitar en las principales ciudades del mundo. El Beneficiario ser?? responsable por todos los costos y gastos relacionados con la solicitud de los servicios de asistencia concierge; este servicio es netamente informativo.</p>
                                                    <h5>Transmisi??n de mensajes urgentes</h5>
                                                    <p><strong>ORANGE TRAVEL ASSIST</strong> transmitir?? los mensajes urgentes y justificados, relativos a cualquiera de los eventos que son objeto de las prestaciones contempladas en estas condiciones generales.</p>
                                                    <h5>Transferencia de fondos y transferencia de fondos para fianza legal en caso de accidente de tr??nsito</h5>
                                                    <p>Durante el viaje, en caso de necesidad imperiosa e imprevista y contra su previo dep??sito en la oficina de <strong>ORANGE TRAVEL ASSIST</strong>, esta gestionar?? la entrega al Beneficiario en el pa??s donde se encuentre de cantidades hasta el l??mite especificado en estas condiciones generales. Si el Beneficiario fuese encarcelado como consecuencia de un accidente de tr??nsito, <strong>ORANGE TRAVEL ASSIST</strong> gestionar?? el env??o de las cantidades especificadas en estas condiciones generales para hacer frente al pago de la fianza penal, debiendo previamente ser depositado el monto referido en la oficina de <strong>ORANGE TRAVEL ASSIST</strong> por parte de la familia del Beneficiario. El costo asumido por <strong>ORANGE TRAVEL ASSIST</strong> corresponder?? ??nicamente al valor de la transferencia realizada al Beneficiario. Estas coberturas ser??n aplicadas una sola vez, cualquiera que sea el lapso de validez del plan de voucher de asistencia.</p>
                                                    <h5>Asistencia legal por accidente de tr??nsito</h5>
                                                    <p><strong>ORANGE TRAVEL ASSIST</strong> tomar?? a cargo hasta los topes indicados en el plan, los gastos de honorarios que ocasione la defensa civil, criminal o penal del Beneficiario, con motivo de imput??rsele o exculp??rsele la responsabilidad por un accidente de tr??nsito.</p>
                                                    <h5>Compensaci??n por p??rdida de equipaje</h5>
                                                    <p><strong>ORANGE TRAVEL ASSIST</strong> compensar?? al Beneficiario de forma complementaria, hasta el tope especificado en la tabla de beneficios. Para la obtenci??n de este beneficio rigen los siguientes t??rminos y condiciones:</p>
                                                    <ul>
                                                        <li>Que la l??nea a??rea y la Central de <strong>ORANGE TRAVEL ASSIST</strong> hayan sido notificadas del hecho por el Beneficiario antes de abandonar el aeropuerto donde se registr?? la p??rdida siguiendo las instrucciones descritas m??s abajo.</li>
                                                        <li>Que el equipaje se haya extraviado durante su transporte en vuelo regular internacional, este beneficio no aplica cuando la p??rdida se origina en un trayecto de vuelo nacional, ni de vuelos charters o fletados, aviones particulares o militares, o cualquier vuelo que no tenga un itinerario fijo publicado que opera regularmente, ni tampoco cuando la p??rdida se origina en vuelos dom??sticos en el exterior.</li>
                                                        <li>Que el mencionado equipaje haya sido debidamente registrado, etiquetado y despachado en la bodega del avi??n y haya sido debidamente presentado y entregado al personal de la aerol??nea en el despacho del terminal. <strong>ORANGE TRAVEL ASSIST</strong>, no indemnizar?? a los Beneficiarios de un plan, por la p??rdida de equipaje de mano o de cabina o cualquier otro bulto que no haya sido debidamente registrado ante la aerol??nea y haya sido transportado en la bodega del avi??n.</li>
                                                        <li>Que la p??rdida del equipaje haya ocurrido entre el momento en que el mismo fue entregado a personal autorizado de la l??nea a??rea para ser embarcado y el momento en que debi?? ser devuelto al pasajero al finalizar el viaje.</li>
                                                        <li>Que la l??nea a??rea se haya hecho cargo de su responsabilidad por la p??rdida del mencionado equipaje, y haya abonado o pagado al Beneficiario la indemnizaci??n prevista por ella. <strong>ORANGE TRAVEL ASSIST</strong> no podr?? indemnizar al Beneficiario cuando este no haya aun recibido la indemnizaci??n de la aerol??nea.</li>
                                                        <li>No tienen derecho a esta compensaci??n las p??rdidas ocurridas en cualquier tipo de transporte terrestre en el extranjero.</li>
                                                        <li>La compensaci??n por p??rdida total del equipaje se limitar?? a un solo bulto entero y completo faltante en forma definitiva y a un solo Beneficiario damnificado. En el caso de que el bulto faltante estuviera a nombre de varios Beneficiarios, la compensaci??n ser?? prorrateada entre los mismos, siempre que incluya los correspondientes n??meros de billetes de cada uno, as?? como el n??mero de voucher. No se indemnizan faltantes parciales de las maletas.</li>
                                                        <li>En caso que la l??nea a??rea ofreciera al Beneficiario como indemnizaci??n la posibilidad de optar entre percibir un valor en dinero o uno o m??s pasajes u otro medio de compensaci??n, <strong>ORANGE TRAVEL ASSIST</strong> proceder?? a abonar al Beneficiario la compensaci??n econ??mica por extrav??o de equipaje, una vez que dicha opci??n sea ejercida.</li>
                                                    </ul>
                                                    <p>Es importante anotar que, en los casos de extrav??o de equipaje, los directos responsables de las mismas son las aerol??neas o empresas transportadoras, por lo tanto, <strong>ORANGE TRAVEL ASSIST</strong> intervendr?? en calidad de intermediario facilitador entre la aerol??nea y o la compa????a transportadora y el pasajero, y por lo tanto no podr?? ser considerada ni tomada como responsable directa de dicha p??rdida, ni de la b??squeda del equipaje. Las aerol??neas se reservan el derecho de aceptar o no los reclamos a <strong>ORANGE TRAVEL ASSIST</strong>, y en t??rminos generales pueden exigir que las reclamaciones sean puestas directamente por los pasajeros y no permitir la intermediaci??n de <strong>ORANGE TRAVEL ASSIST</strong>.</p>
                                                    <p>Las indemnizaciones por conceptos de p??rdida total de equipaje se abonar??n ??nicamente en el pa??s donde se compr?? la asistencia <strong>ORANGE TRAVEL ASSIST</strong>.
                                                    </p>
                                                    <p>Al regresar a su pa??s de origen, el Beneficiario deber?? presentar en las oficinas de <strong>ORANGE TRAVEL ASSIST</strong> la siguiente documentaci??n:</p>
                                                    <ul>
                                                        <li>Formulario P.I.R. (Reclamo por P??rdida de Equipaje) Original</li>
                                                        <li>Documento o Pasaporte</li>
                                                        <li>Voucher de asistencia</li>
                                                        <li>Copia original del recibo de la indemnizaci??n de la l??nea a??rea (Cheque, comprobante de pago de la misma), pasajes a??reos.</li>
                                                    </ul>
                                                    <p><strong>ORANGE TRAVEL ASSIST</strong> solo podr?? proceder al reembolso por concepto de indemnizaci??n por p??rdida de equipaje ??nicamente despu??s de que la Aerol??nea responsable de la p??rdida haya debidamente indemnizado al Beneficiario. No se podr?? indemnizar al Beneficiario sin el comprobante de pago de la aerol??nea.</p>
                                                    <p><b>NOTA: La indemnizaci??n al Beneficiario ser?? complementaria a la abonada por la l??nea a??rea conforme a lo indicado en el voucher correspondiente al plan <strong>ORANGE TRAVEL ASSIST</strong> adquirido. En caso de indemnizaci??n complementaria, el importe de la misma se determinar?? como la diferencia entre lo abonado por la l??nea a??rea y el monto que se determine conforme a lo estipulado en el plan adquirido, y siempre hasta el l??mite m??ximo indicado por este concepto en el voucher. No ser?? v??lida compensaci??n alguna si la indemnizaci??n de la compa????a a??rea iguala o supera el l??mite m??ximo establecido en el voucher para este concepto. Por otra parte, la compensaci??n por p??rdida de equipaje aplica por bulto o carga y no por persona.</b></p>
                                                    <h5>Compensaci??n por demora en devoluci??n de equipaje</h5>
                                                    <p><strong>ORANGE TRAVEL ASSIST</strong> reintegrar?? al Beneficiario cuyo plan de asistencia as?? lo establezca, mediante la presentaci??n de los comprobantes originales de compras de elementos de primera necesidad, realizadas durante el lapso de demora en la entrega de su equipaje. Las compras deber??n ser hechas despu??s de haber sido realizado el reclamo pertinente con la aerol??nea, as?? como de haber dado aviso a la Central de Servicios de Asistencia y proporcionado el n??mero PIR correspondiente otorgado por la aerol??nea. Esta prestaci??n se brindar?? ??nicamente si el equipaje no es localizado dentro de las seis (6) horas contadas a partir del arribo del vuelo. El plazo de 6 horas se refiere exclusivamente al tiempo transcurrido hasta la localizaci??n del equipaje. El lapso posterior hasta la entrega f??sica del mismo por parte de la aerol??nea est?? fuera de la responsabilidad de <strong>ORANGE TRAVEL ASSIST</strong> y por tanto no ser?? tenido en cuenta en el c??mputo de las 6 horas.</p>
                                                    <p>Si la demora o el extrav??o del equipaje ocurren en vuelos de conexi??n, en un vuelo de regreso al pa??s de origen y/o de residencia habitual del Beneficiario, no se otorgar?? compensaci??n alguna.</p>
                                                    <p>En caso tal que el equipaje sea declarado como perdido totalmente por parte de la compa????a a??rea, se deducir?? del monto a reembolsar por concepto de ???Compensaci??n por p??rdida de equipaje???, el total reembolsado por los gastos del presente beneficio.</p>
                                                    <p>Este servicio opera por reembolso previa autorizaci??n de la Central de Servicios de Asistencia y regido por los tiempos establecidos en los tr??mites de reembolso.</p>
                                                    <p>En caso de demora de equipaje, siga estas instrucciones:</p>
                                                    <ol>
                                                        <li>Inmediatamente constatada la falta de equipaje dir??jase a la compa????a a??rea o persona
                                                        responsable dentro del mismo recinto al que llegan los equipajes. Solicite y complete el
                                                        formulario P.I.R Property Irregularity Report.</li>
                                                        <li>Antes de abandonar el aeropuerto comun??quese telef??nicamente con la Central de
                                                        Asistencia a efectos de notificar el extrav??o de su equipaje.</li>
                                                    </ol>
                                                    <p>Al regresar a su pa??s de origen debe presentar en las oficinas la siguiente documentaci??n:</p>
                                                    <ol>
                                                        <li>Formulario P.I.R</li>
                                                        <li>Comprobantes de pago en raz??n de gastos de art??culos de primera necesidad (elementos
                                                        de higiene y ropa de primera necesidad).</li>
                                                        <li>Itinerario original de vuelo</li>
                                                    </ol>
                                                    <p><b>Nota: la compensaci??n por demora en devoluci??n de equipaje aplica por bulto o carga y no por persona.</b></p>
                                                    <h5>Compensaci??n por da??o de equipaje</h5>
                                                    <p>Si las maletas del Beneficiario sufrieran alg??n tipo de da??o que deje expuestos los elementos que se encuentran en su interior, as?? como la violaci??n de sus cerraduras con los mismos efectos, <strong>ORANGE TRAVEL ASSIST</strong> otorgar?? al beneficiario la suma indicada seg??n los topes del producto contratado.</p>
                                                    <p>Para hacer efectivo este beneficio debe verificarse que la rotura haya ocurrido entre el momento en que el equipaje fue embarcado y el momento en que deba ser entregado al Beneficiario al desembarcar, debe haber sido informado a la Central de Servicios de Asistencias de <strong>ORANGE TRAVEL ASSIST</strong> dentro de las 24 horas de ocurrido el siniestro y el Beneficiario deber?? presentar a <strong>ORANGE TRAVEL ASSIST</strong> el comprobante de denuncia otorgado por la l??nea a??rea o naviera y los comprobantes originales por el arreglo de las roturas o reposici??n del equipaje.</p>
                                                    <p><b>Nota: la compensaci??n por da??o de equipaje aplica por bulto o carga y no por persona.</b></p>
                                                    <h5>Indemnizaci??n de vuelo demorado o cancelado</h5>
                                                    <p>Si el vuelo del Beneficiario fuera demorado por m??s de seis (6) horas consecutivas a la programada originalmente, y siempre y cuando no exista otra alternativa de transporte durante ellas, <strong>ORANGE TRAVEL ASSIST</strong> reintegrar?? hasta el tope de cobertura convenido en raz??n de gastos de hotel, comidas y comunicaciones realizadas durante la demora y contra la presentaci??n de sus comprobantes originales, acompa??ados de un certificado de la compa????a a??rea reflejando la demora o cancelaci??n sufrida por el vuelo del Beneficiario.</p>
                                                    <p>Este beneficio no se brindar?? si el vuelo fuese en un aeropuerto ubicado en las proximidades de la ciudad de residencia habitual as?? la distancia sea superior a 100 kms o dentro de la ciudad de residencia habitual del Beneficiario; tampoco si el Beneficiario viajara con un pasaje sujeto a disponibilidad de espacio. Este servicio no se aplica si la cancelaci??n se debe a la quiebra y/o cesaci??n de servicios de la l??nea a??rea.</p>
                                                    <h5>Continuaci??n de viaje / crucero</h5>
                                                    <p><strong>ORANGE TRAVEL ASSIST</strong> se har?? cargo del costo de un boleto en clase econ??mica, de un solo sentido, desde el puerto de embarque hasta el siguiente puerto de escala del crucero contratado, si el beneficiario inicialmente se perdi?? la salida programada del crucero debido a un vuelo de conexi??n retardada por m??s de (6) horas de la hora programada. Este beneficio se paga como reembolso, previa presentaci??n de los recibos apropiados y el informe de la compa????a a??rea (PIR).</p>
                                                    <h5>Deportes amateur</h5>
                                                    <p>Proporciona cobertura de los deportes ecuestres, deportes de nieve, deportes de equipo, deportes
                                                    de fuerza, deportes de invierno, las artes marciales, campeonatos de tiro el deporte practicado en
                                                    rangos reguladas; deportes acu??ticos, esqu??, surf, kitesurf recreativa, buceo recreativo (hasta 15
                                                    metros), nataci??n, patinaje, snowboard, cuando se practica como actividades de aficionados. </p>
                                                    <b>Nota: Queda excluida de cobertura cualquier lesi??n causada por pr??cticas profesionales y/o
                                                    de torneos, competencias, etc.</b>
                                                    <h5>Asistencia psicol??gica</h5>
                                                    <p>Tel??fono de apoyo psicol??gico 24 horas para Beneficiarios que, a causa de repatriaci??n sanitaria, fallecimiento de un familiar o cat??strofe natural hayan sido afectados durante su viaje. Este servicio se presta como apoyo psicol??gico en momentos que pueden generar fuerte tensi??n emocional, en ning??n caso podr?? sustituir la atenci??n directa del Psic??logo o Psiquiatra de los Beneficiarios, por lo que no debe utilizarse en ning??n caso por parte de los mismos para establecer un diagn??stico o auto-medicarse, debiendo consultar con los referidos profesionales en cada caso particular.</p>
                                                    <h5>Norton Mobile Security</h5>
                                                    <p>Algunos planes de larga estad??a y Multi-viaje incluyen una membres??a por un a??o para la aplicaci??n Norton Mobile Security, que proteger?? los dispositivos contra las amenazas digitales, realizar controles para proteger la privacidad, localizar el dispositivo con geo-localizaci??n exacta y en directo, entre otras indispensables herramientas que permitir??n al beneficiario para disfrutar de todo el potencial de los dispositivos m??viles.</p>
                                                    <p><b>Nota: este beneficio s??lo aplica para los planes larga estad??a, estudiantiles y anual multiviajes.</b></p>
                                                    <h5>Garant??a de regreso</h5>
                                                    <p>En caso que el Beneficiario haya sido hospitalizado debido a un accidente o enfermedad y se haya visto obligado a cambiar la fecha de su tiquete de avi??n de regreso a su pa??s de origen, <strong>ORANGE TRAVEL ASSIST</strong> se har?? cargo del pago de las multas pendientes para el cambio de fecha del tiquete a??reo, o incluso la compra de nuevo tiquete de avi??n en clase econ??mica.</p>
                                                    <p>En caso tal que el Beneficiario lo necesite y, cuando sea posible, <strong>ORANGE TRAVEL ASSIST</strong> proporcionar?? el cambio del vuelo, cubriendo directamente los costos de dicho cambio. De lo contrario, <strong>ORANGE TRAVEL ASSIST</strong> har?? el reembolso de dichos gastos al cliente, mediante los comprobantes de pago a la compa????a a??rea.</p>
                                                    <p>Esta garant??a s??lo es v??lida en caso que la hospitalizaci??n haya sido organizada por la Central de Servicios de Asistencia y la continuaci??n de esta internaci??n haya sido indicada por los m??dicos asistentes y por el departamento m??dico.</p>
                                                    <h5>Orientaci??n m??dica telef??nica/videoconferencia</h5>
                                                    <p>Los Beneficiarios de <strong>ORANGE TRAVEL ASSIST</strong> podr??n recibir recomendaciones a trav??s de conferencia telef??nica y/o videoconferencia (sujeto a disponibilidad) con un profesional de la salud que brindar?? orientaci??n sobre qu?? hacer para aliviar sus s??ntomas permaneciendo en su hogar, o se recomendar?? ser asistido en centros de urgencias o salas de emergencias, de acuerdo a la severidad de los s??ntomas que describen los mismos.</p>
                                                    <h5>Segunda opini??n m??dica</h5>
                                                    <p>Cuando durante un viaje al exterior se diagnosticara al Titular una enfermedad como de pron??stico fatal, incurable o que compromete gravemente su calidad de vida, o bien cuando el tratamiento propuesto conlleve un elevado riesgo vital, el mismo podr?? solicitar a trav??s de la Central de Asistencias de <strong>ORANGE TRAVEL ASSIST</strong> una segunda opini??n m??dica en el extranjero para que un profesional m??dico estudie la informaci??n procedente de su historia cl??nica y emita el informe respectivo, que ser?? enviado al solicitante. La segunda opini??n m??dica se realiza con los siguientes fines:</p>
                                                    <ul>
                                                        <li>Confirmaci??n diagn??stica de enfermedad degenerativa progresiva sin tratamiento curativo del sistema nervioso central, de una enfermedad neopl??sica maligna, excepto c??nceres de piel que no sean melanoma.</li>
                                                        <li>Confirmaci??n de alternativas terap??uticas en todas las neoplasias malignas, incluyendo c??nceres de piel, tanto al inicio, como a la recidiva o en el momento de aparici??n de met??stasis.</li>
                                                        <li>Propuesta terap??utica para enfermedad coronaria avanzada de angioplastia m??ltiple o simple frente a cirug??a card??aca coronaria convencional.</li>
                                                        <li>Propuesta de cirug??a coronaria convencional en situaci??n de riesgo, con o sin circulaci??n extracorp??rea, frente a revascularizaci??n transmioc??rdica con l??ser, neoangiog??nesis o trasplante.</li>
                                                        <li>En cardiopat??a cong??nita con indicaci??n de cierre o ampliaci??n de defecto cong??nito por t??cnica de cardiolog??a intervencionista frente a cirug??a convencional.</li>
                                                        <li>Confirmaci??n diagn??stica de tumoraci??n cerebral o raquimedular.</li>
                                                        <li>Propuesta de tratamiento quir??rgico en escoliosis de grado mayor idiop??tica o no idiop??tica.</li>
                                                        <li>Confirmaci??n de diagn??stico de enfermedad rara. Se entender?? por enfermedad rara: aquella enfermedad con peligro de muerte o invalidez cr??nica, incluidas las de origen gen??tico, que tiene una prevalencia baja, es decir, menor de cinco casos por cada diez mil habitantes.</li>
                                                        <li>Confirmaci??n de alternativas terap??uticas en todas las neoplasias malignas de piel, tanto al inicio como a la recidiva o en el momento de aparici??n de la met??stasis.</li>
                                                        <li>Confirmaci??n diagn??stica de par??lisis cerebrales infantiles.</li>
                                                        <li>Confirmaci??n de alternativas terap??uticas en epilepsia refractaria a tratamiento.</li>
                                                        <li>Confirmaci??n de intervenci??n quir??rgica en los casos de accidentes cerebrovasculares y lesiones tromboemb??licas arteriales como alternativa a otro tratamiento.</li>
                                                        <li>Confirmaci??n diagn??stica o de alternativas terap??uticas sobre patolog??as oft??lmicas que provoquen disminuci??n de la agudeza visual ??ptima igual o inferior a 0,1 bilateral (Escala de Schnellen) o disminuci??n del campo visual bilateral hasta ser igual o inferior a 10??.</li>
                                                        <li>Confirmaci??n de alternativa terap??utica quir??rgica en el aneurisma de aorta.</li>
                                                        <li>Confirmaci??n de alternativas terap??uticas quir??rgicas en cardiopat??a isqu??mica.</li>
                                                        <li>Propuesta de tratamiento quir??rgico en patolog??as de la columna vertebral con afectaci??n medular y, en su caso, afectaci??n radicular que afecte gravemente la calidad de vida de los pacientes previamente intervenidos por alguno de los siguientes procedimientos:
                                                            <ul>
                                                                <li>Reapertura de sitio de laminectom??a.</li>
                                                                <li>Otra exploraci??n y descompresi??n del canal espinal.</li>
                                                                <li>Excisi??n o destrucci??n de lesi??n de m??dula espinal/meninges espina.</li>
                                                                <li>Excisi??n o destrucci??n de disco intervertebral no espec??fica.</li>
                                                                <li>Artrodesis vertebral.</li>
                                                                <li>Refusi??n vertebral.</li>
                                                                <li>Fusi??n vertebral circunferencial, acceso con incisi??n ??nica.</li>
                                                                <li>Inserci??n de dispositivo de fusi??n vertebral intersom??tico.</li>
                                                            </ul>
                                                        </li>
                                                        <li>Propuesta de tratamiento quir??rgico en patolog??as del aparato locomotor que comprometa gravemente la calidad de vida de los pacientes previamente intervenidos por alguno de los siguientes procedimientos:
                                                            <ul>
                                                                <li>Sustituci??n total de cadera.</li>
                                                                <li>Sustituci??n total de rodilla.</li>
                                                            </ul>
                                                        </li>
                                                        <li>Confirmaci??n de alternativas terap??uticas en pacientes incluidos en protocolo de trasplantes.</li>
                                                    </ul>
                                                    <p>Este Beneficio podr?? ser usado una ??nica vez dentro de la vigencia del voucher, sin importar la duraci??n del mismo. Se incluyen los gastos de env??o de la historia cl??nica y el costo cobrado por el(los) profesional(es) m??dico(s) para estudiar el caso.</p>
                                            </div>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={10} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={10} >
                                            Beneficios adicionales de compra opcional por el beneficiario
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={10}>
                                        <Card.Body>
                                            <div>
                                            <p>Los Beneficiarios tendr??n la opci??n de adquirir adicionalmente, pero no por separado, beneficios adicionales a los establecidos para cada plan de asistencia en particular de <strong>ORANGE TRAVEL ASSIST</strong>, mediante el pago de un complemento al precio del plan original, todo ello de acuerdo con lo establecido y precios de la oferta p??blica en la plataforma web de <strong>ORANGE TRAVEL ASSIST</strong>.</p>
                                                    <p><b><u>Los beneficios adicionales o upgrades s??lo podr??n ser emitidos para la categor??a viajes por d??as.</u></b></p>
                                                    <h5>Upgrade de Cancelaci??n Multi Causa</h5>
                                                    <p>En aquellos casos que el Beneficiario en forma expl??cita contrate el beneficio de protecci??n de cancelaci??n multi causa que ofrece <strong>ORANGE TRAVEL ASSIST</strong>, se otorgar?? cobertura hasta el monto espec??ficamente contratado y dicho beneficio deber?? constar expresamente en el voucher del Beneficiario. Este beneficio es ??nicamente v??lido para viajes internacionales.</p>
                                                    <p><strong>ORANGE TRAVEL ASSIST</strong> cubrir?? hasta el tope de cobertura seg??n el plan contratado las penalidades por cancelar anticipadamente un viaje conocido como tours, paquetes tur??sticos, excursiones, tiquetes a??reos y cruceros que hayan sido organizadas por un tour operador profesional debidamente acreditado en el destino de dicho viaje. Para ser acreedor de este beneficio el Beneficiario del voucher deber??:</p>
                                                    <ol className="list-style-decimal">
                                                        <li>Contratar el plan de asistencia, antes o hasta un m??ximo de 72 horas posteriores al primer pago de los servicios tur??sticos que pudieran cancelarse.</li>
                                                        <li>Dar aviso a la central de asistencia en un m??ximo de 24 horas luego de ocurrido el evento que motiva la cancelaci??n. Se tomar?? como base de c??lculo de la indemnizaci??n, la fecha de ocurrencia de la causa de Cancelaci??n y no la fecha de aviso del Beneficiario a <strong>ORANGE TRAVEL ASSIST</strong>. Al mismo tiempo, el Beneficiario deber?? cancelar con el organismo de turismo Crucero, Agencia de viaje, Tour Operador, etc. su viaje, para no incrementar la penalidad que ese mismo organismo le vaya a aplicar.</li>
                                                        <li>Presentar, hasta 30 d??as calendario despu??s del d??a de finalizaci??n de la vigencia del voucher, toda la documentaci??n que <strong>ORANGE TRAVEL ASSIST</strong> considere para evaluar la cobertura de este beneficio incluyendo, pero no limitando a: Documento donde se demuestre de forma clara y fehaciente el motivo de cancelaci??n del viaje, cartas de los respectivos prestadores del servicio, facturas y recibos de pago. </li>
                                                        <li>En caso de planes ???Anuales Multiviaje???, este beneficio aplicar?? una sola vez y corresponde al viaje inicial del pasajero, no podr?? ser tenido como aplicable para todos los viajes que pueda realizar el Beneficiario durante la vigencia total del voucher.</li>
                                                        <li>El Beneficiario tiene hasta treinta (30) d??as continuos a partir de la fecha de sucedido el
                                                        evento para presentar la documentaci??n completa y respaldos necesarios para iniciar el
                                                        proceso del reembolso. Despu??s de ese plazo, no se aceptar??n documentos para tramitar
                                                        ning??n reembolso.</li>
                                                    </ol>
                                                    <p>Son causas justificadas a los efectos del presente beneficio y contempladas al 100% del tope marcado en el voucher:</p>
                                                    <ol className="list-style-decimal">
                                                        <li>El fallecimiento, accidente o enfermedad grave no preexistente del Beneficiario o familiar en primer grado de consanguinidad c??nyuge, padres, hijos, hermanos, entendi??ndose por enfermedad grave una alteraci??n de la salud que, a juicio del Departamento M??dico de la Central de Asistencia, imposibilite al Beneficiario para iniciar el viaje en la fecha contratada originalmente. </li>
                                                        <li>La convocatoria como parte, testigo o jurado de un tribunal.</li>
                                                        <li>Los da??os que, por incendio, robo, hurto o por la fuerza de la naturaleza en su residencia habitual o en sus locales profesionales que los hagan inhabitables y justifican ineludiblemente su presencia.</li>
                                                        <li>Cuarentena m??dica como consecuencia de suceso accidental.</li>
                                                        <li>Despido laboral comprobado, con fecha posterior a la contrataci??n de asistencia.</li>
                                                        <li>Convocatoria de emergencia para prestar servicio militar, m??dico o p??blico.</li>
                                                        <li>Por epidemia, desastre natural o cenizas volc??nicas. En el caso de los productos Crucero no ser?? contemplada como una de las causas justificadas para acceder a este beneficio, las cancelaciones ocasionadas por emanaciones de cenizas volc??nicas.</li>
                                                        <li>Si la persona que ha de acompa??ar al Beneficiario en el viaje, entendi??ndose como tales las personas que compartan la misma habitaci??n de hotel con el Beneficiario, o cabina de crucero, o sean familiares de primer grado de consanguinidad c??nyuge, padres, hijos o hermanos tambi??n poseedor es de un Plan de Asistencia en las mismas condiciones que el Beneficiario y dichos acompa??antes se viesen obligados a anular el viaje por alguna de las causas enumeradas anteriormente.</li>
                                                        <li>Las agudizaciones imprevistas de enfermedades preexistentes. En cuyo caso el pasajero con dicha enfermedad preexistente deber?? haber permanecido estable, sin episodios, durante un periodo m??nimo de 6 meses previos al viaje. <strong>ORANGE TRAVEL ASSIST</strong> se reserva el derecho de solicitar la historia cl??nica original del pasajero previa a la fecha en que ??ste manifiesta la agudizaci??n de la enfermedad. </li>
                                                        <li>Las complicaciones de embarazos.</li>
                                                        <li>Cancelaci??n de boda.</li>
                                                        <li>Entrega de ni??o en adopci??n</li>
                                                        <li>Parto de emergencia</li>
                                                    </ol>
                                                    <p>Son causas justificadas a los efectos del presente beneficio y contempladas al 70% del tope marcado en el voucher:</p>
                                                    <ol className="list-style-decimal" start="14">
                                                        <li>Secuestro del Beneficiario o familiares directos siempre y cuando sea comprobable, y de conocimiento p??blico.</li>
                                                        <li>Cancelaci??n de vacaciones por disposici??n de la empresa</li>
                                                        <li>Cambio de trabajo.</li>
                                                        <li>No aprobaci??n de la Visa para ingresar al pa??s de destino. Esta cobertura es v??lida si la
                                                        compra del Suplemento se realiza por lo menos 72 horas antes de la cita para la obtenci??n
                                                        de la visa ante la embajada respectiva. No aplica para los costos de los tr??mites consulares
                                                        (costo de la visa).</li>
                                                    </ol>
                                                    <p>Adquirido el plan en las condiciones antes indicadas, y de ser aplicable el beneficio, la vigencia del mismo comienza en el momento en que el Beneficiario adquiere su plan de asistencia y finaliza en el momento de inicio de la vigencia del voucher. Este beneficio no aplica para Beneficiarios mayores de 74 a??os.</p>
                                                    <h4>Cancelaci??n de viaje por COVID-19</h4>
                                                    <p>
                                                        En caso de ser contemplado dentro del voucher, el Beneficiario podr?? cancelar anticipadamente su
                                                        viaje por los siguientes motivos:
                                                    </p>
                                                    <ol className="list-style-decimal">
                                                        <li>
                                                            En caso de diagn??stico positivo de COVID-19 del Beneficiario, acompa??ante de viaje o familiar en primer grado de consanguinidad.
                                                        </li>
                                                    </ol>

                                                    <p>
                                                        En todo caso, el Voucher deber?? ser emitido con una antelaci??n m??nima de 14 d??as a la fecha de
                                                        partida, o inicio de vigencia, lo que suceda primero.
                                                    </p>

                                                    <p>
                                                        <b>
                                                            Nota1: No aplica para Beneficiarios mayores de 65 a??os. No tendr??n cobertura solicitudes de
                                                            Cancelaci??n de viaje, si la misma se llegase a dar por un cierre de fronteras por parte del
                                                            Gobierno de origen o destino. Adicionalmente, si el proveedor hotelero, aerol??nea o cualquier
                                                            otro operador tur??stico le ofrece al Beneficiario la opci??n de dejar abiertas las fechas,
                                                            reprogramar, cr??dito a favor, y entre otras soluciones, aun si el Beneficiario rechaza dicha
                                                            opci??n, no habr?? lugar a reembolso por gastos incurridos.
                                                        </b>
                                                    </p><br /><br />
                                                    <b>Nota: Queda excluido de cobertura cualquier evento ocurrido con anterioridad a la emisi??n
                                                    del Plan de Asistencia. En caso de un mismo evento que involucre a m??s de una reserva y
                                                    cualquiera sea la cantidad de Titulares involucrados en el mismo, la responsabilidad m??xima
                                                    de indemnizaci??n de UNSITER por todos los titulares afectados, no ser?? mayor a CUARENTA
                                                    MIL D??LARES NORTEAMERICANOS US$40,000.00 como monto m??ximo global por el mismo
                                                    siniestro. En caso de que la suma de las indemnizaciones a abonar supere los montos
                                                    antedichos, cada indemnizaci??n individual ser?? efectuada a prorrata de la responsabilidad
                                                    m??xima definida en el Voucher.</b>

                                                    <br />
                                                    <h5>Upgrade futura mam??</h5>
                                                    <p>Toda persona embarazada que desee comprar un plan de asistencia de <strong>ORANGE TRAVEL ASSIST</strong>, lo podr?? hacer mediante el pago de un monto adicional. ??ste beneficio se puede vender para personas embarazadas que tengan hasta m??ximo 32 semanas de gestaci??n. El beneficio aplica b??sicamente para las emergencias que se presenten durante el viaje, incluyendo controles de emergencia, ecograf??as de urgencia, asistencias m??dicas por enfermedades ocasionadas por su situaci??n de embarazo, partos de emergencia por enfermedad o accidente que ponga en riesgo la vida de la madre o del hijo, abortos o cualquier tipo y cualquier asistencia m??dica derivada de la situaci??n de embarazo. Esta prestaci??n solo tendr?? una vigencia m??xima de 30 d??as, contados a partir del inicio del viaje al exterior.</p>
                                                    <p>Exclusiones particulares a este beneficio:</p>
                                                    <ol className="list-style-alpha">
                                                        <li>Controles, ecograf??as, consultas m??dicas en general, estudios m??dicos, etc., que sean parte de los controles rutinarios del proceso de embarazo y no sean de emergencia. Asimismo, todas las complicaciones resultantes durante y despu??s del embarazo.</li>
                                                        <li>Partos y ces??reas de curso normal y en t??rmino.</li>
                                                        <li>Gastos m??dicos relacionados con el reci??n nacido.</li>
                                                        <li>Cuando se compruebe que el motivo del viaje es para atender su parto en el exterior.</li>
                                                        <li>Cuando se compruebe que la venta del voucher se realiz?? posterior a la semana 32 de embarazo</li>
                                                    </ol>
                                                    <p><b>NOTA: el l??mite de edad para acceder al beneficio de futura mam?? es m??nimo de 19 a??os de edad hasta m??ximo 45 a??os de edad.</b></p>
                                                    <h5>Upgrade Deportes</h5>
                                                    <p><strong>ORANGE TRAVEL ASSIST</strong> se har?? cargo de los costos de atenci??n resultantes de accidentes ocurridos de la pr??ctica recreativa o en competencia profesional (hasta el tope de su cobertura m??dica contratada sin exceder USD 100.000) de los siguientes deportes:</p>
                                                    <ol className="list-style-decimal">
                                                        <li><b>Categor??a 2:</b> Esqu?? acu??tico, f??tbol, ciclismo de velocidad en pista, curling, patinaje art??stico sobre hielo, canojate en canales ingleses, buceo aut??nomo (hasta 30 metros m??ximo), marat??n, gimnasia art??stica, pony trekking, parascending, roller hockey, cabalgata libre, patinaje en hielo, hockey sobre c??sped, canotaje niveles 3 y 4, pesca con anzuelo en aguas costeras profundas.</li>
                                                        <li><b>Categor??a 3:</b> Artes marciales, esqu??, f??tbol gal??s, f??tbol americano, hockey sobre hielo, patinaje de velocidad sobre hielo, patinaje de velocidad sobre pista corta, tobogganing, ciclomonta??ismo, monta??ismo, bobsleigh, alpinismo, roller derby, heli-skiing, salto ecuestre, carrera de caballos, competencia de equitaci??n, gimnasia en trampol??n, rafting niveles 4 y 5.</li>
                                                        <li><b>Categor??a 4:</b> Paracaidismo, parapente, esqu?? acrob??tico, esqu?? alpino, esqu?? de fondo, luge, esqu?? fuera de pistas, rafting por encima de nivel 5, canotaje nivel 5, alpinismo en monta??a de hielo, motociclismo, automovilismo, rugby, BMX.</li>
                                                    </ol>
                                                    <p><b>NOTA: el l??mite de edad para los deportes extremos en cualquier categor??a es de m??nimo 15
                                                    a??os y m??ximo 65 a??os de edad.</b></p>
                                                    <h5>Upgrade de asistencia m??dica por enfermedad preexistente</h5>
                                                    <p><u>El upgrade por enfermedad preexistente s??lo cubrir?? el 30% de la cobertura m??dica, sin exceder USD 30,000.</u></p>
                                                    <p>Si el beneficiario padeciera de una enfermedad preexistente o cr??nica al inicio de su viaje al exterior, aun cuando no fuera de su conocimiento, como se ha establecido en estas Condiciones Generales, <strong>ORANGE TRAVEL ASSIST</strong> queda autom??ticamente exenta de prestar servicios o asistencias a su cargo y con base al plan de asistencia adquirido. No obstante, y en forma excepcional y solo en aquellos casos que as?? lo establezcan expresamente, <strong>ORANGE TRAVEL ASSIST</strong> asumir?? los cargos por asistencia m??dica por enfermedad preexistente o cr??nica a favor del beneficiario hasta un m??ximo del monto determinado en el respectivo plan adquirido. En estos casos <strong>ORANGE TRAVEL ASSIST</strong> reconocer?? la primera consulta cl??nica en la que se determine la preexistencia de la enfermedad hasta por las cantidades que se determinan en la Tabla de Resumen de Beneficios respectiva.</p>
                                                    <p>Episodio agudo o evento no predecible, descompensaci??n de enfermedades cr??nicas y / o preexistentes conocidas, oculto o previamente asintom??tica. Esta cobertura se proporciona exclusivamente para la atenci??n m??dica primaria en el episodio agudo, o en caso de no predecible, con la cobertura superior especificado por el plan contratado, la emergencia debe requerir la asistencia durante el viaje y no puede aplazarse hasta el retorno al pa??s de residencia, el Centro de Gesti??n de Emergencias se reserva el derecho de decidir el tratamiento m??s adecuado entre los propuestos por el personal m??dico y / o la repatriaci??n a su pa??s de residencia. La repatriaci??n ser?? una soluci??n en los casos en los que los tratamientos requiere evoluci??n a largo tiempo, cirug??as programadas o cirug??as no urgentes, el beneficiario est?? obligado a aceptar esta soluci??n, perdiendo en caso de rechazo de la soluci??n de todos los beneficios que ofrece el plan de asistencia.</p>
                                                    <p>Se excluye de este beneficio el inicio o la continuaci??n de tratamientos, procedimientos de diagn??stico, de investigaci??n, o conducta diagn??stica y terap??utica, que no est??n relacionados con el episodio agudo y no previsto.</p>
                                                    <p>Se excluye de esta cobertura toda enfermedad relacionada con la transmisi??n sexual, incluyendo, pero no limitando a la s??filis, gonorrea, herpes genital, clamidia, el virus del papiloma humano tricomonas vaginalis, tricomoniasis, virus de la inmunodeficiencia humana (VIH), el s??ndrome de inmunodeficiencia adquirida (SIDA), entre otros.</p>
                                                    <p>No se trata en cualquiera de nuestros planes, procedimientos de di??lisis, trasplantes, oncolog??a y tratamiento psiqui??trico, aud??fonos, anteojos, lentes de contacto, puentes dentales, marcapasos, desfibriladores implantables, respiradores para pacientes externos, dispositivos implantables, equipo desechable espec??fica, etc. enfermedades causadas por la ingesti??n de drogas, narc??ticos, medicamentos que se toman de forma fiable sin receta, alcoholismo, etc.</p>
                                                    <p><b>Nota: Este beneficio no cubrir?? por ning??n motivo el seguimiento o continuaci??n de tratamientos iniciados durante la vigencia del primer voucher de un pasajero que haya decidido renovar su plan de asistencia; adem??s la cobertura no se podr?? exceder USD 30,000.</b></p>
                                                    <p>Obligaciones del Beneficiario:</p>
                                                    <ol className="list-style-decimal">
                                                        <li>El Beneficiario deber?? seguir todas las instrucciones m??dicas dadas por el m??dico tratante asignado por <strong>ORANGE TRAVEL ASSIST</strong> y tomar todos los medicamentos como forma prescrita y necesaria.</li>
                                                        <li>Si el Beneficiario est?? interesado en la contrataci??n de un plan que incluye la cobertura de emergencia para preexistente condici??n m??dica <strong>ORANGE TRAVEL ASSIST</strong>, y sufre alguna(s) de las siguientes condiciones: cualquier tipo de c??ncer, enfermedades del coraz??n, enfermedad pulmonar cr??nica y / o enfermedad hep??tica cr??nica , el Beneficiario debe consultar a su m??dico personal en su pa??s de origen antes de iniciar el viaje y obtener una confirmaci??n por escrito de que est??n en condiciones de viajar por todos los d??as previstos, el destino deseado y la condici??n no es un inconveniente para todas las actividades programadas.</li>
                                                        <li>El Beneficiario no podr?? iniciar el viaje despu??s de recibir un diagn??stico terminal.</li>
                                                        <li>Para poder acceder a esta cobertura el beneficiario deber?? haber estado estable por m??s de 12 meses.</li>
                                                    </ol>
                                                    <p>En caso de que se determine que el motivo del viaje fue el tratamiento en el extranjero por una afecci??n cr??nica o preexistente, el Centro de Manejo de Emergencias denegar?? la cobertura.</p>
                                                    <p><b>Nota: el l??mite de edad para acceder al beneficio de asistencia m??dica por enfermedad preexistente es m??ximo 74 a??os de edad.</b></p>


                                                    <h5>Upgrade por Coronavirus</h5>

                                                    <p>En aquellos casos que el Beneficiario en forma expl??cita contrate el upgrade por gastos referentes al
                                                    coronavirus, tendr?? el acceso a los siguientes beneficios:
                                                    </p>
                                                    <ol className="list-style-decimal">
                                                        <li>
                                                            Gastos de Hotel y alimentaci??n hasta por 15 d??as
                                                        </li>
                                                        <li>
                                                            Traslado de un familiar por hospitalizaci??n, siempre y cuando el m??dico tratante autorice la
                                                            visita hospitalaria o acompa??amiento en el hotel.
                                                        </li>
                                                        <li>
                                                            Diferencia de Tarifa o penalidad por viaje de regreso retrasado o anticipado del titular
                                                        </li>
                                                        <li>
                                                            Cancelaci??n de viaje contratado por asistencia intra hospitalaria de Covid-19 y Garant??a de
                                                            Cancelaci??n e Interrupci??n de Viaje por Diagnostico positivo de Covid-19 que impida el
                                                            viaje en las fechas designadas del viaje
                                                        </li>
                                                        <li>
                                                            Asistencia a trav??s de telemedicina durante el aislamiento obligatorio, para monitoreo del
                                                            estado de salud del paciente.
                                                        </li>
                                                        <li>
                                                            Soporte emocional a trav??s de tele psicolog??a.
                                                        </li>
                                                    </ol>

                                                    <p>
                                                        Para poder acceder a estos beneficios se deber??n cumplir las siguientes condiciones.
                                                    </p>
                                                    <ol className="list-style-decimal">
                                                        <li>
                                                            Informe m??dico donde se indique que el paciente deber?? permanecer en autoaislamiento.
                                                        </li>
                                                        <li>
                                                            Este upgrade garantiza los gastos de hotel por reserva, esto quiere decir que si dos
                                                            personas o m??s que comparten la misma habitaci??n son diagnosticadas con covid-19, los
                                                            gastos a reembolsar corresponder??n a esta reserva. Dicho esto, se entiende que no se
                                                            pagara una habitaci??n por cada reserva.
                                                        </li>
                                                        <li>
                                                            Los gastos de hotel por cuarentena ser??n cubiertos siempre y cuando la reserva ya paga
                                                            por el pasajero haya finalizado.
                                                        </li>
                                                    </ol>

                                                    <ul>
                                                        <li>
                                                            El producto tendr?? un tope de USD 20.000 para grupos
                                                        </li>
                                                        <li>
                                                            El monto m??ximo de esta cobertura es de USD 1.500
                                                        </li>
                                                    </ul>

                                                    <p>
                                                        Este producto se podr?? adquirir para viajes de corta estad??a hasta 90 d??as, o anuales multiviajes pero
                                                        por viaje que se realice deber?? generar la compra del upgrade.
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
                                        Exclusi??n aplicable a todos los servicios y beneficios
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={11}>
                                        <Card.Body>
                                            <div>
                                            <p>Quedan expresamente excluidos del sistema de asistencia <strong>ORANGE TRAVEL ASSIST</strong> los eventos siguientes:</p>
                                                    <ol className="list-style-decimal">
                                                        <li>Enfermedades cr??nicas o preexistentes, definidas, o recurrentes, padecidas con anterioridad al inicio de la vigencia del plan y/o del viaje, sean estas del conocimiento o no por el Beneficiario, as?? como sus agudizaciones, secuelas y consecuencias directas o indirectas (incluso cuando las mismas aparezcan por primera vez durante el viaje).</li>
                                                        <li>Enfermedades, lesiones, afecciones o complicaciones m??dicas resultantes de tratamientos efectuados o llevados a cabo por personas o profesionales no autorizados por el Departamento M??dico de la Central de Servicios de Asistencia <strong>ORANGE TRAVEL ASSIST</strong>, o exceptu??ndose lo determinado en el punto precedente.</li>
                                                        <li>Los tratamientos homeop??ticos, tratamientos de acupuntura, la quinesioterapia, las curas termales, la podolog??a, manicura, pedicura, etc.</li>
                                                        <li>Las afecciones, las enfermedades o lesiones derivadas de empresa, intento o acci??n criminal o penal del Beneficiario, directa o indirectamente como peleas, ri??as, flagelaciones, etc.</li>
                                                        <li>Tratamiento de enfermedades o estados patol??gicos producidos por la ingesta o la administraci??n intencional de t??xicos (drogas), narc??ticos, alcohol, o por la utilizaci??n de medicamentos sin la respectiva orden m??dica</li>
                                                        <li>Gastos incurridos en cualquier tipo de pr??tesis, incluidas las dentales, lentes, aud??fonos, sillas de rueda, muletas, anteojos, etc.</li>
                                                        <li>Eventos ocurridos como consecuencia de simple entrenamientos, pr??cticas sencillas o participaci??n activa o no activa en competencias deportivas (profesionales o amateurs). Adem??s quedan expresamente excluidas las ocurrencias consecuentes a la pr??ctica de deportes peligrosos o de riesgos o extremos incluyendo pero no limitando a: Motociclismo, Automovilismo, Boxeo, Polo, Ski acu??tico, Buceo (hasta 30 metros m??ximo), Ala Deltismo, Kartismo, Cuatrimotos, Alpinismo, Ski , Football, Boxeo, Canotaje, Parapente , Kayak, B??dminton, B??squet ball, Voleibol, Handball, karate do, Kung f??, Judo, Tiro al arco, Tiro fusil, Tejo, Rappel, Buceo, Torrentismo, Monta??ismo, Escalada, Puenting, Atletismo, Ciclismo, Luge Espeleolog??a, Skeleton, la Caza de animales, Bobsleigh, etc., y otros deportes practicados fuera de pistas reglamentarias y autorizadas por las respectivas federaciones de deportes. </li>
                                                        <li>Los partos, estados de embarazo, controles ginecol??gicos, ex??menes relacionados con los mismos. Los abortos, o las p??rdidas cualquiera sea su etiolog??a u origen. Asimismo, todas las complicaciones resultantes durante y despu??s del embarazo.</li>
                                                        <li>Todo tipo de enfermedades mentales.</li>
                                                        <li>Afecciones, enfermedades o lesiones derivadas del consumo de bebidas alcoh??licas de cualquier tipo.</li>
                                                        <li>El S??ndrome de inmune deficiencia adquirida (SIDA) y virus de inmunodeficiencia humana (VIH) en todas sus formas, secuelas y consecuencias. Las enfermedades y/o infecciones de transmisi??n sexual y/o en general todo tipo de prestaci??n, examen y/o tratamiento que no haya recibido la autorizaci??n previa de la Central de Servicios de Asistencia.</li>
                                                        <li>Los Eventos y las consecuencias de desencadenamiento de fuerzas naturales, tsunamis, temblores, terremotos, tormentas, tempestades, huracanes, ciclones, inundaciones, eventos de radiaci??n nuclear y de radioactividad, as?? como cualquier otro fen??meno natural o no, con car??cter extraordinario o evento que, debido a sus proporciones o gravedad, sea considerado como desastre nacional regional o local o cat??strofe, sismos, huracanes, inundaciones etc.</li>
                                                        <li>El suicidio, o el intento de suicidio o las lesiones infringidas a s?? mismo por parte del Beneficiario y/o su familia, as?? como cualquier acto de manifiesta irresponsabilidad o imprudencia grave por parte del Beneficiario de la asistencia en viajes.</li>
                                                        <li>Los Eventos como consecuencia de actos de guerra, invasi??n, actos cometidos por enemigos extranjeros o nacionales, terrorismo, hostilidades u operaciones de guerra (sea que haya sido declarada o no la guerra) guerra civil, rebeli??n, insurrecci??n o poder militar, naval o usurpado, la intervenci??n del Beneficiario en motines, manifestaciones o tumultos que tengan o no car??cter de guerra civil, o sea que la intervenci??n sea personal o como miembro de una organizaci??n civil o militar; terrorismo u otra alteraci??n grave del orden p??blico.</li>
                                                        <li>Los actos mal intencionados y/o de mala fe de parte del Beneficiario o de sus apoderados.</li>
                                                        <li>Los ex??menes m??dicos de rutina, los ex??menes de laboratorio para chequeos m??dicos, los ex??menes de diagn??stico y o de controles, ex??menes de laboratorio o radiol??gicos o de otros medios, cuya finalidad es la de establecer si la enfermedad es una preexistencia, tales como los ex??menes de radiolog??a, el doppler, las resonancias magn??ticas, tomograf??as, ultrasonidos, im??genes, scanner de toda ??ndole, etc. Los ex??menes m??dicos practicados para establecer si la dolencia corresponde a una enfermedad preexistente o no.</li>
                                                        <li>Gastos correspondientes a transportes p??blicos o privados o desplazamientos pagados por el Beneficiario desde su hotel o lugar donde est?? hasta el centro hospitalario, o centro m??dico, o consultorio del m??dico. A menos que dichos gastos hayan sido expresamente autorizados en forma escrita o verbal por la Central de Servicios de Asistencia.</li>
                                                        <li>Las enfermedades derivadas o debidas o consecuentes de las deformaciones cong??nitas conocidas o no por el Beneficiario.</li>
                                                        <li>Lesiones o accidentes derivados de accidentes a??reos en aviones no destinados ni autorizados como transporte p??blico, incluyendo los vuelos fletados particulares.</li>
                                                        <li>Afecciones, enfermedades o lesiones derivadas directa o indirectamente de ri??a o peleas (salvo que se tratase de un caso de leg??tima defensa comprobada con reporte policial), huelga, actos de vandalismo o tumulto popular en que el Beneficiario hubiese participado como elemento activo. El intento de o la comisi??n de un acto ilegal y, en general, cualquier acto doloso o criminal del Beneficiario, incluido el suministro de informaci??n falsa o diferente de la realidad.</li>
                                                        <li>Enfermedades end??micas, pand??micas, o epid??micas, Las asistencias por estas enfermedades en pa??ses con o sin emergencia sanitaria en caso de que el Beneficiario no haya seguido las sugerencias y/o indicaciones sobre restricciones de viaje y/o tratamiento profil??ctico y/o vacunaci??n emanadas de autoridades sanitarias.</li>
                                                        <li>Cualquier gasto o asistencia m??dica que no haya sido previamente consultado y autorizado por la Central de Servicios de Asistencia <strong>ORANGE TRAVEL ASSIST</strong>.</li>
                                                        <li>Las enfermedades, o indisposiciones resultantes de trastornos del periodo menstrual en las mujeres, como adelantos o retrasos, as?? como sangrados, flujos y otros.</li>
                                                        <li>Enfermedades Hep??ticas, como Cirrosis, Abscesos y otros.</li>
                                                        <li>Ex??menes y/u hospitalizaciones para pruebas de esfuerzo y todo tipo de chequeos preventivos.</li>
                                                        <li>Cualquier tipo de hernias y sus consecuencias.</li>
                                                        <li>Secuestro o su intento.</li>
                                                        <li>Riesgos profesionales: si el motivo del viaje del Beneficiario fuese la ejecuci??n de trabajos o tareas que involucren un riesgo profesional, as?? como las lesiones clasificadas como lesiones por esfuerzos repetitivos, enfermedades osteomusculares relacionadas al trabajo, lesi??n por trauma continuado o continuo, etc., o similares, tanto como sus consecuencias post tratamiento inclusive quir??rgicos en cualquier tiempo.</li>
                                                        <li>Lesiones de conductor o pasajero por el uso de cualquier tipo de veh??culos, incluidos bicicletas, motocicletas y velomotores sin licencia de conducir, o sin casco, o sin seguros contratados.</li>
                                                        <li>Est??n excluidos los accidentes y enfermedades presentadas en pa??ses en guerra civil o extranjera. Ejemplo: Afganist??n, Irak, Sudan, Somalia, Corea del Norte, etc.</li>
                                                        <li>No se brindar?? asistencia de ning??n tipo al Beneficiario en situaci??n migratoria o laboral ilegal (incluyendo trabajo no declarado en el pa??s desde donde se requiere la asistencia, o a estudiantes sorprendidos trabajando en pa??s extranjero sin la respectiva autorizaci??n de las autoridades locales).</li>
                                                        <li><strong>ORANGE TRAVEL ASSIST</strong> no tomar?? a su cargo costos por fisioterapias referidas para el tratamiento de dolencias relacionadas a accidentes laborales, tareas repetitivas o enfermedades cr??nicas y/o degenerativas de los huesos o m??sculos. Las fisioterapias se cubrir??n ??nicamente en caso tal que la dolencia haya sido ocasionada por un accidente no laboral bajo autorizaci??n previa del Departamento M??dico de la Central de Servicios de Asistencia en caso tal que se determine que con las mismas el pasajero podr?? mejorar su condici??n actual y bajo ning??n motivo, podr?? exceder las diez (10) sesiones.</li>
                                                    </ol>
                                                    <p>En caso de constatarse que el motivo del viaje fuera el tratamiento en el extranjero de una enfermedad de base, y que el tratamiento actual tenga alguna vinculaci??n directa o indirecta con la dolencia previa motivo del viaje, <strong>ORANGE TRAVEL ASSIST</strong> quedar?? relevada de prestar sus servicios. A tal fin <strong>ORANGE TRAVEL ASSIST</strong> se reserva el derecho de investigar la conexi??n del hecho actual con la dolencia previa.</p>
                                                    <p>Convenio de Competencia: Queda expresamente convenido entre las partes, en lo relativo a la relaci??n contractual entre el Beneficiario del voucher y el proveedor que cualquier problema de interpretaci??n sobre los alcances de la misma y/o reclamaci??n judicial, que no puedan ser resueltos en forma amistosa entre las partes, deber??n ser sometidos a la jurisdicci??n de los tribunales de Doral, Florida, con exclusi??n de cualquier otro foro y jurisdicci??n que pudiera corresponder.</p>
                                                    <p>Servicios no acumulativos y/o Intervenci??n de otras empresas: En ning??n caso <strong>ORANGE TRAVEL ASSIST</strong> prestar?? los servicios de asistencia al Beneficiario establecidos en el PLAN DE ASISTENCIA M??DICA del CERTIFICADO DE VIAJE, ni efectuar?? reembolso de gastos de ning??n tipo, en tanto y en cuanto el Beneficiario solicite o haya solicitado prestaciones por el mismo problema y/o afecci??n a cualquier otra empresa, antes, durante o despu??s de haberlas solicitado al proveedor.</p>
                                            </div>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={12} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={12} >
                                            Subrogaci??n y cesi??n de derechos
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={12}>
                                        <Card.Body>
                                            <div>
                                            <p>Hasta la concurrencia de las sumas desembolsadas en cumplimiento de las obligaciones emanadas de las presentes condiciones generales, <strong>ORANGE TRAVEL ASSIST</strong> y/o las compa????as de seguro que asumen el riesgo como fruto del encargo de <strong>ORANGE TRAVEL ASSIST</strong> quedar??n autom??ticamente subrogadas en los derechos y acciones que puedan corresponder al Beneficiario o a sus herederos contra terceras personas f??sicas o jur??dicas en virtud del evento que motive la asistencia prestada y/o beneficio pagado.</p>
                                                    <p>El Beneficiario se compromete a reembolsar en el acto a <strong>ORANGE TRAVEL ASSIST</strong> todo importe que haya recibido
                                                    de parte del sujeto causante y/o responsable del accidente y/o de su(s) compa????a(s) de seguro(s)
                                                    en concepto de adelanto(s) a cuenta de la liquidaci??n de la indemnizaci??n final a la cual el titular
                                                    pudiere tener derecho. Ello a concurrencia de los importes a cargo de <strong>ORANGE TRAVEL ASSIST</strong>  en el caso ocurrido.</p>
                                                    <p>Sin que la siguiente enunciaci??n deba entenderse limitativa, quedan expresamente comprendidos
                                                    en la subrogaci??n los derechos y acciones susceptibles de ser ejercitados frente a las siguientes
                                                    personas:</p>
                                                    <ol className="list-style-alpha">
                                                        <li>Terceros responsables de un accidente (de tr??nsito o de cualquier otro tipo) y/o sus
                                                        compa????as de seguro.</li>
                                                        <li>Empresas de transporte, en lo atinente a la restituci??n -total o parcial- del precio de pasajes
                                                        no utilizados, cuando <strong>ORANGE TRAVEL ASSIST</strong> haya tomado a su cargo el traslado del titular o de sus restos.</li>
                                                        <li>Otras compa????as que cubran el mismo riesgo.</li>
                                                    </ol>
                                                    <p><b>IMPORTANTE:</b> El titular cede irrevocablemente a favor de <strong>ORANGE TRAVEL ASSIST</strong> los derechos y acciones
                                                    comprendidos en la presente Cl??usula, oblig??ndose a llevar a cabo la totalidad de los actos jur??dicos
                                                    que a tal efecto resulten necesarios y a prestar toda la colaboraci??n que le sea requerida con motivo
                                                    del hecho ocurrido. En tal sentido, se compromete y obliga a formalizar la subrogaci??n o cesi??n a
                                                    favor de <strong>ORANGE TRAVEL ASSIST</strong> dentro de los tres (3) d??as calendario siguientes de intimado el Titular/es al efecto. De negarse a suscribir y/o prestar colaboraci??n para ceder tales derechos a <strong>ORANGE TRAVEL ASSIST</strong>, esta ??ltima quedara autom??ticamente eximida de pagar los gastos de asistencia originados</p>
                                                    <p>Adem??s, <strong>ORANGE TRAVEL ASSIST</strong> estar?? subrogada, entendi??ndose que cualquier seguro, asistencia en viaje y/o seguro m??dico tendr?? la obligaci??n en primera instancia del pago ya sea de la totalidad o parte de los gastos que puedan desencadenarse a causa del evento sufrido por el Beneficiario. </p>

                                                    <p><strong>ORANGE TRAVEL ASSIST</strong> quedar?? subrogado en los derechos y acciones que correspondan al Beneficiario, por
                                                    hechos que hayan motivado la intervenci??n de aquel y hasta el total del costo de los servicios
                                                    prestados.</p>
                                                    <p>De igual forma <strong>ORANGE TRAVEL ASSIST</strong> se reserva el derecho de poder ceder en todo o en parte tanto los derechos
                                                    que le asistieran derivados de la relaci??n contractual con el Beneficiario, as?? como la ejecuci??n,
                                                    prestaci??n de servicios y dem??s obligaciones a su cargo a terceras personas jur??dicas profesionales
                                                    en el ramo de la asistencia a empresas del ramo. </p>
                                                    <p>En tal sentido el Beneficiario est?? consciente de dicho derecho y por tanto renuncia expresamente a ser notificado o comunicado previamente de dichas cesiones.</p>
                                                
                                            </div>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={13} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={13} >
                                            Circunstancias excepcionales de inejecuci??n iniputable
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={13}>
                                        <Card.Body>
                                            <div>
                                            <p>Ni <strong>ORANGE TRAVEL ASSIST</strong>, ni su red de prestadores de servicios, ser??n responsables, exigibles o ejecutables por casos fortuitos, que originen retrasos o incumplimientos inimputables debidos a cat??strofes naturales, huelgas, guerras, invasiones, actos de sabotaje, hostilidades, rebeli??n, insurrecci??n, terrorismo o pronunciamientos, manifestaciones populares, radioactividad, o cualquier otra causa de fuerza mayor. Cuando elementos de esta ??ndole interviniesen, <strong>ORANGE TRAVEL ASSIST</strong> se compromete a ejecutar sus compromisos dentro del menor plazo que fuera posible y siempre y cuando una vez sea factible dicha prestaci??n de servicios, se mantenga la contingencia que la justifique.</p>
                                            </div>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={14} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={14} >
                                            Recurso
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={14}>
                                        <Card.Body>
                                            <div>
                                            <p><strong>ORANGE TRAVEL ASSIST</strong> se reserva el derecho de exigir al Beneficiario el reembolso de cualquier gasto efectuado por ??ste en forma indebida, en caso de hab??rsele prestado servicios no contemplados por este contrato o fuera del per??odo de vigencia del plan de asistencia contratado, as?? como cualquier pago realizado por cuenta del Beneficiario.</p>
                                            </div>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={15} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={15} >
                                            Responsabilidad
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={15}>
                                        <Card.Body>
                                            <div>
                                            <p>El servicio brindado por <strong>ORANGE TRAVEL ASSIST</strong> de conformidad a los t??rminos de las presentes condiciones
                                                    generales y al contrato de asistencia en viaje, se circunscribe ??nica y exclusivamente a facilitar al
                                                    Beneficiario el acceso a profesionales para la prestaci??n por parte de ??stos ??ltimos, bajo su ??nica y
                                                    exclusiva responsabilidad, servicios m??dicos, odontol??gicos, farmac??uticos, legales y/o de asistencia
                                                    en general. De esta forma, <strong>ORANGE TRAVEL ASSIST</strong> no ser?? responsable en forma alguna, ya sea directa o
                                                    indirectamente, de cualquier reclamo que pudiere realizar el Beneficiario por la prestaci??n de los
                                                    servicios llevada a cabo por cualquiera de los profesionales antes mencionados</p>
                                                    <p><strong>ORANGE TRAVEL ASSIST</strong>, no ser?? responsable y no indemnizar?? al Beneficiario por ning??n tipo de da??o, perjuicio, lesi??n o enfermedad causada por haberle brindado al Beneficiario a su solicitud, personas o profesionales para que lo asistan m??dica, odontol??gica, farmac??utica o legalmente. En estos casos, la persona o personas designadas por <strong>ORANGE TRAVEL ASSIST</strong> ser??n tenidas como agentes del Beneficiario, sin posible recurso de naturaleza o circunstancia alguna contra <strong>ORANGE TRAVEL ASSIST</strong>, en raz??n de tal designaci??n. <strong>ORANGE TRAVEL ASSIST</strong> se esfuerza para poner a disposici??n de los pasajeros los mejores profesionales de la salud y los mejores medios, sin embargo <strong>ORANGE TRAVEL ASSIST</strong>, no podr?? nunca ser tenida ni total ni parcialmente como responsable por la disponibilidad, la calidad, los resultados, falta de atenci??n, servicios m??dicos y/o mala praxis de dichos profesionales o entidades, pues son condiciones que se encuentran totalmente fuera del control de <strong>ORANGE TRAVEL ASSIST</strong>.</p>
                                            </div>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    <Accordion key={16} >
                                    <Card >
                                        <Card.Header classname="border-bottom">
                                        <Accordion.Toggle as={Button} variant="link" eventKey={16} >
                                            Caducidad - Resoluci??n - Modificaci??n 
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={16}>
                                        <Card.Body>
                                            <div>
                                            <p>Toda reclamaci??n tendiente a hacer efectivas las obligaciones que <strong>ORANGE TRAVEL ASSIST</strong>, asume a trav??s de las presentes condiciones generales, deber?? formularse en debida forma y por escrito dentro del plazo m??ximo improrrogable de treinta (30) d??as continuos calendario, contados a partir de la fecha de finalizaci??n de la vigencia del voucher. Transcurrido el plazo indicado, se producir?? la autom??tica caducidad de todos los derechos no ejercidos oportunamente.</p>
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
export default ServiceDetails;