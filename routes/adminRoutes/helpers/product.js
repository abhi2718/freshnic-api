const db=require('../../../models/index');
exports.addProduct=(req,res)=>db.Products.create(req.body)
        .then(product=>{
              let {_id:id,title,imageUrl,description,price,qtyInStock, ratingreviews,isBestSeller,createdAt,updatedAt}=product; 
              res.json({id,title,imageUrl,description,price,qtyInStock,ratingreviews,isBestSeller,createdAt,updatedAt})
        })
        .catch(err=>res.status(404).json({errMsg:err}));

module.exports=exports;