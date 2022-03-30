import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/eventForm.css";
import fondo from "../../img/fondo.jpg"

export const EventForm = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory()
    const [event, setEvent] = useState({
        event_name: "",
        local_name: "",
        type_of_event: "",
        description: "",
        place: "",
        date: "",
        start_time: "",
        end_time: "",
        age: "",
        parking: "",
        number: "",
        capacity: "",
        photo: "",
        location: "",
        cover: "",
        email: ""
    })
    return (
        <div className="py-5">
            <div className="container-form py-2">
                <h1 className="center">Datos del Evento</h1>
                <div className="col-lg-12 well">
                    <div className="row">
                        <form>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-6 form-group mt-1">
                                        <label>Nombre del local</label>
                                        <input
                                            type="text"
                                            placeholder="Ingresa el nombre del local..."
                                            className="form-control name"
                                            value={event.local_name}
                                            onChange={(e) => {
                                                setEvent({
                                                    event_name: event.event_name,
                                                    local_name: e.target.value,
                                                    type_of_event: event.type_of_event,
                                                    description: event.description,
                                                    place: event.place,
                                                    date: event.date,
                                                    start_time: event.start_time,
                                                    end_time: event.end_time,
                                                    age: event.age,
                                                    parking: event.parking,
                                                    number: event.number,
                                                    capacity: event.capacity,
                                                    photo: event.photo,
                                                    location: event.location,
                                                    cover: event.cover,
                                                    email: event.email
                                                })
                                            }}
                                        ></input>
                                    </div>
                                    <div className="col-sm-6 form-group mt-1">
                                        <label>Nombre del evento</label>
                                        <input
                                            type="text"
                                            placeholder="Ingresa el nombre del evento..."
                                            className="form-control name"
                                            value={event.event_name}
                                            onChange={(e) => {
                                                setEvent({
                                                    event_name: e.target.value,
                                                    local_name: event.local_name,
                                                    type_of_event: event.type_of_event,
                                                    description: event.description,
                                                    place: event.place,
                                                    date: event.date,
                                                    start_time: event.start_time,
                                                    end_time: event.end_time,
                                                    age: event.age,
                                                    parking: event.parking,
                                                    number: event.number,
                                                    capacity: event.capacity,
                                                    photo: event.photo,
                                                    location: event.location,
                                                    cover: event.cover,
                                                    email: event.email
                                                })
                                            }}
                                        ></input>
                                    </div>
                                </div>

                                <div className="form-group mt-1">
                                    <label>Descripci&oacute;n</label>
                                    <textarea
                                        placeholder="Agrega una breve descripci&oacute;n sobre tu evento..."
                                        rows="3"
                                        className="form-control description"
                                        value={event.description}
                                        onChange={(e) => {
                                            setEvent({
                                                event_name: event.event_name,
                                                local_name: event.local_name,
                                                type_of_event: event.type_of_event,
                                                description: e.target.value,
                                                place: event.place,
                                                date: event.date,
                                                start_time: event.start_time,
                                                end_time: event.end_time,
                                                age: event.age,
                                                parking: event.parking,
                                                number: event.number,
                                                capacity: event.capacity,
                                                photo: event.photo,
                                                location: event.location,
                                                cover: event.cover,
                                                email: event.email
                                            })
                                        }}
                                    ></textarea>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 mt-1">
                                        <label>Tipo de evento</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option disabled>Selecciona tu opci&oacute;n</option>
                                            <option
                                                value="fiesta"
                                                onSelect={(e) => {
                                                    setEvent({
                                                        event_name: event.event_name,
                                                        local_name: event.local_name,
                                                        type_of_event: "fiesta",
                                                        description: event.description,
                                                        place: event.place,
                                                        date: event.date,
                                                        start_time: event.start_time,
                                                        end_time: event.end_time,
                                                        age: event.age,
                                                        parking: event.parking,
                                                        number: event.number,
                                                        capacity: event.capacity,
                                                        photo: event.photo,
                                                        location: event.location,
                                                        cover: event.cover,
                                                        email: event.email
                                                    })
                                                }}
                                            >Fiesta</option>
                                            <option
                                                value="restaurante"
                                                onChange={(e) => {
                                                    setEvent({
                                                        event_name: event.event_name,
                                                        local_name: event.local_name,
                                                        type_of_event: e.target.value,
                                                        description: event.description,
                                                        place: event.place,
                                                        date: event.date,
                                                        start_time: event.start_time,
                                                        end_time: event.end_time,
                                                        age: event.age,
                                                        parking: event.parking,
                                                        number: event.number,
                                                        capacity: event.capacity,
                                                        photo: event.photo,
                                                        location: event.location,
                                                        cover: event.cover,
                                                        email: event.email
                                                    })
                                                }}
                                            >Restaurante</option>
                                            <option
                                                value="diversion"
                                                onChange={(e) => {
                                                    setEvent({
                                                        event_name: event.event_name,
                                                        local_name: event.local_name,
                                                        type_of_event: e.target.value,
                                                        description: event.description,
                                                        place: event.place,
                                                        date: event.date,
                                                        start_time: event.start_time,
                                                        end_time: event.end_time,
                                                        age: event.age,
                                                        parking: event.parking,
                                                        number: event.number,
                                                        capacity: event.capacity,
                                                        photo: event.photo,
                                                        location: event.location,
                                                        cover: event.cover,
                                                        email: event.email
                                                    })
                                                }}
                                            >Diversi&oacute;n</option>
                                            <option
                                                value="discoteca"
                                                onChange={(e) => {
                                                    setEvent({
                                                        event_name: event.event_name,
                                                        local_name: event.local_name,
                                                        type_of_event: e.target.value,
                                                        description: event.description,
                                                        place: event.place,
                                                        date: event.date,
                                                        start_time: event.start_time,
                                                        end_time: event.end_time,
                                                        age: event.age,
                                                        parking: event.parking,
                                                        number: event.number,
                                                        capacity: event.capacity,
                                                        photo: event.photo,
                                                        location: event.location,
                                                        cover: event.cover,
                                                        email: event.email
                                                    })
                                                }}
                                            >Discoteca</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 form-group mt-1">
                                        <label>Lugar</label>
                                        <input
                                            type="text"
                                            placeholder="Ingresa el lugar del evento..."
                                            className="form-control name"
                                            value={event.place}
                                            onChange={(e) => {
                                                setEvent({
                                                    event_name: event.event_name,
                                                    local_name: event.local_name,
                                                    type_of_event: event.type_of_event,
                                                    description: event.description,
                                                    place: e.target.value,
                                                    date: event.date,
                                                    start_time: event.start_time,
                                                    end_time: event.end_time,
                                                    age: event.age,
                                                    parking: event.parking,
                                                    number: event.number,
                                                    capacity: event.capacity,
                                                    photo: event.photo,
                                                    location: event.location,
                                                    cover: event.cover,
                                                    email: event.email
                                                })
                                            }}
                                        ></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-4 form-group mt-1">
                                        <label>Fecha</label>
                                        <input
                                            type="date"
                                            placeholder="Fecha del evento..."
                                            className="form-control name"
                                            value={event.date}
                                            onChange={(e) => {
                                                setEvent({
                                                    event_name: event.event_name,
                                                    local_name: event.local_name,
                                                    type_of_event: event.type_of_event,
                                                    description: event.description,
                                                    place: event.place,
                                                    date: e.target.value,
                                                    start_time: event.start_time,
                                                    end_time: event.end_time,
                                                    age: event.age,
                                                    parking: event.parking,
                                                    number: event.number,
                                                    capacity: event.capacity,
                                                    photo: event.photo,
                                                    location: event.location,
                                                    cover: event.cover,
                                                    email: event.email
                                                })
                                            }}
                                        ></input>
                                    </div>
                                    <div className="col-sm-4 form-group mt-1">
                                        <label>Hora de inicio</label>
                                        <input
                                            type="time"
                                            placeholder="Hora de inicio..."
                                            className="form-control name"
                                            value={event.start_time}
                                            onChange={(e) => {
                                                setEvent({
                                                    event_name: event.event_name,
                                                    local_name: event.local_name,
                                                    type_of_event: event.type_of_event,
                                                    description: event.description,
                                                    place: event.place,
                                                    date: event.date,
                                                    start_time: e.target.value,
                                                    end_time: event.end_time,
                                                    age: event.age,
                                                    parking: event.parking,
                                                    number: event.number,
                                                    capacity: event.capacity,
                                                    photo: event.photo,
                                                    location: event.location,
                                                    cover: event.cover,
                                                    email: event.email
                                                })
                                            }}
                                        ></input>
                                    </div>
                                    <div className="col-sm-4 form-group mt-1">
                                        <label>Hora de fin</label>
                                        <input
                                            type="time"
                                            placeholder="Hora de fin..."
                                            className="form-control name"
                                            value={event.end_time}
                                            onChange={(e) => {
                                                setEvent({
                                                    event_name: event.event_name,
                                                    local_name: event.local_name,
                                                    type_of_event: event.type_of_event,
                                                    description: event.description,
                                                    place: event.place,
                                                    date: event.date,
                                                    start_time: event.start_time,
                                                    end_time: e.target.value,
                                                    age: event.age,
                                                    parking: event.parking,
                                                    number: event.number,
                                                    capacity: event.capacity,
                                                    photo: event.photo,
                                                    location: event.location,
                                                    cover: event.cover,
                                                    email: event.email
                                                })
                                            }}
                                        ></input>
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
                                                    onChange={(e) => {
                                                        setEvent({
                                                            event_name: event.event_name,
                                                            local_name: event.local_name,
                                                            type_of_event: event.type_of_event,
                                                            description: event.description,
                                                            place: event.place,
                                                            date: event.date,
                                                            start_time: event.start_time,
                                                            end_time: event.end_time,
                                                            age: event.age,
                                                            parking: e.target.value,
                                                            number: event.number,
                                                            capacity: event.capacity,
                                                            photo: event.photo,
                                                            location: event.location,
                                                            cover: event.cover,
                                                            email: event.email
                                                        })
                                                    }}
                                                />&nbsp;&nbsp;Si
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="parking"
                                                    value="no"
                                                    onChange={(e) => {
                                                        setEvent({
                                                            event_name: event.event_name,
                                                            local_name: event.local_name,
                                                            type_of_event: event.type_of_event,
                                                            description: event.description,
                                                            place: event.place,
                                                            date: event.date,
                                                            start_time: event.start_time,
                                                            end_time: event.end_time,
                                                            age: event.age,
                                                            parking: e.target.value,
                                                            number: event.number,
                                                            capacity: event.capacity,
                                                            photo: event.photo,
                                                            location: event.location,
                                                            cover: event.cover,
                                                            email: event.email
                                                        })
                                                    }}
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
                                                    onChange={(e) => {
                                                        setEvent({
                                                            event_name: event.event_name,
                                                            local_name: event.local_name,
                                                            type_of_event: event.type_of_event,
                                                            description: event.description,
                                                            place: event.place,
                                                            date: event.date,
                                                            start_time: event.start_time,
                                                            end_time: event.end_time,
                                                            age: e.target.value,
                                                            parking: event.parking,
                                                            number: event.number,
                                                            capacity: event.capacity,
                                                            photo: event.photo,
                                                            location: event.location,
                                                            cover: event.cover,
                                                            email: event.email
                                                        })
                                                    }}
                                                />&nbsp;&nbsp;Todo P&uacute;blico
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="age"
                                                    value="+15"
                                                    onChange={(e) => {
                                                        setEvent({
                                                            event_name: event.event_name,
                                                            local_name: event.local_name,
                                                            type_of_event: event.type_of_event,
                                                            description: event.description,
                                                            place: event.place,
                                                            date: event.date,
                                                            start_time: event.start_time,
                                                            end_time: event.end_time,
                                                            age: e.target.value,
                                                            parking: event.parking,
                                                            number: event.number,
                                                            capacity: event.capacity,
                                                            photo: event.photo,
                                                            location: event.location,
                                                            cover: event.cover,
                                                            email: event.email
                                                        })
                                                    }}
                                                />&nbsp;&nbsp;+15
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="age"
                                                    value="+18"
                                                    onChange={(e) => {
                                                        setEvent({
                                                            event_name: event.event_name,
                                                            local_name: event.local_name,
                                                            type_of_event: event.type_of_event,
                                                            description: event.description,
                                                            place: event.place,
                                                            date: event.date,
                                                            start_time: event.start_time,
                                                            end_time: event.end_time,
                                                            age: e.target.value,
                                                            parking: event.parking,
                                                            number: event.number,
                                                            capacity: event.capacity,
                                                            photo: event.photo,
                                                            location: event.location,
                                                            cover: event.cover,
                                                            email: event.email
                                                        })
                                                    }}
                                                />&nbsp;&nbsp;+18
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <input
                                                    type="radio"
                                                    name="age"
                                                    value="+21"
                                                    onChange={(e) => {
                                                        setEvent({
                                                            event_name: event.event_name,
                                                            local_name: event.local_name,
                                                            type_of_event: event.type_of_event,
                                                            description: event.description,
                                                            place: event.place,
                                                            date: event.date,
                                                            start_time: event.start_time,
                                                            end_time: event.end_time,
                                                            age: e.target.value,
                                                            parking: event.parking,
                                                            number: event.number,
                                                            capacity: event.capacity,
                                                            photo: event.photo,
                                                            location: event.location,
                                                            cover: event.cover,
                                                            email: event.email
                                                        })
                                                    }}
                                                />&nbsp;&nbsp;+21
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label>Capacidad</label>
                                        <input
                                            type="text"
                                            placeholder="# de personas permitidas..."
                                            className="form-control name"
                                            value={event.capacity}
                                            onChange={(e) => {
                                                setEvent({
                                                    event_name: event.event_name,
                                                    local_name: event.local_name,
                                                    type_of_event: event.type_of_event,
                                                    description: event.description,
                                                    place: event.place,
                                                    date: event.date,
                                                    start_time: event.start_time,
                                                    end_time: event.end_time,
                                                    age: event.age,
                                                    parking: event.parking,
                                                    number: event.number,
                                                    capacity: e.target.value,
                                                    photo: event.photo,
                                                    location: event.location,
                                                    cover: event.cover,
                                                    email: event.email
                                                })
                                            }}
                                        ></input>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label>Cover</label>
                                        <input
                                            type="text"
                                            placeholder="Precio en $..."
                                            className="form-control name"
                                            value={event.cover}
                                            onChange={(e) => {
                                                setEvent({
                                                    event_name: event.event_name,
                                                    local_name: event.local_name,
                                                    type_of_event: event.type_of_event,
                                                    description: event.description,
                                                    place: event.place,
                                                    date: event.date,
                                                    start_time: event.start_time,
                                                    end_time: event.end_time,
                                                    age: event.age,
                                                    parking: event.parking,
                                                    number: event.number,
                                                    capacity: event.capacity,
                                                    photo: event.photo,
                                                    location: event.location,
                                                    cover: e.target.value,
                                                    email: event.email
                                                })
                                            }}
                                        ></input>
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label>Imagen</label>
                                        <input
                                            type="text"
                                            placeholder="Enlace de la imagen..."
                                            className="form-control name"
                                            value={event.photo}
                                            onChange={(e) => {
                                                setEvent({
                                                    event_name: event.event_name,
                                                    local_name: event.local_name,
                                                    type_of_event: event.type_of_event,
                                                    description: event.description,
                                                    place: event.place,
                                                    date: event.date,
                                                    start_time: event.start_time,
                                                    end_time: event.end_time,
                                                    age: event.age,
                                                    parking: event.parking,
                                                    number: event.number,
                                                    capacity: event.capacity,
                                                    photo: e.target.value,
                                                    location: event.location,
                                                    cover: event.cover,
                                                    email: event.email
                                                })
                                            }}
                                        ></input>
                                    </div>
                                </div>

                                <div className="form-group mt-1">
                                    <label>N&uacute;mero de contacto</label>
                                    <input
                                        type="text"
                                        placeholder="Ingresa n&uacute;mero de tel&eacute;fono..."
                                        className="form-control"
                                        value={event.number}
                                        onChange={(e) => {
                                            setEvent({
                                                event_name: event.event_name,
                                                local_name: event.local_name,
                                                type_of_event: event.type_of_event,
                                                description: event.description,
                                                place: event.place,
                                                date: event.date,
                                                start_time: event.start_time,
                                                end_time: event.end_time,
                                                age: event.age,
                                                parking: event.parking,
                                                number: e.target.value,
                                                capacity: event.capacity,
                                                photo: event.photo,
                                                location: event.location,
                                                cover: event.cover,
                                                email: event.email
                                            })
                                        }}
                                    ></input>
                                </div>
                                <div className="form-group mt-1">
                                    <label>Correo Electr&oacute;nico</label>
                                    <input
                                        type="text"
                                        placeholder="Ingresa correo electr&oacute;nico..."
                                        className="form-control"
                                        value={event.email}
                                        onChange={(e) => {
                                            setEvent({
                                                event_name: event.event_name,
                                                local_name: event.local_name,
                                                type_of_event: event.type_of_event,
                                                description: event.description,
                                                place: event.place,
                                                date: event.date,
                                                start_time: event.start_time,
                                                end_time: event.end_time,
                                                age: event.age,
                                                parking: event.parking,
                                                number: event.number,
                                                capacity: event.capacity,
                                                photo: event.photo,
                                                location: event.location,
                                                cover: event.cover,
                                                email: e.target.value
                                            })
                                        }}
                                    ></input>
                                </div>
                                <div className="col-sm-12 button-center">
                                    <button
                                        type="button"
                                        className="btn btn-lg btn-submit"
                                        onClick={async (e) => {
                                            const eventCreated = await actions.createEvent(event);
                                            if (eventCreated == true) {
                                                actions.getEvents()
                                                history.push("/")
                                                alert("Evento creado con exito!")
                                            }
                                            else {
                                                alert("No se pudo crear el evento, revise los datos")
                                            }
                                            setEvent({
                                                event_name: "",
                                                local_name: "",
                                                type_of_event: "",
                                                description: "",
                                                place: "",
                                                date: "",
                                                start_time: "",
                                                end_time: "",
                                                age: "",
                                                parking: "",
                                                number: "",
                                                capacity: "",
                                                photo: "",
                                                location: "",
                                                cover: "",
                                                email: ""
                                            })
                                        }}
                                    >Crear Evento!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
