const ex=require('express'),
      product=require('./helpers/product'),
      user=require('./helpers/authentication'),
      order=require('./helpers/order'),
      authorization=require('../../utils'),
      payment=require('./helpers/payment'),
      //---------------- shop route -----------------------
      router=ex.Router();
      router.get('/products',product.getProducts);
      router.get('/product/:id',product.getProduct);
   
      //--------------------- Authentication ---------------
      router.post('/register',user.register);
      router.post('/login',user.signin);

      //-------------------- Authrization ------------------
      router.post('/order',authorization.isUserLoggedIn,order.createNewOrder);
      router.post('/payment',authorization.isUserLoggedIn,payment.createPayment);
      router.put('/payment/success',authorization.isUserLoggedIn,payment.paymentSuccess);
      router.post('/myorders',order.myOrders);
      
      module.exports=router;