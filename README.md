# freshnic-api
# FreshNic RESTful Web Service API

## URL

    https://freshnic-api.herokuapp.com/
    
## BASE URI

    /api
    
## Fake Data URI (ADD)

    /api/admin/seed
    
# REST API

The REST API to the freshNic android app  is described below.

## Get list of Products

### Request

`GET /api/products`

    curl -i -H 'Accept: application/json' https://freshnic-api.herokuapp.com/api/products

### Response

[]
      
## Get a specific product

### Request

`GET /api/product/:id`

    curl -i -H 'Accept: application/json' https://freshnic-api.herokuapp.com/api/product/:id

### Response

{
  "isBestSeller": true,
  "_id": "61588edc982cfb3e703218be",
  "title": "Weight Loss",
  "imageUrl": "https://www.rawpressery.com/assets/imgs/product_images/thumb//v/a/valencia1lt_1.png",
  "description": "Ingredients are:-  Pineapple + Pomegranate + Ginger + Lemon & Nothing Else= 1 Bottle (250ml)(Pineapple contains Bromelain enzyme which burn away the excess belly fat. Pomegranate has Polyphenols and conjugated linolenic acid which also help to burn excess fat)",
  "price": 99,
  "qtyInStock": 8,
  "rating": 4.8,
  "reviews": 35,
  "__v": 0,
  "createdAt": "2021-10-02T16:54:52.051Z",
  "updatedAt": "2021-10-02T16:54:52.051Z"
}
    
## Sign-up

### Request

`POST /api/register`

    curl -i -H 'Accept: application/json' https://freshnic-api.herokuapp.com/api/register
    
### Request Body
{
    "name":"Abhishek Singh",
    "email":"abhiwebdev2718@gmail.com",
    "password":"Abhi123@"
}
### Response

{
  "name": "Abhishek Singh",
  "email": "abhiwebdev27138@gmail.com",
  "isAdmin": false,
  "id": "61597743e71da20023650204",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWJoaXNoZWsgU2luZ2giLCJlbWFpbCI6ImFiaGl3ZWJkZXYyNzEzOEBnbWFpbC5jb20iLCJpZCI6IjYxNTk3NzQzZTcxZGEyMDAyMzY1MDIwNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzMyNTMxODcsImV4cCI6MTYzMzMzOTU4N30.0wahsZJ8d7rVFc4c-aHAbvUSsVb1Lj0OuBmgKAXOY3Y"
}
    
## Sign-in
### Request

`POST /api/login`

    curl -i -H 'Accept: application/json' https://freshnic-api.herokuapp.com/api/login
### Request Body
{
    "email":"abhiwebdev2718@gmail.com",
    "password":"Abhi123@"
}
### Response

{
  "name": "Abhishek Singh",
  "email": "abhiwebdev27138@gmail.com",
  "isAdmin": false,
  "id": "61597743e71da20023650204",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWJoaXNoZWsgU2luZ2giLCJlbWFpbCI6ImFiaGl3ZWJkZXYyNzEzOEBnbWFpbC5jb20iLCJpZCI6IjYxNTk3NzQzZTcxZGEyMDAyMzY1MDIwNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzMyNTMxODcsImV4cCI6MTYzMzMzOTU4N30.0wahsZJ8d7rVFc4c-aHAbvUSsVb1Lj0OuBmgKAXOY3Y"
}

## Create Order

### Request

`POST /api/order`

    curl -i -H 'Accept: application/json' https://freshnic-api.herokuapp.com/api/order

### Request Header
{
     'Content-Type':'application/json',
      authorization:`Bearer ${userInfo.token}`
}
### Request Body
{
     "orderItems":[],
     "shippingAddress":{},
     "user":userInfo.id,
     "taxPrice":taxPrice,
     "itemsPrice":itemprice,
     "totalPrice":totalprice
}
### Response
{}

### make payment
### Request

`POST /api/payment`

    curl -i -H 'Accept: application/json' https://freshnic-api.herokuapp.com/api/payment
    
### Request Header
{
     'Content-Type':'application/json',
      authorization:`Bearer ${userInfo.token}`
}
### Request Body
{
    order_id:order._id
}
### Response
{}

    
## create a new product

### Request

`POST /api/admin/addproduct`

    curl -i -H 'Accept: application/json' https://freshnic-api.herokuapp.com/api/admin/addproduct
    
### Request Body
{
     "title":"title",
     "imageUrl":"image url",
     "description":"describe the product",
     "price":"give price ",
     "qtyInStock":" qty found in stack",
     "rating:":"rating of product",
      "reviews":"number of reviews",
      "isBestSeller":true:
},

### Response
{}
    
### get list of all users
### Request

`GET /api/admin/users`

    curl -i -H 'Accept: application/json' https://freshnic-api.herokuapp.com/api/admin/users
    
### Response
[]
    
## git list of all orders 

### Request

`GET /api/admin/orders`

    curl -i -H 'Accept: application/json' https://freshnic-api.herokuapp.com/api/admin/orders

### Response
  []
