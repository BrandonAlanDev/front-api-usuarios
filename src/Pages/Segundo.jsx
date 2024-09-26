import React from "react";
import Boton from "../Components/Boton.jsx"
import Navbar from "../Layouts/Navbar.jsx";
import france from "../Assets/Images/images.jpg";
import video from "../Assets/Images/penal.mp4"

const Inicio=()=>{
    return(
        <>
        <div className="bg-black">
            <div className="video-background">
                <video autoPlay loop muted playsInline className="video">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="content">
                </div>
            </div>
        </div>
        </>
    )
}

export default Inicio;