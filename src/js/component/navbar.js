import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
			
			<div className="container-fluid">
				<a className="navbar-brand" href="#"><img src="https://i.ibb.co/zbt990P/Party-Time.png" alt="Party-Time" border="0" width={'150'} height={'60'}></img></a>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto mb-2 mb-lg-0">
						<a className="nav-link active" aria-current="page" href="#">Categor&iacute;as</a>
						<a className="nav-link active" aria-current="page" href="#">Favoritos</a>
						<a className="nav-link active" aria-current="page" href="#">Servicios</a>
						<Link to="/login" className="nav-links nav-links-btn">Sign In</Link>
						<a className="nav-links nav-links-btn" href="#">Sign Up</a>
						<a className="nav-links nav-links-btn" href="#">Log Out</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
