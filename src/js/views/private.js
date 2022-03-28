import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


export const Private = () => {
    const { store, actions } = useContext(Context);
    // const [respuesta, setRespuesta] = useState({});
    const history = useHistory()
    useEffect(() => {
        // console.log(store.token)
        // VERIFICA SI EL USUARIO INICIO SESION, DE LO CONTRARIO SE ENVIA AL LOG IN
        if (store.token && store.token != "") {
            actions.getUser();
        } else {
            history.push("/signin")
        }
    }, []);
    return (
        <React.Fragment>
            <div className="bg-dark d-flex justify-content-center align-items-center vh-100 text-light">
                Bienvenid@ a tu perfil {store.user.name}
                <div>
                    {store.user.type_of_user == "personal"
                        ? //PERIFL DE USUARIO PERSONAL
                        <div className="container-fluid">
                            HOLA {store.user.name} tu eres un usuario {store.user.type_of_user}
                        </div>
                        : //PERFIL DEL USUARIO COMERCIAL
                        <div className="container-fluid">
                            HOLA {store.user.name} tu eres un usuario {store.user.type_of_user}
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
};