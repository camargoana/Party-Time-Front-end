import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    return (
        <div className="col-sm-3">
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
        </div>
    )
}