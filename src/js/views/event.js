import React from "react";
import "../../styles/event.css";

export const Event = () => {

	return (
		<div>
			<section>
				<div className={`parallax parallax-party`}>
					<div className="mx-5">
						<br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<h1 className="display-3 ms-5 fw-bolder">MUSICAL EVENT</h1>
						<h1 className="display-6 ms-5 fw-bold fst-italic mt-5">Live rocking music</h1>
						<h1 className="display-6 ms-5 fw-normal fst-italic">April 21, 2022 - 8pm</h1>
						<br/><br/>
					</div>
				</div>
			</section>
			<section>
				<div className="description">
					<div className="container text-center text-white">
						<br/><br/><br/>
						<h1 className="display-5 fw-bold">Don't Miss This Event</h1>
						<p className="mt-4 mx-5 description-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
							, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<br/><br/>
					</div>
				</div>
			</section>
			<section>
				<div className={`details-info details-party`}>
					<div className="container">
						<br/><br/>
						<h1 className="display-5 text-center fw-bold">Event details</h1>

						<div className="row mt-5">
							<div className="col-6 px-5">
								<img className="img-fluid" src="https://images.squarespace-cdn.com/content/v1/551e1babe4b0aa77af01e45f/1429734404086-OAWOO1Y07LMCDBF859MR/San_Diego_Event_Dj_David_Cutler.jpg?format=1500w" />
							</div>
							<div className={`col-6 px-5 info-detail info-party`} >
								<p><span>Type:</span> Music event</p>
								<p><span>Title:</span> Live rocking music</p>
								<p><span>Datetime:</span> April 21, 2022 - 8pm</p>
								<p><span>Capacity:</span> 4.000 people</p>
								<p><span>Min Age:</span> 21 years old</p>
								<p><span>Parking:</span> Yes, there is!</p>
								<p><span>Contact:</span> (+58)000-00-00</p>
							</div>
						</div>
						<br/><br/>
					</div>
				</div>
			</section>
		</div>
	)
}
