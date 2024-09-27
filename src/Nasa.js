import React, { useState, useEffect, } from "react";
import axios from "axios";
import NasaPhoto from "./NasaPhoto";



export default function Nasa() {

    const [nasa, SetPictures] = useState([0]);


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                // console.log(response.data)
                SetPictures(response.data)
            })
            .catch(error => {
                console.log("data not returned", error)
            });
    }, [])

    return (
        <div className="nasapic">
            <NasaPhoto

                Title={nasa.title}
                Copyright={nasa.copyright}
                description={nasa.explanation}
                Date={nasa.date}
                image={nasa.url}

            />
        </div>
    )
}


