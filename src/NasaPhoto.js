import React from "react";
import Nasa from "./Nasa";
import Styled from "styled-components";

const NasaPhotos = Styled.h2`
background-color : cyan;
font-size: 30px;
padding: 45px;
border: 10px solid hotpink;
margin-top: -5px;
`;

const Nasapara = Styled.p`

background-color : pink;
padding: 45px;
font-weight: bold;
border: 2px dotted cyan;
margin-top: -25px;
transition: 5s fade-in;

`;
const NasaPic = Styled.div`
height: auto;
background-color: yellow;
padding: 70px;
margin-top: -25px;
border: 10px dotted cyan;
`;
const NasaPhoto = props => {
    return (
        <div className="nasa_image">
            <NasaPhotos>{props.Title}</NasaPhotos>
            <Nasapara>{props.description}</Nasapara>
            <NasaPic>
                <img className='mainimg' src={props.image} />
            </NasaPic>
            <div className="bottom">
                <p>Copyright: {props.Copyright}</p>
                <p>Date: {props.Date}</p>
            </div>
        </div >
    );
};
export default NasaPhoto;