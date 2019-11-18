// Initialize express router
let router = require('express').Router();
let users = require('./controllers/users');
let shops = require('./controllers/shops');
let orders = require('./controllers/orders');
let products = require('./controllers/products');

// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'API Its Working',
       message: 'Love ♡♡♡!',
    });
});

//EndPoint para leer toda la base
//Collections Users 
router.get('/users',function(req,res)
{
    console.log("users");
    users.getUsers(req,res);
});

router.post('/users',function(req,res)
{
    console.log("users");
    users.setUser(req,res);
});
//Collections shops
router.get('/shops',function(req,res)
{
    console.log("users");
    shops.getShops(req,res);
});

router.post('/shops',function(req,res)
{
    console.log("users");
    shops.setShop(req,res);
});

//Collections orders
router.get('/orders',function(req,res)
{
    console.log("orders");
    orders.getOrders(req,res);
});

router.post('/orders',function(req,res)
{
    console.log("orders");
    orders.setOrder(req,res);
});

//Collections products 
router.get('/products',function(req,res)
{
    console.log("products");
    orders.getOrders(req,res);
});

router.post('/products',function(req,res)
{
    console.log("products");
    orders.setOrder(req,res);
});cofiguracioens

module.exports = router;