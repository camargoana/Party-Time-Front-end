import React from "react";
import "../../styles/home.css";
import fondo from "../../img/intro.jpg"
import logo from "../../img/logo-black.png"
import { Card } from "../component/card";

export const Home = () => {
	return (
		// PAGINA DE INICIO DE LA APLICACION (TIPO FEED DE EVENTOS DISPONIBLES)
		<div className="position-relative">
			<div id="bg-home" style={{ backgroundImage: `url(${fondo})` }} >
				{/* <div classNameName="container-intro container-form">
					<img src={logo} alt="Party-Time" border="0" height="250px" />
				</div> */}
				{/* CAROUSEL */}
				<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="https://i.ibb.co/KsrDwb2/dj.jpg" height='725' className="d-block w-100" alt="..."></img>
							<div className="carousel-caption d-none d-md-block">
								<p className="slider-title">LOS MEJORES EVENTOS</p>
								<p className="slider-text">REUNIDOS EN UN SOLO LUGAR</p>
								<p className="mt-5">
									<a className="btn btn-lg btn-success" href="#scrollToEvent">VER EVENTOS</a>&nbsp; &nbsp;
									<a className="btn btn-danger btn-lg">PUBLICAR MI EVENTO</a>
								</p>
							</div>
						</div>
						{/* <div className="carousel-item">
							<img src="https://i.ibb.co/d7BJLw0/disco-o.jpg" height='725' className="d-block w-100" alt="..."></img>
							<div className="carousel-caption d-none d-md-block">
								<p className="slider-title">Descuentos al pagar con tarjeta<i className="fa fa-credit-card-alt"
									aria-hidden="true"></i></p>
								<p className="slider-text">Hasta 50% de descuento en los mejores locales</p>
								<p className="buttob mt-5"> <a className="btn btn-lg btn-success">Reservar</a>&nbsp; &nbsp; <a
									className="btn btn-danger btn-lg">Más información</a></p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="https://i.ibb.co/QjGFFtK/disco-hands.jpg" height='725' className="d-block w-100" alt="..."></img>
						</div> */}
					</div>
					{/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button> */}
				</div>

				{/* TITULO */}
				<div className="scroll-container container-title" id="scrollToEvent">
					<h1 className="text-center my-5 text-black">EVENTOS</h1>
				</div>

				{/* MAS VISTOS */}
				<div className="row px-2 pb-5" id="fila-eventos">
					{/* MAPEO DE TODOS LOS EVENTOS EXISTENTES */}
					{/* <div className="d-flex flex-row flex-nowrap overflow-auto">
						{context.store.events.map((event, index) => {
							return <Card key={event.id} />
						})}
					</div> */}
					<Card />
					{/* <div className="col-sm-3">
						<div className="card">
							<img
								className="card-img-top"
								src="https://i.ibb.co/QjGFFtK/disco-hands.jpg"
								alt="Card image cap"
								height={235}
							/>
							<div className="card-body">
								<h5 className="card-title">Card Title</h5>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<a href="#" className="btn btn-info">
									Find Out More!
								</a>
							</div>
						</div>
					</div> */}
				</div>

				{/* TITULO2
				<div className="container-title">
					<div className="row mt-5 mb-5">
						<div className="col-md-12">
							<h1 className="text-center">MÁS RECIENTES</h1>
						</div>
					</div>
				</div> */}

				{/* MAS RECIENTES */}
				{/* TITULO
				<div className="container-title">
					<div className="row mt-5 mb-5">
						<div className="col-md-12">
							<h1 className="text-center">TITULO</h1>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	)
}
