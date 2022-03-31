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
                        <h1 className="center">Fiestas</h1>
                    </div>
                    <div className="container-categories mx-3 col-sm-4 zoom restaurant">
                        <h1 className="center">Restaurantes</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="container-categories mx-3 col-sm-4 zoom fun">
                        <h1 className="center">Divsersi&oacute;n</h1>
                    </div>
                    <div className="container-categories mx-3 col-sm-4 zoom disco">
                        <h1 className="center">Discotecas</h1>
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
