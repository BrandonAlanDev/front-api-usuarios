import React from "react";
import { Link } from "react-router-dom";

const Footer=(props)=>{
    return(
    <>
        <div className="w-screen flex flex-col bg-dark-primary text-white justify-around items-center gap-4 p-2 border-t-2">
                <p className="museo-900 font-bold text-2xl">FOOTER</p>
            <div className="w-full flex flex-col sm:flex-row justify-evenly items-start gap-4 museo-900 font-bold text-md">
                    <div className="flex flex-col">
                    <h2 className="text-xl">Telefono</h2>
                    {props.telefonos.map((p,index)=>{return(
                        <p
                            className=""
                            key={index}
                            >{p}
                        </p>)})}
                    </div>
                    <br />
                    <div className="flex flex-col">
                    <h2 className="text-xl">Direcciones</h2>
                    {props.direcciones.map((p,index)=>{return(
                        <p
                            className=""
                            key={index}
                            >{p}
                        </p>)})}
                    </div>
            </div>
        </div>
    </>
    );
}

export default Footer;