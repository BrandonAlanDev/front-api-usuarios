import React from "react";

const Product = (props) => {
    return (
        <button
            className={props.clases ? props.clases : `m-2.5 rounded-md p-2.5 bg-white-primary museo-900 text-bold text-xl ${props.addClass ? props.addClass : ""}`}
            onClick={() => {}}
        >
            <div className="flex flex-col justify-center items-center gap-5">
                <p>{props.nombre}</p>
                <img src={`src/Assets/Images/Graphics/${props.imagen}`} alt="imagen del producto" className="w-5/6 h-auto" />
                <p>{props.fabricante}</p>
                <p>${props.precio}</p>
            </div>
        </button>
    );
};

export default Product;