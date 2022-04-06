import React from "react";
import "../../styles/categories.css";

export const Categories = () => {

    return (
        <div>
            
            <div className="py-5" id="bg-categories">
            <div>
                <h2 id='categories-title'>CATEGOR&Iacute;AS</h2>
            </div>
                <div className="row d-flex justify-content-center">
                    <div className="container-categories mx-3 col-sm-4 zoom party">
                    <a href="/categories/:id"><h1 className="center">FIESTAS</h1></a>
                    </div>
                    <div className="container-categories mx-3 col-sm-4 zoom restaurant">
                    <a href="/categories/:id"><h1 className="center">RESTAURANTES</h1></a>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="container-categories mx-3 col-sm-4 zoom fun">
                    <a href="/categories/:id"><h1 className="center">DIVERSI&Oacute;N</h1></a>
                    </div>
                    <div className="container-categories mx-3 col-sm-4 zoom disco">
                    <a href="/categories/:id"><h1 className="center">DISCOTECAS</h1></a>
                    </div>
                </div>
            </div>

            {/* <div className="container mt-5">
		<div className="row">
			<div className="col-md-6">
				<div className="outer-div">
					<div className="inner-div1">
						<h1 className="zoom-box-text">CLUBES</h1>
					</div>
				</div>
			</div>

			<div className="col-md-6">
				<div className="outer-div">
					<div className="inner-div2">
						<h1 className="zoom-box-text">BARES</h1>
					</div>
				</div>
			</div>
		</div>
	</div> */}
        </div>
    )
}
