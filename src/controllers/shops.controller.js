const shopsCtrl = {};

const Shop = require('../models/shops');

//funcion que devuleve todas las tiendas de la base 
shopsCtrl.getShops = async (req, res) => {
    try {
        const shops = await Shop.find();
        res.json(shops);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};
 
//funcion que crea una tienda 
shopsCtrl.createShop = async (req, res) => {
    try {
        
        const { shopname, idUser, category, email } = req.body;
        console.log(shopname)

        const newShop = new Shop({ 
            shopname,
            idUser, 
            category, 
            email      
        
        });
        await newShop.save();
        res.json('New Shop added');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

//funcion muestra una tienda  de la base  
shopsCtrl.getShop = async (req, res) => {
    const { id } = req.params;
    await Shop.findById(id);
    res.json(shop);
}



//funcion que elimina una tienda de la base
shopsCtrl.deleteShop = async (req, res) => {
    const { id } = req.params;
    await Shop.findByIdAndDelete(id)
    res.json('Shop Deleted');
}


//funcion que modifica una tienda de la base
shopsCtrl.updateShop = async (req, res) => {
    const { shopname, idUser, category, email } = req.body;
    await Shop.findByIdAndUpdate(req.params.id, {
        shopname,
        category,
        email
    });
    res.json('Shop Updated');
}



module.exports = shopsCtrl;