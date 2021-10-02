const db=require('../../../models/index.js');
exports.getAllOrders=(req,res)=>db.Order.find({})
        .then(orders=>res.json(orders))
        .catch(err=>res.json(err))

module.exports=exports;