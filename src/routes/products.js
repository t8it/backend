const express = require ('express');
const router = express.Router();



//obtengo el modelo que definimos y desde shop hago 
//consultas a la base de datos
const { getProducts,
        getProductsActive,
        getProductsInactive,
        createProduct,
        getProduct,
        deleteProduct,
        getProductsShop,
        updateProduct

        } = require('../controllers/products.controller');

//router.route =http://localhost:4000/
router.route('/Product')
    .get(getProducts)
    .post(createProduct);

router.route('/Product/:id')
    .get(getProduct)
    .post(updateProduct)
    .delete(deleteProduct);
  
router.route('/ProductActive')
    .get(getProductsActive);

router.route('/ProductInactive')
    .get(getProductsInactive);    

router.route('/ShopProducts/:id')
    .get(getProductsShop);  

   

 


module.exports = router;


