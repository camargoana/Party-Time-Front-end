import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="container">
		{/* <!---heading----> */}
		<header className="heading">Formulario de Registro</header><hr></hr>
		{/* <!---Form starting----> */}
		<div className="row ">
			{/* <!--- For Name----> */}
			<div className="col-xs-4">
				<label className="name">Name:</label> </div>
			<div className="col-xs-8">
				<input type="text" name="fname" id="fname" placeholder="Enter your First Name" className="form-control " />
			</div>
		</div>
		<div className="row ">
			{/* <!-----For email----> */}
			<div className="col-sm-12">
				<div className="row">
					<div className="col-xs-4">
						<label className="mail" >Email:</label></div>
					<div className="col-xs-8"	>
						<input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" />
					</div>
				</div>
			</div>
		</div>
		<div className="row ">
			{/* <!-----For Password and confirm password----> */}
			<div className="col-sm-12">
				<div className="row">
					<div className="col-xs-4">
						<label className="pass">Password:</label></div>
					<div className="col-xs-8">
						<input type="password" name="password" id="password" placeholder="Enter your Password" className="form-control" />
					</div>
				</div>
			</div>
			{/* <!-----------For Type of user--------> */}
			<div className="col-sm-12">
				<div className="row">
					<div className="col-xs-4 ">
						<label className="gender">Type of user:</label>
					</div>
					<div className="col-xs-4 male">
						<input type="radio" name="gender" id="gender" value="boy" />Personal
					</div>
					<div className="col-xs-4 female">
						<input type="radio" name="gender" id="gender" value="girl" />Comercial
					</div>
				</div>
				<div className="col-sm-12">
					<div className="btn btn-warning">Submit</div>
				</div>
			</div>
		</div>
	</div>
)
