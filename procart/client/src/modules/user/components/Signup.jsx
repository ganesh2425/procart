import React from "react";
import {useState} from "react";
let Signup =()=>{
    let [user, setUser] = useState({name:"", email:"", password:""})

    let inputHandler=(event)=>{
        setUser({...user, [event.target.name]: event.target.value});
    };
    let submitHandler=(event)=>{
        event.preventDefault();
        console.log(user);
    }
    return(<>
    <section>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2>Signup</h2>
                        </div>
                        <div className="card-body">
                        <form onSubmit={submitHandler}>
                      <div className="form-group">
                          <div className="input-group">
                              <span className="input-group-addon"><i className="fa fa-user"></i></span>
                              <input 
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="User Name"
                              onChange={inputHandler}
                              />
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="input-group">
                              <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                              <input
                              type="text"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={inputHandler}
                              />
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="input-group">
                              <span className="input-group-addon"><i className="fa fa-key"></i></span>
                              <input
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                              onChange={inputHandler}
                              />
                          </div>
                      </div>
                      <button
                      type="submit"
                      className="btn btn-primary btn-block">Submit</button>
                  </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>);
}
export default Signup;