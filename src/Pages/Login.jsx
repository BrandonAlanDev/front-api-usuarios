import TextInput from "../Components/Inputs/TextInput";
import Boton from "../Components/Boton";
import { useState} from "react";
import { POST } from "../Services/Fetch";
import { Link, useNavigate} from "react-router-dom";


const Login = () => {

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    

    const submmitLogin = async () => {
        if (!formData?.name || !formData.password) {
            window.alert("Complete los campos para continuar.");
            return;
        }else
        {
            // FETCH POST AL LOGIN

            const loginData = {
                Username: formData.name,
                Password: formData.password
            };

            POST("login", loginData)
                .then(res => {
                    
                    if (res?.accessToken) {
                        // GUARDAR EL TOKEN
                        localStorage.setItem("jwtToken", res.accessToken);
            
                        // GUARDAR DATOS DE USUARIO
                        const userData = {
                            name: formData.name,
                            time: new Date(Date.now()).toDateString()
                        };
                        localStorage.setItem("usrData", JSON.stringify(userData));
                        window.location.replace("/inicio");
                    } else {
                        window.alert("Error: No se recibió un token de autenticación.");
                    }
                })
            }
    }


    return(
        <div className="min-w-[100vw] min-h-[100vh] flex flex-col items-center justify-evenly fondo-black museo-900 text-bold">
            <div className="flex flex-col items-center justify-evenly bg-black-trasp">
                <h1 className="text-3xl text-white">Inicio de Sesión</h1>
                <div className="flex flex-col items-center justify-evenly min-h-[40vh]">
                    <TextInput 
                        type={'text'}
                        callback={(e) => {setFormData({...formData, name:e.target.value})}}
                        placeholder={'Nombre de usuario'}
                        />
                    <TextInput 
                        type={'password'}
                        callback={(e) => {setFormData({...formData, password:e.target.value})}}
                        placeholder={'Contraseña'}
                        />
                    <Boton 
                        texto={'Log In'}
                        funcion={() => {submmitLogin()}}
                        />
                    <Link
                        to={"/Signin"}
                        className="text-purple-500 museo-900 text-bold"
                    >
                        Registrarse
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;