import React, { useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Private = () => {
    const {store,actions}=useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
        if (store.loggedInAs==null){
            navigate("/login")
        }
    }, []);
    
    
    return(
	<div className="footer mt-auto py-3 text-center">
		Private Message
	</div>
)}
