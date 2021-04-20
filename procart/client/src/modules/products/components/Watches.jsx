import React from "react";
import watch2 from "../../assets/watches/watch2.jpg";
import watch3 from "../../assets/watches/watch3.jpg";
import watch4 from "../../assets/watches/watch4.jpg";
import watch8 from "../../assets/watches/watch8.jpg";
import watch9 from "../../assets/watches/watch9.jpg";
let Watches =()=>{
    return(<>
    <section className="bg-warning p-2">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Watches data</h3>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <img
                            src={watch2}
                            alt="Fossil"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Fossil</li>
                                <li className="list-group-control">15000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-info">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <img
                            src={watch3}
                            alt="Fossil"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Fossil</li>
                                <li className="list-group-control">15000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-info">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <img
                            src={watch4}
                            alt="Fossil"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Fossil</li>
                                <li className="list-group-control">15000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-info">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <img
                            src={watch8}
                            alt="Fossil"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Fossil</li>
                                <li className="list-group-control">15000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-info">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mt-4">
                        <div className="card-header">
                            <img
                            src={watch9}
                            alt="Fossil"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Fossil</li>
                                <li className="list-group-control">15000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-info">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>);
}
export default Watches;