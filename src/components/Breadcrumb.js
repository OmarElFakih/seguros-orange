import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';

class Breadcrumb extends Component {
    render(){
        var {Ptitle, Pdescription,breadcrumbClass, imgName, Image, bPosition} = this.props;
        return(
            <section className={`${breadcrumbClass}`} style={{backgroundImage: `url(${Image})`,
                                                              backgroundAttachment: "fixed",  
                                                              backgroundSize: "cover",
                                                              backgroundPosition: bPosition}}>
                {/*<img className="breadcrumb_shap" src={require ("../img/" + imgName)} alt=""/>*/}
                <div className="container">
                    <div className="seo_banner_content text-center">
                        <Reveal effect="fadeInUp"><h1 className="f_p f_700 l_height50 mb_20">{Ptitle}</h1></Reveal>
                        <p className="f_400 w_color f_size_16 l_height26">{Pdescription}</p>
                    </div>
                </div>
            </section> 
        )
    }
}
export default Breadcrumb;