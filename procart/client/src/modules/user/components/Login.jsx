import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
let Login =()=>{
    let [user, setUser] = useState({email:"", password:""});
    let inputHandler=(event)=>{
        setUser({...user, [event.target.name]: event.target.value});
    };
    let submitHandler=(event)=>{
        event.preventDefault();
        console.log("Testing");
    };
    return(<>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        <h3>Login</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitHandler} >
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Email"
                                value={user.email}
                                name="email"
                                onChange={inputHandler}
                                />
                            </div>
                            <div className="form-group ">
                                <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                value={user.password}
                                name="password"
                                onChange={inputHandler}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="submit"
                                className="form-control btn btn-primary"
                                value="Login"
                                />
                            </div>
                        </form>
                        <Link to="forgetPassword">Forget Password</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>);
}
export default Login;