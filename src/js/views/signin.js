import React, { useState } from "react";
import "../../styles/style.css";
import fondo from "../../img/fondo2.jpg"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


export const Signin = () => {
	const [logUser, setLogUser] = useState({
		email: "",
		password: "",
	});
	const history = useHistory()
	const logInUser = async (logUser) => {
		const response = await fetch(
			"http://127.0.0.1:5000/login",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(logUser)
			}
		)
		const token = await response.json();
		if (!response.ok) {
			alert(`Fallo el logIN: ${response.status}: ${token.msg}`);
			return false
		}
		else {
			sessionStorage.Token = token
			return true
		}
	}

	return (
		<div>
			{/* <div id="overlay"></div> */}
			<div id="bg" style={{ backgroundImage: `url(${fondo})` }} >
				<div className="container-home container-form">
					{/* <!---heading----> */}
					<header className="heading">Login</header>
					<div>
						<br />
						{/* <!---Form starting----> */}
						<div className="row ">
							{/* <!--- For Name----> */}
							<div className="col-xs-8">
								<label className="labelInput">Email</label>
							</div>
							<div className="col-xs-8 d-flex justify-content-center">
								<input
									type="text"
									name="email"
									id="email"
									className="form-control "
									value={logUser.email}
									required
									onChange={(e) => {
										setLogUser({
											email: e.target.value,
											password: logUser.password,
										});
									}}
								/>
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
										<input
											type="password"
											name="password"
											id="password"
											className="form-control"
											value={logUser.password}
											required
											onChange={(e) => {
												setLogUser({
													email: logUser.email,
													password: e.target.value,
												});
											}}
										/>
									</div>
								</div>
							</div>
							{/* <!-----------Log in button--------> */}
							<div className="col-sm-12">
								<div className="col-sm-12">
									<button
										className="btn btn-lg btn-submit"
										onClick={async (e) => {
											// console.log(user)
											const userLogged = await logInUser(logUser);
											if (userLogged == true) {
												history.push("/private")
											}
											else {
												alert("Algo paso")
											}
											setLogUser({
												email: "",
												password: "",
											})
										}}
									>Log In!</button>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12 pt-4" >
								<span className="labelInput">Does not have an account</span>
								&nbsp;&nbsp;<Link to="/signup" >Create an account</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}