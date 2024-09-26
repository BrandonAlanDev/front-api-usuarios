import React from "react";

const Boton=(props)=>{
    return(
        <button
            className={props.clases ? props.clases : `m-2.5 rounded-md p-2.5 bg-white-primary museo-900 text-bold text-xl ${props.addClass? props.addClass : ""}`}
            onClick={props.funcion}
        >
            {props.texto}
        </button>
    )
}

export default Boton;