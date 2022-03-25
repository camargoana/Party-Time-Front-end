import React from "react";
import "../../styles/style.css";
import fondo from "../../img/fondo2.jpg"

export const Login = () => {
	return ( 
	<div>
		<div id="overlay"></div>
		<div id="bg" style={{ backgroundImage: `url(${fondo})` }} >
			<div className="container-home container-form">
				{/* <!---heading----> */}
				<header className="heading">Login</header>

				<br/>
				{/* <!---Form starting----> */}
				<div className="row ">
					{/* <!--- For Name----> */}
					<div className="col-xs-8">
						<label className="labelInput">Username</label> 
					</div>
					<div className="col-xs-8 d-flex justify-content-center">
						<input type="text" name="fname" id="fname" className="form-control " />
					</div>
				</div>
				<div className="row ">
					{/* <!-----For Password and confirm password----> */}
					<div className="col-sm-12">
						<div className="row">
							<div className="col-12">
								<label className="labelInput">Password</label>
							</div>
							<div className="col-12 d-flex justify-content-center textInput">
								<input type="password" name="password" id="password" className="form-control" />
							</div>
						</div>
					</div>
					{/* <!-----------For Type of user--------> */}
					<div className="col-sm-12">
						<div className="col-sm-12">
							<div className="btn btn-lg btn-submit">Sign In</div>
						</div>
                        <div className="col-sm-12">
							<div className="btn btn-lg btn-submit">Sign Up</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)
	}