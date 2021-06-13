import React from "react";
import one from "../../assets/watches/one.jpeg";
import two from "../../assets/watches/two.jpeg"
import three from "../../assets/watches/three.jpeg"
import four from "../../assets/watches/four.jpeg";
import five from "../../assets/watches/five.jpeg";
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
                            src={one}
                            alt="Casio"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Dw</li>
                                <li className="list-group-control">7500</li>
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
                            src={two}
                            alt="Fastrack"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Fastrack</li>
                                <li className="list-group-control">2999</li>
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
                            src={three}
                            alt="Tissot"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Tissot</li>
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
                            src={four}
                            alt="Noise"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Fossil</li>
                                <li className="list-group-control">2199</li>
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
                            src={five}
                            alt="Timex"
                            height="50%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Titan</li>
                                <li className="list-group-control">2500</li>
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