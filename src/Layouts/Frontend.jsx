import Navbar from "./Navbar";
import Footer from "./Footer";
import { MENU_DATA, DIRECCIONES, TELEFONOS } from "../env";
import React,{useState,useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { backendurl } from "../env";


const Frontend = (props) => {
    const [usrData, setUsrData] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const checkAuth = async () => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            navigate('/login');
        }
        try {
            const response = await fetch(`${backendurl}verify-token`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            });
    
            if (response.status === 401) {
                localStorage.removeItem("usrData");
                setUsrData(false);
                navigate('/login');
            }
        } catch (error) {
            console.log('Error checking token:', error);
            localStorage.removeItem("usrData");
            setUsrData(false);
            navigate('/login');
        }
    };

    useEffect(() => {
        let tmp = localStorage.getItem("usrData");

        if(tmp)
        {
            setUsrData(JSON.parse(tmp));
        }
    }, []);
    useEffect(() => {
        if(location.pathname.toLowerCase()!=="/signin" && location.pathname.toLowerCase()!=="/login"){
            checkAuth();
        }
    }, [location.pathname, navigate]);
    return(
        <>
            {usrData && <Navbar rutas={MENU_DATA} usrData={usrData}/>}
            {props.children}
            {usrData && <Footer direcciones={DIRECCIONES} telefonos={TELEFONOS}/>}
        </>
    );
}

export default Frontend;