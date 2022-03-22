import React from "react";
import "../../styles/home.css";

export const Home = () => (
	<div className="container container-form">
		{/* <!---heading----> */}
		<header className="heading">Planea tu pr&oacute;ximo evento</header>

		<br/>
		{/* <!---Form starting----> */}
		<div className="row ">
			{/* <!--- For Name----> */}
			<div className="col-xs-8">
				<label className="labelInput">Name*</label> 
			</div>
			<div className="col-xs-8 d-flex justify-content-center">
				<input type="text" name="fname" id="fname" placeholder="Enter your First Name" className="form-control " />
			</div>
		</div>
		<div className="row ">
			{/* <!-----For email----> */}
			<div className="col-sm-12">
				<div className="row">
					<div className="col-xs-8">
						<label className="labelInput" >Email*</label>
					</div>
					<div className="col-xs-8 d-flex justify-content-center textInput">
						<input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" />
					</div>
				</div>
			</div>
		</div>
		<div className="row ">
			{/* <!-----For Password and confirm password----> */}
			<div className="col-sm-12">
				<div className="row">
					<div className="col-xs-8">
						<label className="labelInput">Password*</label>
					</div>
					<div className="col-xs-8 d-flex justify-content-center textInput">
						<input type="password" name="password" id="password" placeholder="Enter your Password" className="form-control" />
					</div>
				</div>
			</div>
			{/* <!-----------For Type of user--------> */}
			<div className="col-sm-12">
				<div className="row">
					<div className="col-12">
						<label className="labelInput">Type of user</label>
					</div>
					<div className="col-12 radioLabel">
						<input type="radio" id="userType" value="personal" />&nbsp;&nbsp;Personal
						&nbsp;&nbsp;&nbsp;&nbsp;
						<input type="radio" id="userType" value="comercial" />&nbsp;&nbsp;Comercial
					</div>
				</div>
				<div className="col-sm-12">
					<div className="btn btn-lg btn-submit">Submit</div>
				</div>
			</div>
		</div>
	</div>
)
