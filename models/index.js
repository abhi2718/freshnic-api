const mongoose=require('mongoose');
      mongoose.connect('mongodb+srv://abhiwebdev:abhiwebdev@cluster0.n0u3g.mongodb.net/freshnic?retryWrites=true&w=majority');
      mongoose.set("debug",true);
      mongoose.Promise=Promise;

module.exports.Products=require('./products');
module.exports.User=require('./user');
module.exports.Order=require('./order');