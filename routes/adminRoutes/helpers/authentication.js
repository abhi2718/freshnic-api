db=require('../../../models/index.js');
      
exports.getAllUsers=(req,res)=>db.User.find()
        .then(users=>res.json(users))
        .catch(err=>res.json({errMsg:err}))
module.exports=exports;
