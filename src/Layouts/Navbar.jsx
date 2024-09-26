import React, { useState } from "react";
import Boton from "../Components/Boton";
import { useNavigate } from "react-router-dom";
import imagen from "../Assets/Images/perro.jpg";
import { Link } from "react-router-dom";
import FunctionButton from "../Components/Buttons/FunctionButton";

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [perroIsOpen, setPerroIsOpen] = useState(false);
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        window.location.replace("/");
    }
    let direcciones=[];
    if(localStorage.getItem("usrData")){
        direcciones = props.rutas
    }

    return (
        <>
            <div className="flex flex-col fixed museo-900 text-bold superior">
            <header className="w-screen h-25 lg:h-16 bg-dark-primary flex items-center justify-between border-b-2">
                <div className="flex flex-row items-center justify-between">
                    <Boton texto="Menu de Navegacion" funcion={() => setIsOpen(!isOpen)} />
                    <Boton addClass="collapse md:visible" texto="Perro de Boca" funcion={() => setPerroIsOpen(!perroIsOpen)} />
                </div>
                    <Boton addClass="collapse md:visible" texto="BrandonAlanDev" funcion={() => navigate("/Inicio")} />
                    {
                    props.usrData && (
                        <div>   
                            <span className="text-white select-none museo-900 text-xl">
                                <strong>
                                {props.usrData.name}
                                </strong>
                            </span>
                            &nbsp;
                            &nbsp;
                            <Boton
                                texto={'LogOut'}
                                funcion={() => {logOut()}}
                            />
                        </div>
                        )
                    }
                </header>
                {isOpen && <div className="flex flex-col w-[100vw] md:w-[25vw] bg-dark-primary border-b-2 border-r-2">
                {props.rutas.map((p,index)=>{return(
                    <Boton
                        className=" m-2.5 rounded-md p-2.5 bg-white-primary font-museo300"
                        funcion={()=>{
                            navigate(p.to);
                            setIsOpen(false);
                        }}
                        key={index}
                        texto={p.text}
                        >
                    </Boton>
                    )})}
                </div> }
            </div>
            {perroIsOpen && <div className=" fixed items-center justify-center mt-20 ml-[40vw] z-50"><img src={imagen} className=" w-[25vw]" alt="Imagen" /></div>}
        </>
    );
};

export default Navbar;