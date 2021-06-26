const express = require ("express");
const router = express.Router()
const Product = require("../model/Product");
const { route } = require("./userRouter");

/* 
    API: localhost;5000/product/upload
    Method: POST
    Type: private
    Fields: name, brand, image, price, qty, category, desc, usage
*/

router.post("/upload", async (req, res) => {
    try {
      //read form data - product data
      let { name, brand, image, price, qty, category, desc, usage } = req.body;
      console.log(name, "Product Name");
      let newProduct = new Product({
        name,
        brand,
        image,
        price,
        qty,
        category,
        desc,
        usage,
      });
      console.log(newProduct);
      newProduct = await newProduct.save();
      res.status(200).json({ result: "success", product: newProduct });
    } catch (err) {
      if (err) throw err;
    }
  });
router.get("/mobile", async (req, res) => {
    try{
       let product = await Product.find({category: "Mobile"});

       res.status(200).json({product: product});
    }catch(err){
        if (err) throw err;
        res.status(500).json({status: "Server Error"});
    }
});
router.get("/watch", async  (req, res) => {
    try{
        let product = await Product.find({category: "Watch"});

        res.status(200).json({product: product});
    }catch(err){
        if (err) throw err;
        res.status(500).json({status: "Server Error"});
    }
});
router.get("/laptop", async (req, res) => {
    try{
        let product = await Product.find({category: "Laptop"});

        res.status(200).json({product: product});
    }catch(err){
        if (err) throw err;
        res.status(500).json({status: "Server Error"});
    }
});

module.exports = router;