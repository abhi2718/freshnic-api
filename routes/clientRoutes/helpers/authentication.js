const bcrypt=require('bcrypt'),
      jwt=require('../../../utils.js'),
      db=require('../../../models/index.js');
      
exports.register=(req,res)=>{  
    let {name,email,password}=req.body;
     db.User.create({
        name,
        email,
        password:bcrypt.hashSync(password,12),
        isAdmin:false
    }).then(userInfo=>{
        const {name,email,isAdmin,_id:id}=userInfo;
        res.json({
            name,
            email,
            isAdmin,
            id,
            token:jwt.generateToken({name,email,id,isAdmin})
          })
    })
      .catch(err=>res.status(401).json({errMsg:'given email already exists'}))
}

exports.signin=(req,res)=>db.User.findOne({email:req.body.email})
               .then(userInfo=>{
                if(bcrypt.compareSync(req.body.password,userInfo.password)){
                    const {name,email,_id:id,isAdmin}=userInfo;
                    res.json({
                       name,
                       email,
                       id,
                       isAdmin,
                       token:jwt.generateToken({name,email,id,isAdmin})
                    })
                }else{
                    res.status(404).json({errMsg:"email or password is invalid"})
                }
               }).catch(err=>res.status(404).json({errMsg:"email or password is invalid"}));

exports.getAllUsers=(req,res)=>db.User.find()
        .then(users=>res.json(users))
        .catch(err=>res.json({errMsg:err}))
module.exports=exports;