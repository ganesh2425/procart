import React from "react";
import { uploadProductAction } from "../../../redux/products/product.action";
import {useDispatch} from "react-redux";
import {useState} from "react";
let Upload =()=>{
    let dispatch = useDispatch();
    let [product, setProduct] = useState({
        productName: "",
        price: "",
        brand: "",
        qty: "",
        image: "",
        category: "",
        desc: "",
        usage: "",
    });
    let inputHandler=(event)=>{
        setProduct({...product, [event.target.name]: event.target.value})
    };
    let submitHandler=(event)=>{
        dispatch(uploadProductAction(product));
        event.preventDefault();
        console.log(product);
    };
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
    <pre>{JSON.stringify(product)}</pre>
    <section>
        <div className="container mt-4">
            <div className="row">
                <div className="col md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Upload Products</h3>
                        </div>
                        <div className="card-body">
                        <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Product Name"
                            onChange={inputHandler}
                            value={product.name}
                            name="productName"
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Price"
                            onChange={inputHandler}
                            value={product.price}
                            name="price"
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Brand Name"
                            onChange={inputHandler}
                            value={product.brand}
                            name="brand"
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Qty"
                            onChange={inputHandler}
                            value={product.qty}
                            name="qty"
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="file"
                            className="form-control"
                            placeholder="Please upload image"
                            onChange={inputHandler}
                            name="image"
                            />
                        </div>
                        <div className="form-group">
                            <select 
                            className="form-control"
                            name="category"
                            onChange={inputHandler}
                            >
                                <option value="">Select Category</option>
                                <option value="Mobiles">Mobiles</option>
                                <option value="Laptops">Laptops</option>
                                <option value="Watches">Watches</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea
                            placeholder="Product Description"
                            className="form-control"
                            onChange={inputHandler}
                            value={product.desc}
                            name="desc"></textarea>
                        </div>
                        <div className="form-group">
                            <textarea
                            placeholder="Product Usage"
                            className="form-control"
                            onChange={inputHandler}
                            value={product.usage}
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