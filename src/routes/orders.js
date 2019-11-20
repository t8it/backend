const express = require ('express');
const router = express.Router();



//obtengo el modelo que definimos y desde shop hago 
//consultas a la base de datos
const { getOrders,
        getOrdersUser,
        createOrder,
        deleteOrder,
        getOneOrder
        } = require('../controllers/orders.controller');

//router.route =http://localhost:4000/
router.route('/orden')
    .get(getOrders)
    .post(createOrder);

router.route('/orden/:id')
    .get(getOneOrder)
    .delete(deleteOrder);
  
router.route('/orden-usuario')
    .get(getOrdersUser);



module.exports = router;


