import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const {store, actions} = useContext(Context)


    return(
        <div>
            <h1 className="text-center">Login</h1>
            <div className="m-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" onChange={e => setEmail(e.target.value)} value={email}></input>
            </div>
            <div className="m-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} value={password}></input>
            </div>
            <button type="submit" className="btn btn-primary m-3" onClick={async() => {
                let result = await actions.login(email, password)
                console.log(result)
                if (result == true){
                    navigate("/")
                }
                }}>Login</button>
        </div>
    )
}