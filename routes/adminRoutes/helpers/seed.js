const db=require('../../../models/index');
class Product{
    constructor(title,imageUrl,description,price,qtyInStock,rating,reviews,isBestSeller){
        this.title=title;
        this.imageUrl=imageUrl;
        this.description=description;
        this.price=price;
        this.qtyInStock=qtyInStock;
        this.rating=rating;
        this.reviews=reviews;
        this.isBestSeller=isBestSeller;
    }
}
const PRODUCTS = [
    new Product(
        "Energy Booster",
        "https://www.rawpressery.com/assets/imgs/product_images/thumb//c/o/coconutwater200ml_p1.png",
        "Ingredients are:-  Pomegranate & Nothing Else = 1 Bottle (250ml) Like many fruits, the pomegranate is naturally sweet, contains glucose and fructose in roughly balanced proportions which provide energy.",
        89,
        10,
        4.8,
        45,
        true
    ),
    new Product(
        "Weight Loss",
        "https://www.rawpressery.com/assets/imgs/product_images/thumb//v/a/valencia1lt_1.png",
        `Ingredients are:-  Pineapple + Pomegranate + Ginger + Lemon & Nothing Else= 1 Bottle (250ml)(Pineapple contains Bromelain enzyme which burn away the excess belly fat. Pomegranate has Polyphenols and conjugated linolenic acid which also help to burn excess fat)`,
        99, 
        8,
        4.8,
        35,
        true
    ),
  
    new Product(
        "Better Digestion",
        "https://www.rawpressery.com/assets/imgs/product_images/thumb//l/i/life250_p1.png",
        "Ingredients are:-   Apple has Pectin fiber which improve digestion and pineapple has ability to break down protein faster hence it helps to speed up digestion process",
        79,     
        6,
        4.8,
        10,
        true
    ),
    new Product(
        "Immunity Booster",
        "https://www.rawpressery.com/assets/imgs/product_images/thumb//v/a/valencia250_p1.png",
        "Ingredients are:-    Apple + Kiwi & Nothing Else = 1 Bottle (250ml) (Kiwi has rich content of Vitamin E which is a key nutrient for immune system whereas soluble fibers found in Apple also strengthen the immune system)",
        99,
        7,
        4.8,
        25,
        true
    ),
    new Product(
        "Blood Booster",
        "https://www.rawpressery.com/assets/imgs/product_images/thumb//g/u/guava250ml_p1.png",
        "Ingredients are:-   Beetroot + Pomegranate & Nothing Else = 1 Bottle (250ml)(Beetroot and Pomegranate have various vitamins and minerals content that is why it is the best juice to ensure a healthy blood count.)",
        69,
        8,
        4.8,
        10,
        false
    ),
    new Product(
        "Diabetes Manager",
        "https://www.rawpressery.com/assets/imgs/product_images/thumb//s/u/sug250_p1.png",
        "Ingredients are:-   Bitter Gourd + Apple +Cucumber + Ginger + Lemon & Nothing Else = 1 Bottle (250ml)(Bitter gourd contains charantin and cucumber is rich in fibers and both are responsible for lowering blood glucose level. Apple, Ginger and lemon are added to make tangy type taste)",
        89,
        10,
        4.8,
        20,
        false
    ),
    new Product(
        "Glow Skin",
        "https://www.rawpressery.com/assets/imgs/product_images/thumb//p/o/pom250_p1.png",
        "Ingredients are:-   Beetroot + Carrot + Tomato & Nothing Else = 1 Bottle (250ml)(Beetroot, Carrot and Tomato help to purify Blood and lead to a healthy glowing skin. Antioxidants in tomato, especially lycopene, fight cellular damage and skin inflammation) ",
        89,
        12,
        4.8,
        20,
        true
    ),
    new Product(
        "Liver Cleansing",
        "https://www.rawpressery.com/assets/imgs/product_images/thumb//g/r/grapefruit_250ml_p1_1.png",
        "Ingredients are:-   Apple + Beetroot + Carrot + Ginger + Lemon & Nothing Else = 1 Bottle (250ml)(Apple, Beetroot, Carrot and Ginger all help to cleanse the buildup waste and toxins in the liver. Carrot play an important role to neutralize heavy metals to protect liver)",
        89,
        13,
        4.8,
        20,
        true
    ),
  
  ];
  
exports.addAllProducts=(req,res)=>{
          db.Products.remove();
          db.Products.insertMany(PRODUCTS)
         .then(products=>res.json(products))
         .catch(err=>res.json({errMsg:err}))
        }

module.exports=exports;