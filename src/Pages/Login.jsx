import TextInput from "../Components/Inputs/TextInput";
import Boton from "../Components/Boton";
import { useState} from "react";
import { POST } from "../Services/Fetch";
import { Link, useNavigate} from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const Login = () => {

    const [token, setToken] = useState("");
    const [decoded, setDecoded] = useState("");
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const submmitLogin = async () => {
        if (!formData?.name || !formData.password) {
            window.alert("Complete los campos para continuar.");
            return;
        }

        const loginData = {
            Username: formData.name,
            Password: formData.password
        };

        try {
            const rsp = await POST("login", loginData);

            if (rsp?.accessToken) {
                // GUARDAR EL TOKEN
                localStorage.setItem("jwtToken", rsp.accessToken);
                const decodedToken = jwtDecode(rsp.accessToken);
                setDecoded(decodedToken);

                // GUARDAR DATOS DE USUARIO
                const userData = {
                    name: decoded.name,
                    time: new Date(Date.now()).toDateString()
                };
                localStorage.setItem("usrData", JSON.stringify(userData));

                // Redirigir al inicio
                location.replace("/inicio")
            } else {
                window.alert("Error: No se recibió un token de autenticación.");
            }
        } catch (err) {
            console.error('Error during login:', err.message);
            window.alert(err.message);
        }
    };


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
                        funcion={() => {submmitLogin();
                        }}
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