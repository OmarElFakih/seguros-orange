import React, {Component} from 'react';

class Voucher extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            lastName: '',
            tipoIdentificacion: '',
            numero: ''
        }
        this.handleChange = this.handleChange.bind(this)

    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        // const {name, email, subject, message, emailStatus} = this.state;
        return(
            <section className="contact_info_area sec_pad bg_color">
                <div className="container">
                    <div className="row">
                        <div className="contact_form col-lg-12">
                            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40" style={{textAlign: "center"}}>Descargar Voucher</h2>
                            <p data-trim-text="353" style={{textAlign: "center"}}>
                                Si usted ha comprado uno de nuestros planes y desea verificar su estado o reimprimir su comprobante, complete el siguiente formulario para descargarlo o recibirlo por correo electrónico.
                            </p>
                            <p data-trim-text="353" style={{textAlign: "center"}}>
                                Ante cualquier consulta por favor contáctenos haciedo clic <a href="/Contact">aquí</a>.
                            </p>
                            <form onSubmit={this.submitForm} className="contact_form_box" method="post" id="voucherForm">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <input type="text" id="name" name="name" placeholder="Nombre" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <input type="text" name="lastName" id="lastName" placeholder="Apellido" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <select className="voucher-select" id="topoIdentificacion" name="tipoIdentificacion" placeholder="Tipo de identificacion" onChange={this.handleChange}>
                                            <option value="" selected="selected">Tipo de Identificación</option>
                                            <option value="5">PASAPORTE</option>
                                            <option value="11">DOCUMENTO DE IDENTIDAD</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <input type="text" onChange={this.handleChange} name="numero" id="numero" placeholder="Numero" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn_three">Descargar</button>
                            </form>
                            {/* {emailStatus ? emailStatus : null} */}
                            <div id="success">Su mensaje se ha enviado correctamente</div>
                            <div id="error">Ha ocurrido un error, por favor intentelo de nuevo</div>
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Voucher;