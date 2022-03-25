import React from "react";
import "../../styles/style.css";
import fondo from "../../img/intro.jpeg"
import logo from "../../img/logo-black.png"

export const Home = () => {
	return ( 
	<div>
		<div id="overlay-light"></div>
		<div id="bg" style={{ backgroundImage: `url(${fondo})` }} >
			<div className="container-intro container-form">
				<img src={logo} alt="Party-Time" border="0" height="250px" />
			</div>
		</div>
	</div>
);
