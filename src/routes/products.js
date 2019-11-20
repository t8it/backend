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
        updateProduct

        } = require('../controllers/products.controller');

//router.route =http://localhost:4000/
router.route('/producto')
    .get(getProducts)
    .post(createProduct);

router.route('/producto/:id')
    .get(getProduct)
    .post(updateProduct)
    .delete(deleteProduct);
  
router.route('/productoActivo')
    .get(getProductsActive);

router.route('/productoInactivo')
    .get(getProductsInactive);    



module.exports = router;


