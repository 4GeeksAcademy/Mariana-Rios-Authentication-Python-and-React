import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()
	return (
		<div className="text-center mt-5">
			<button className="btn btn-primary" onClick={async()=>{
				let result= await actions.goPrivate()
				if(result){
					navigate("/private")
				}
			}}>Private</button>
			
		</div>
	);
};
