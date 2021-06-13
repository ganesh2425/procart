import React from "react";
import one from "../../assets/mobiles/one.jpeg";
import two from "../../assets/mobiles/two.jpeg";
import four from "../../assets/mobiles/four.jpeg";
import five from "../../assets/mobiles/five.jpeg";
let Mobiles =()=>{
    return(<>
    <section className="bg-warning p-2">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Mobiles data</h3>
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
                            alt="Iphone 12 pro"
                            height="100%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Iphone 12 pro</li>
                                <li className="list-group-control">120000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-success">Add to cart</button>
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
                            alt="Samsung"
                            height="100%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Samsung</li>
                                <li className="list-group-control">20000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-success">Add to cart</button>
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
                            alt="Vivo"
                            height="100%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Vivo</li>
                                <li className="list-group-control">25000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-success">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <img
                            src={five}
                            alt="Nokia"
                            height="100%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Nokia</li>
                                <li className="list-group-control">30000</li>
                                <li className="list-group-control">
                                    <button className="btn btn-success">Add to cart</button>
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
export default Mobiles;