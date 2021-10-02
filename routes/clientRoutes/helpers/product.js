const db=require('../../../models/index');
exports.getProducts=(req,res)=>db.Products.find()
       .then(products=>res.json(products.map(item=>{
              let {_id:id,title,imageUrl,description,price,qtyInStock, rating,reviews,isBestSeller,createdAt,updatedAt}=item;
              return {id,title,imageUrl,description,price,qtyInStock,rating,reviews,isBestSeller,createdAt,updatedAt}
       })))
       .catch(err=>res.status(404).json({errMsg:err}))

exports.getProduct=(req,res)=>db.Products.findById(req.params.id)
       .then(product=>res.json(product))
       .catch(err=>res.status(404).json({errMasg:"Product does not found "}))


module.exports=exports;