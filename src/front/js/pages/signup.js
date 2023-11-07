import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
    const [email, setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const {store, actions} = useContext(Context)

    return ( 
        <form>
            <h1 className="text-center">Sign Up</h1>
            <div className="m-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" onChange={e => setEmail(e.target.value)} value={email}></input>
            </div>
            <div className="m-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} value={password}></input>
            </div>
            <button type="submit" className="btn btn-primary m-3" onClick={() => actions.signup(email, password)}>Sign Up</button>
        </form>
    )
    }