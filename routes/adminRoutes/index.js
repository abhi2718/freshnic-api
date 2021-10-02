const ex=require('express'),
addProducts=require('./helpers/seed'),
product=require('./helpers/product'),
getAllOrders=require('./helpers/orderList'),
user=require('./helpers/authentication');
const router =ex.Router();

router.get('/seed',addProducts.addAllProducts);
router.post('/addproduct',product.addProduct);
router.get('/users',user.getAllUsers);
router.get('/orders',getAllOrders.getAllOrders);
module.exports=router;