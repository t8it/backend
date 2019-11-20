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
router.route('/tienda')
    .get(getShops)
    .post(createShop);

router.route('/tienda/:id')
    .get(getShop)
    .delete(deleteShop)
    .post(updateShop);

router.route('/tiendas-farmacias')
    .get(getShopsPharmacy); 

router.route('/tiendas-supermercados')
    .get(getShopsSuperMarket);    

router.route('/tiendas-restaurantes')
    .get(getShopsRestaurant);    

router.route('/tiendas-shopping')
    .get(getShopsShopping);    
     

module.exports = router;


