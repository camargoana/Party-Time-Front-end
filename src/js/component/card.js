import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


export const Card = (event) => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    return (
        <div className="col-sm-3">
            <div className="card">
                {/* <img
                    className="card-img-top"
                    src={store.event.photo}
                    alt="Card image cap"
                    height={235}
                /> */}
                <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">
                        {store.event.description}
                    </p>
                    <Link to="/party/1" className="btn btn-info">
                        Find Out More!
                    </Link>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    event: PropTypes.object,
};