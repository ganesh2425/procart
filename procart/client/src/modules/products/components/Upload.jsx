import React from "react";
import {useState} from "react";
let Upload =()=>{
    let [user, setUser] = useState({
        productName: "",
        price: "",
        qty: "",
        image: "",
        category: "",
        desc: "",
        usage: "",
    });
    let inputHandler=(event)=>{
        setUser({...user, [event.target.name]: event.target.value})
    }
    return(<>
    <section className="bg-info p-2">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Upload Products - By Admin</h3>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container mt-4">
            <div className="row">
                <div className="col md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Upload Products</h3>
                        </div>
                        <div className="card-body">
                        <form>
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Product Name"
                            name="productName"
                            onSubmit={inputHandler}
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Price"
                            name="price"
                            onSubmit={inputHandler}
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="QTY"
                            name="qty"
                            onSubmit={inputHandler}
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="file"
                            className="form-control"
                            placeholder="Please upload image"
                            name="image"
                            onSubmit={inputHandler}
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Available"
                            onSubmit={inputHandler}
                            name="category"
                            />
                            </div>
                            <div className="form-group">
                            <textarea
                            placeholder="Product Description"
                            className="form-control"
                            onSubmit={inputHandler}
                            name="desc"></textarea>
                            </div>
                            <div className="form-group">
                            <textarea
                            placeholder="Product Description"
                            className="form-control"
                            onSubmit={inputHandler}
                            name="usage"></textarea>
                        </div>
                        <div className="form-group">
                            <input
                            type="submit"
                            className="form-control btn btn-success"
                            />
                        </div>
                    </form>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
    </>);
}
export default Upload;