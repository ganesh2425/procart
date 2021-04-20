import React from "react";
import mobile1 from "../../assets/mobiles/mobile1.jpeg";
import mobile2 from "../../assets/mobiles/mobile2.jpeg";
import mobile4 from "../../assets/mobiles/mobile4.jpeg";
import mobile5 from "../../assets/mobiles/mobile5.jpeg";
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
                            src={mobile1}
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
                            src={mobile2}
                            alt="Nokia"
                            height="100%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Nokia</li>
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
                            src={mobile4}
                            alt="Oppo"
                            height="100%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Oppo</li>
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
                            src={mobile5}
                            alt="Samsung"
                            height="100%"
                            width="50%"
                            />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-control">Samsung</li>
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