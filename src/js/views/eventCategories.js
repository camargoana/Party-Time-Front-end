import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/eventCategories.css";
import { useParams } from "react-router-dom";

export const EventCategories = () => {
	const APP_TEST = true;
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		if (params.id) {
			actions.getEventDetails(params.id)
		}
	}, []);

	let resource;



	// DATABASE INFO
	if (APP_TEST) {
		resource = "discoteca";
		// 	eventName = "Nombre del Evento";
		// 	datetime = "21 Abril 2022 - 8pm";
		// 	description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		// 		+ "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
		// 	 	+ ", when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
		// 	capacity = "4.000 personas";
		// 	minAge = "21 años";
		// 	parking = "Sí hay";
		// 	contact = "(+58)000-00-00";
		// 	location = "Las Mercedes, Caracas"
		// 	cover = "Costo del evento"

	} else {
		resource = store.eventDetails.type_of_event;
		categorieName = store.eventDetails.categorie_name;
	}

	// CALCULATED INFO
	let categorieName = "Categoria";
	switch (resource) {
		case 'fiesta':
			categorieName = "FIESTAS";
			break;
		case 'restaurante':
			categorieName = "RESTAURANTES";
			break;
		case 'diversion':
			categorieName = "DIVERSIÓN";
			break;
		case 'discoteca':
			categorieName = "DISCOTECA";
			break;
	}


	return (
		<div>

			<div className={`bg-categories-${resource}`}>
				<div>
					<h2 id='categories-title'>{categorieName.toUpperCase()}</h2>
				</div>
				<div className="row px-2 pb-5" id="fila-eventos">
					{/* MAPEO DE TODOS LOS EVENTOS EXISTENTES */}
					<div className="d-flex flex-row flex-nowrap overflow-auto">
						{store.events.map((event, index) => {
							return <Card key={event.id} event={event} />
						})}
					</div>
					{/* <Card /> */}
					{/* <div className="col-sm-3">
						<div className="card">
							<img
								className="card-img-top"
								src="https://i.ibb.co/QjGFFtK/disco-hands.jpg"
								alt="Card image cap"
								height={235}
							/>
							<div className="card-body">
								<h5 className="card-title">Card Title</h5>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<a href="#" className="btn btn-info">
									Find Out More!
								</a>
							</div>
						</div>
					</div> */}
				</div>            
				</div>

		</div>
	)
}

