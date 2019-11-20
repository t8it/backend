const orderCtrl = {};

const Order = require('../models/orders');


//funcion que devuleve todos las ordenes de la base
orderCtrl.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

//funcion que devuleve todas las ordenes  de la base de un cliente dado 
orderCtrl.getOrdersUser = async (req, res) => {
    try {
        const { idUsername} = req.body;
        const shops = await Shop.find(
            {idUsername: idUsername }
        );
        res.json(shops);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};



//funcion crea una orden 
orderCtrl.createOrder = async (req, res) => {
    try {
        
        const { idUsername, idProduct, dateEntry, dateExit, price, cant, total } = req.body;
        console.log(idUsername)

        const newOrder = new Order({ 
            idUsername,
            idProduct,
            dateEntry, 
            dateExit, 
            price, 
            cant, 
            total
         });
        await newOrder.save();
        res.json('Order created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};


//funcion que elimina una orden de la base
orderCtrl.deleteOrder = async (req, res) => {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.json('Order deleted');
};

//funcion muestra una orden de la base  
orderCtrl.getOneOrder = async (req, res) => {
    const { id } = req.params;
    await Order.findById(id);
    res.json(orders);
}


 

module.exports = orderCtrl;