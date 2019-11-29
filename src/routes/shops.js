const express = require ('express');
const router = express.Router();



//obtengo el modelo que definimos y desde shop hago 
//consultas a la base de datos
const { getShops,
        getShopsPharmacy,
        getShopsSuperMarket,
        getShopsRestaurant,
        getShopsShopping,
        createShop,
        getShop,
        deleteShop,
        updateShop
        } = require('../controllers/shops.controller');

//router.route =http://localhost:4000/
router.route('/Shops')
    .get(getShops)
    .post(createShop);

router.route('/Shops/:id')
    .get(getShop)
    .delete(deleteShop)
    .post(updateShop);

router.route('/ShopsPharmacy')
    .get(getShopsPharmacy); 

router.route('/ShopsSuperMarket')
    .get(getShopsSuperMarket);    

router.route('/ShopsRestaurant')
    .get(getShopsRestaurant);    

router.route('/ShopsShopping')
    .get(getShopsShopping);    
     

module.exports = router;


