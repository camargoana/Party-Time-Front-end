import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/logo-white.png"

export const Navbar = () => {
	const history = useHistory()
	return (
		<nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">

			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img src={logo} alt="Party-Time" border="0" height="60px" style={{ marginTop: "-8px", marginBottom: "-8px" }} />
				</Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto mb-2 mb-lg-0">
						<a className="nav-link active" aria-current="page" href="#">Categories</a>
						<a className="nav-link active" aria-current="page" href="#">Favorites</a>
						<a className="nav-link active" aria-current="page" href="#">Services</a>
						<div>
							{!sessionStorage.Token
								? <div>
									<Link to="/signin">
										<button className="nav-links nav-links-btn" href="#">Sign In</button>
									</Link>
								</div>
								: <div>
									<button
										className="nav-links nav-links-btn"
										href="#"
										onClick={async (e) => {
											sessionStorage.Token = "";
											history.push("/")
											setLogUser({
												email: "",
												password: "",
											})
										}}
									>Log Out</button>
								</div>
							}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};