const {Router}=require("express");
const { ProductModel } = require("../model/product");

const ProductRouter=Router();

// get 

ProductRouter.get("/",async(req,res)=>{
    const {  filterTitle, filterRating, sortBy, page, limit,order } = req.query;
    const Query = {};

    if (filterTitle) {  Query.title = filterTitle; }

    if (filterRating) {  Query.rating = filterRating; }

    const sortOptions = {};
    if (sortBy) { sortOptions[sortBy] = 1;  }
    
    const options = {
        sort: sortOptions,
        skip: (page - 1) * limit, 
        limit: limit, 
      };
  

    const  products= await ProductModel.find(Query, null, options);
    res.status(200).json(products)
})

// post 

ProductRouter.post("/create",async(req,res)=>{
    try {
        const {name,description,category,image,location,postedAt,price}=req.body;
   const product= await ProductModel.create({
        name,
        description,
        category,
        image,
        location,
        postedAt,
        price
    })
   res.status(200).send({product:product})
    } catch (error) {
   res.status(400).send({msg:" please enter valid data"})
        
    }
})

// delete

ProductRouter.delete("/delete/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const product=await ProductModel.findByIdAndDelete(id)
        
         res.status(200).json(product)
    } catch (error) {
       res.status(400).json(error)
        
    }
})


module.exports={ProductRouter}