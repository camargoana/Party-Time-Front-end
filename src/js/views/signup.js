// import React from "react";
// import "../../styles/style.css";
// import fondo from "../../img/fondo3.jpg"

// export const SignUp = () => {
// 	return ( 
// 	<div>
// 		<div id="overlay"></div>
// 		<div id="bg" style={{ backgroundImage: `url(${fondo})` }} >
// 			<div className="container-home container-form">
// 				{/* <!---heading----> */}
// 				<header className="heading">Planea tu pr&oacute;ximo evento</header>

// 				<br/>
// 				{/* <!---Form starting----> */}
// 				<div className="row ">
// 					{/* <!--- For Name----> */}
// 					<div className="col-xs-8">
// 						<label className="labelInput">Name*</label> 
// 					</div>
// 					<div className="col-xs-8 d-flex justify-content-center">
// 						<input type="text" name="fname" id="fname" className="form-control " />
// 					</div>
// 				</div>
// 				<div className="row ">
// 					{/* <!-----For email----> */}
// 					<div className="col-sm-12">
// 						<div className="row">
// 							<div className="col-xs-8">
// 								<label className="labelInput" >Email*</label>
// 							</div>
// 							<div className="col-xs-8 d-flex justify-content-center textInput">
// 								<input type="email" name="email" id="email" className="form-control" />
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="row ">
// 					{/* <!-----For Password and confirm password----> */}
// 					<div className="col-sm-12">
// 						<div className="row">
// 							<div className="col-12">
// 								<label className="labelInput">Password*</label>
// 							</div>
// 							<div className="col-12 d-flex justify-content-center textInput">
// 								<input type="password" name="password" id="password" className="form-control" />
// 							</div>
// 						</div>
// 					</div>
// 					{/* <!-----------For Type of user--------> */}
// 					<div className="col-sm-12">
// 						<div className="row">
// 							<div className="col-12">
// 								<label className="labelInput">Type of user</label>
// 							</div>
// 							<div className="col-12 radioLabel">
// 								<input type="radio" name="userType" value="personal" />&nbsp;&nbsp;Personal
// 								&nbsp;&nbsp;&nbsp;&nbsp;
// 								<input type="radio" name="userType" value="comercial" />&nbsp;&nbsp;Commercial
// 							</div>
// 						</div>
// 						<div className="col-sm-12">
// 							<div className="btn btn-lg btn-submit">Submit</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// )
// 	}
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/signup.css";
import fondo from "../../img/fondo.jpg"


export const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        type_of_user: ""
    });

    const history = useHistory()
    console.log(history)

    const createUser = async (user) => {
        const response = await fetch(
            "http://127.0.0.1:5000/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            }
        );
        const body = await response.json();
        if (!response.ok) {
            alert(`Fallo el Registro: ${response.status}: ${body.msg}`);
            return false
        }
        else {
            return true
        }
    }
    console.log(user);
    return (
        <div>
            <div id="overlay"></div>
            <div id="bg" style={{ backgroundImage: `url(${fondo})` }} >
                <div className="container container-form">
                    {/* <!---heading----> */}
                    <header className="heading">Planea tu pr&oacute;ximo evento</header>
                    <br />
                    {/* <!---Form starting----> */}
                    <div className="row ">
                        {/* <!--- For Name----> */}
                        <div className="col-xs-8">
                            <label className="labelInput">Name*</label>
                        </div>
                        <div className="col-xs-8 d-flex justify-content-center">
                            <input
                                type="text"
                                name="fname"
                                id="fname"
                                className="form-control "
                                value={user.name}
                                // required
                                onChange={(e) => {
                                    setUser({
                                        name: e.target.value,
                                        email: user.email,
                                        password: user.password,
                                        type_of_user: user.type_of_user
                                    });
                                }}
                            />
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
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        value={user.email}
                                        // required
                                        onChange={(e) => {
                                            setUser({
                                                name: user.name,
                                                email: e.target.value,
                                                password: user.password,
                                                type_of_user: user.type_of_user
                                            });
                                        }}
                                    />
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
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        value={user.password}
                                        // required
                                        onChange={(e) => {
                                            setUser({
                                                name: user.name,
                                                email: user.email,
                                                password: e.target.value,
                                                type_of_user: user.type_of_user
                                            });
                                        }}
                                    />
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
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="personal"
                                        onClick={(e) => {
                                            setUser({
                                                name: user.name,
                                                email: user.email,
                                                password: user.password,
                                                type_of_user: e.target.value
                                            });
                                        }}
                                    />&nbsp;&nbsp;Personal
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="comercial"
                                        onClick={(e) => {
                                            setUser({
                                                name: user.name,
                                                email: user.email,
                                                password: user.password,
                                                type_of_user: e.target.value
                                            });
                                        }}
                                    />&nbsp;&nbsp;Commercial
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <button
                                    className="btn btn-lg btn-submit"
                                    onClick={async (e) => {
                                        // console.log(user)
                                        const userCreated = await createUser(user);
                                        if (userCreated == true) {
                                            history.push("/")
                                        }
                                        else {
                                            alert("Algo paso")
                                        }
                                        setUser({
                                            name: "",
                                            email: "",
                                            password: "",
                                            type_of_user: ""
                                        })
                                    }}
                                >Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
