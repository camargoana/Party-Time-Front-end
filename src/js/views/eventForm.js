import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/eventForm.css";
import fondo from "../../img/fondo.jpg"

export const EventForm = () => {
    return (
        <div>
            <div className="container-form">
                <h1 className="center">Datos del Evento</h1>
                <div className="col-lg-12 well">
                    <div className="row">
                        <form>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-6 form-group mt-1">
                                        <label>Nombre del local</label>
                                        <input type="text" placeholder="Ingresa el nombre del local..." className="form-control name"></input>
                                    </div>
                                    <div className="col-sm-6 form-group mt-1">
                                        <label>Nombre del evento</label>
                                        <input type="text" placeholder="Ingresa el nombre del evento..." className="form-control name"></input>
                                    </div>
                                </div>

                                <div className="form-group mt-1">
                                    <label>Descripci&oacute;n</label>
                                    <textarea placeholder="Agrega una breve descripci&oacute;n sobre tu evento..." rows="3" className="form-control description"></textarea>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 mt-1">
                                        <label>Tipo de evento</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="" disabled selected>Selecciona tu opci&oacute;n</option>
                                            <option value="1">Fiesta</option>
                                            <option value="2">Restaurante</option>
                                            <option value="3">Diversi&oacute;n</option>
                                            <option value="3">Discoteca</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 form-group mt-1">
                                        <label>Lugar</label>
                                        <input type="text" placeholder="Ingresa el lugar del evento..." className="form-control name"></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-4 form-group mt-1">
                                        <label>Fecha</label>
                                        <input type="date" placeholder="Fecha del evento..." className="form-control name"></input>
                                    </div>
                                    <div className="col-sm-3 form-group mt-1">
                                        <label>Hora de inicio</label>
                                        <input type="time" placeholder="Hora de inicio..." className="form-control name"></input>
                                    </div>
                                    <div className="col-sm-3 form-group mt-1">
                                        <label>Hora de fin</label>
                                        <input type="time" placeholder="Hora de fin..." className="form-control name"></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <label className="labelInput">Estacionamiento</label>
                                            </div>
                                            <div className="col-12 radioLabel">
                                                <input
                                                    type="radio"
                                                    name="parking"
                                                    value="yes"
                                                /*onClick={(e) => {
                                                    setUser({
                                                        name: user.name,
                                                        email: user.email,
                                                        password: user.password,
                                                        type_of_user: e.target.value
                                                    });
                                                }}*/
                                                />&nbsp;&nbsp;Si
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="parking"
                                                    value="no"
                                                /*onClick={(e) => {
                                                    setUser({
                                                        name: user.name,
                                                        email: user.email,
                                                        password: user.password,
                                                        type_of_user: e.target.value
                                                    });
                                                }}*/
                                                />&nbsp;&nbsp;No
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="row">
                                            <div className="col-12">
                                                <label className="labelInput">Edad</label>
                                            </div>
                                            <div className="col-12 radioLabel">
                                                <input
                                                    type="radio"
                                                    name="age"
                                                    value="public"
                                                /*onClick={(e) => {
                                                    setUser({
                                                        name: user.name,
                                                        email: user.email,
                                                        password: user.password,
                                                        type_of_user: e.target.value
                                                    });
                                                }}*/
                                                />&nbsp;&nbsp;Todo P&uacute;blico
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="age"
                                                    value="15"
                                                /*onClick={(e) => {
                                                    setUser({
                                                        name: user.name,
                                                        email: user.email,
                                                        password: user.password,
                                                        type_of_user: e.target.value
                                                    });
                                                }}*/
                                                />&nbsp;&nbsp;+15
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="age"
                                                    value="18"
                                                /*onClick={(e) => {
                                                    setUser({
                                                        name: user.name,
                                                        email: user.email,
                                                        password: user.password,
                                                        type_of_user: e.target.value
                                                    });
                                                }}*/
                                                />&nbsp;&nbsp;+18
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="age"
                                                    value="21"
                                                /*onClick={(e) => {
                                                    setUser({
                                                        name: user.name,
                                                        email: user.email,
                                                        password: user.password,
                                                        type_of_user: e.target.value
                                                    });
                                                }}*/
                                                />&nbsp;&nbsp;+21
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label>Capacidad</label>
                                        <input type="text" placeholder="# de personas permitidas..." className="form-control name"></input>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label>Cover</label>
                                        <input type="text" placeholder="Precio en $..." className="form-control name"></input>
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label>Imagen</label>
                                        <input type="text" placeholder="Enlace de la imagen..." className="form-control name"></input>
                                    </div>
                                </div>

                                <div className="form-group mt-1">
                                    <label>N&uacute;mero de contacto</label>
                                    <input type="text" placeholder="Ingresa n&uacute;mero de tel&eacute;fono..." className="form-control"></input>
                                </div>
                                <div className="form-group mt-1">
                                    <label>Correo Electr&oacute;nico</label>
                                    <input type="text" placeholder="Ingresa correo electr&oacute;nico..." className="form-control"></input>
                                </div>
                                <div className="col-sm-12 button-center">
                                <button type="button" className="btn btn-lg btn-submit">Publicar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
