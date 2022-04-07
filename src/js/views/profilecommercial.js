import React from "react";
import "../../styles/profilecommercial.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


export const Profilecommercial = () => {
    const history = useHistory()

    const description = "Da más visibilidad a tus eventos y aumenta tus ventas. La manera más efectiva de vender tus eventos online";
	const descriptionTitle = "Efectividad y eficiencia";
	const pageTitle = "¿Qué necesitas para afiliarte?";
    const shadow = {
        WebkitBoxShadow: "5px 5px 5px #2a2626",
        MozBoxShadow: "5px 5px 5px #2a2626",
        boxShadow: "5px 5px 5px #2a2626"
    }
    
    return (
        <div>
            <section>
                <div className='details-profile'>
                    <div className="container">
                        <br /><br />
                        <h1 className="display-5 text-center fw-bold">{pageTitle}</h1>
                        <br/>
                        <div className="row">
                            <div className="col-12 col-lg-6 mt-5 px-5">
                                <img className="img-fluid" style={shadow} src="https://res.cloudinary.com/venezuela/image/upload/v1649200856/Evento/pexels-photo-5082579_vxmsqn.webp" />
                            </div>
                            <div className='col-12 col-lg-6 mt-5 px-5 info-profile' >
                                <p><b><span>- Identicaci&oacute;n comercial.</span></b></p>
                                <p><b><span>- Detalles de tu comercio.</span></b></p>
                                <p><b><span>- Identicaci&oacute;n de una persona responsable.</span></b></p>
                                <p><b><span>- Imagen de tu comercio.</span></b></p>
                                <p><b><span>- Medios de contacto.</span></b></p>
                                <div className="btn btn-lg btn-profile" onClick={(e)=>{history.push("/signup")}}>¡Crea tu Perfil Comercial!</div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </section>
            <section>
                <div className="description-profile">
                    <div className="container text-center text-white">
                        <br /><br /><br />
                        <h1 className="display-5 fw-bold">{descriptionTitle}</h1>
                        <p className="mt-4 mx-5">{description}</p>
                        <br /><br />
                    </div>
                </div>
            </section>
        </div>
    )
}
