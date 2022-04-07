import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/event.css";
import { useParams } from "react-router-dom";

export const Event = () => {
	const APP_TEST = false;
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		if (params.id) {
			actions.getEventDetails(params.id)
		}
	}, []);

	let resource;
	let eventName;
	let datetime;
	let description;
	let capacity;
	let minAge;
	let parking;
	let contact;
	let location;
	let cover;

	// DATABASE INFO
	if (APP_TEST) {
		resource = "fiesta";
		eventName = "Nombre del Evento";
		datetime = "21 Abril 2022 - 8pm";
		description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
			+ "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			+ ", when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
		capacity = "4.000 personas";
		minAge = "21 años";
		parking = "Sí hay";
		contact = "(+58)000-00-00";
		location = "Las Mercedes, Caracas"
		cover = "Costo del evento"

	} else {
		resource = store.eventDetails.type_of_event;
		eventName = store.eventDetails.event_name;
		datetime = store.eventDetails.date;
		description = store.eventDetails.description;
		capacity = store.eventDetails.capacity;
		minAge = store.eventDetails.age;
		parking = store.eventDetails.parking;
		contact = store.eventDetails.number;
		location = store.eventDetails.location;
		cover = store.eventDetails.cover;
	}

	// CALCULATED INFO
	let eventTypeDesc = "Tipo de Evento";
	let descriptionTitle = "Título Descripción";
	let detailsTitle = "Detalles del Evento";
	switch (resource) {
		case 'fiesta':
			eventTypeDesc = "Evento Musical";
			descriptionTitle = "¡No te pierdas este evento!";
			detailsTitle = "Detalles del Evento";
			break;
		case 'restaurante':
			eventTypeDesc = "Restaurante";
			descriptionTitle = "¡No te pierdas este lugar!";
			detailsTitle = "Detalles del Lugar";
			break;
		case 'diversion':
			eventTypeDesc = "Diversión";
			descriptionTitle = "¡No te pierdas esta oportunidad!";
			detailsTitle = "Detalles del Evento";
			break;
		case 'discoteca':
			eventTypeDesc = "Discoteca";
			descriptionTitle = "¡No te pierdas esta maravilla!";
			detailsTitle = "Detalles de la Disco";
			break;
	}


	return (
		<div>
			<section>
				<div className={`parallax parallax-${resource}`}>
					<div className="mx-5">
						<br /><br /><br /><br /><br /><br /><br /><br /><br />
						<h1 className="display-3 ms-5 fw-bolder">{eventTypeDesc.toUpperCase()}</h1>
						<h1 className="display-6 ms-5 fw-bold fst-italic mt-5">{eventName}</h1>
						<h1 className="display-6 ms-5 fw-normal fst-italic">{datetime}</h1>
						<br /><br />
					</div>
				</div>
			</section>
			<section>
				<div className="description">
					<div className="container text-center text-white">
						<br /><br /><br />
						<h1 className="display-5 fw-bold">{descriptionTitle}</h1>
						<p className="mt-4 mx-5 description-text">{description}</p>
						<br /><br />
					</div>
				</div>
			</section>
			<section>
				<div className={`details-info details-${resource}`}>
					<div className="container">
						<br /><br />
						<h1 className="display-5 text-center fw-bold">{detailsTitle}</h1>

						<div className="row">
							<div className="col-12 col-lg-6 mt-5 px-5">
								<img
									className="img-fluid"
									// src="https://images.squarespace-cdn.com/content/v1/551e1babe4b0aa77af01e45f/1429734404086-OAWOO1Y07LMCDBF859MR/San_Diego_Event_Dj_David_Cutler.jpg?format=1500w"
									src = {store.eventDetails.photo}
									/>
							</div>
							<div className={`col-12 col-lg-6 mt-5 px-5 info-detail info-${resource}`} >
								<p><span>Tipo:</span> {eventTypeDesc}</p>
								<p><span>T&iacute;tulo:</span> {eventName}</p>
								<p><span>Fecha y Hora:</span> {datetime}</p>
								<p><span>Capacidad:</span> {capacity}</p>
								<p><span>Edad M&iacute;nima:</span> {minAge}</p>
								<p><span>Estacionamiento:</span> {parking}</p>
								<p><span>Contacto:</span> {contact}</p>
								<p><span>Ubicaci&oacute;n:</span> {location}</p>
								<p><span>Costo:</span> {cover}</p>
							</div>
						</div>
						<br /><br />
					</div>
				</div>
			</section>
			<section>
				<div id="mapContainer">
					<div id="map"></div>
				</div>
			</section>
		</div>
	)
}


function initMap(_lat, _lng) {
	let mapDiv = document.getElementById('map');
	if (!mapDiv) return;

	let position = { lat: _lat, lng: _lng };
	let mapOptions = {
		center: position,
		zoom: 17,
		disableDefaultUI: true
	};
	let map = new google.maps.Map(mapDiv, mapOptions);

	let marker = new google.maps.Marker({
		map: map,
		position: position,
		draggable: false,
		anchorPoint: new google.maps.Point(0, -29)
	});
}

document.addEventListener("DOMContentLoaded", function (event) {
	initMap(10.481229140990079, -66.8609878783568);
});