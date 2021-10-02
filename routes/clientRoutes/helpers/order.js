const db=require('../../../models/index');
        exports.createNewOrder=(req,res)=>
         db.Order.create(req.body)
        .then(order=>res.json(order))
        .catch(err=>res.json(err))
        
        exports.myOrders=(req,res)=>
        db.Order.find({user:req.body.id})
        .then(orders=>res.json(orders))
        .catch(err=>res.json({errMsg:"order does not found "}))

module.exports=exports;