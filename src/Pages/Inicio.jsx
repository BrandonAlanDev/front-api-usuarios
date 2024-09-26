import React from "react";
import Boton from "../Components/Boton.jsx"
import Navbar from "../Layouts/Navbar.jsx";
import { GRAPHICS } from "../env.jsx";
import Product from "../Components/Product.jsx";

const Inicio=()=>{
    return(
        <>
        <div className="w-screen min-h-screen bg-black">
            <div className="fondo-inicio mx-auto w-screen min-h-screen flex flex-col gap-3">
                <div className="mx-auto mt-20 mb-5 flex flex-row p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {GRAPHICS.map((g) => (
                        <Product
                            key={g.id}
                            nombre={g.name}
                            fabricante={g.fabricante}
                            precio={g.precio}
                            imagen={g.srcName}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Inicio;
{/*}

*/}