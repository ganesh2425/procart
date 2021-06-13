import React from "react";
import one from "../../assets/laptops/one.jpeg";
import two from "../../assets/laptops/two.jpeg";
import three from "../../assets/laptops/three.jpeg";
import four from "../../assets/laptops/four.jpeg";
import five from "../../assets/laptops/five.jpeg";
let Laptops =()=>{
    return(<>
    <section className="bg-warning p-2">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Laptops data</h3>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <img
                            src={one}
                            alt="hp"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">acer</li>
                                <li className="list-group-control">35000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-danger">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <img 
                            src={two}
                            alt="Lenovo"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Rog</li>
                                <li className="list-group-control">30000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-danger">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <img
                            src={three}
                            alt="Asus"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Dell</li>
                                <li className="list-group-control">40000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-danger">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card mt-5">
                        <div className="card-header">
                            <img
                            src={four}
                            alt="MacBook"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">MacBook</li>
                                <li className="list-group-control">150000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-danger">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card mt-5">
                        <div className="card-header">
                            <img
                            src={five}
                            alt="Mi"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Nokia</li>
                                <li className="list-group-control">23000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-danger">Add to cart</button>
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
export default Laptops;