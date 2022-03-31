import React from "react";
import "../../styles/event.css";

export const Event = () => {

	// DATABASE INFO
	const eventType = "diversion";
	const eventName = "Event Name";
	const datetime = "April 21, 2022 - 8pm";
	const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		+ "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
		+ ", when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
	const capacity = "4.000 people";
	const minAge = "21 years old";
	const parking = "Yes, there is!";
	const contact = "(+58)000-00-00";

	// CALCULATED INFO
	let resource = "";
	let eventTypeDesc = "Event Type";
	let descriptionTitle = "Description Title";
	let detailsTitle = "Event Details";
	switch (eventType) {
		case 'fiesta':
			resource = 'party';
			eventTypeDesc = "Musical Event";
			descriptionTitle = "Don't Miss This Event";
			detailsTitle = "Event details";
			break;
		case 'restaurante':
			resource = 'restaurant';
			eventTypeDesc = "Restaurant";
			descriptionTitle = "Don't Miss This Place";
			detailsTitle = "Place details";
			break;
		case 'diversion':
			resource = 'diversion';
			eventTypeDesc = "Diversion Event";
			descriptionTitle = "Don't Miss This Opportunity";
			detailsTitle = "Event details";
			break;
		case 'discoteca':
			resource = 'disco';
			eventTypeDesc = "Disco place";
			descriptionTitle = "Don't Miss This Amazing Time";
			detailsTitle = "Disco details";
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
								<img className="img-fluid" src="https://images.squarespace-cdn.com/content/v1/551e1babe4b0aa77af01e45f/1429734404086-OAWOO1Y07LMCDBF859MR/San_Diego_Event_Dj_David_Cutler.jpg?format=1500w" />
							</div>
							<div className={`col-12 col-lg-6 mt-5 px-5 info-detail info-${resource}`} >
								<p><span>Type:</span> {eventTypeDesc}</p>
								<p><span>Title:</span> {eventName}</p>
								<p><span>Datetime:</span> {datetime}</p>
								<p><span>Capacity:</span> {capacity}</p>
								<p><span>Min Age:</span> {minAge}</p>
								<p><span>Parking:</span> {parking}</p>
								<p><span>Contact:</span> {contact}</p>
							</div>
						</div>
						<br /><br />
					</div>
				</div>
			</section>
		</div>
	)
}
