import React from "react";

const NasaPhoto = props => {
    return (
        <div className="nasa_image">
            <h2>{props.Title}</h2>
            <p>{props.description}</p>
            <img src={props.image} />
            <div className="bottom">
                <p>Copyright: {props.Copyright}</p>
                <p>Date: {props.Date}</p>
            </div>
        </div >
    );
};
export default NasaPhoto;