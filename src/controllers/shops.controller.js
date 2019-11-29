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

//funcion que devuleve todas las tiendas de la base por categoria "Farmacia"
shopsCtrl.getShopsPharmacy = async (req, res) => {
    try {
        const shops = await Shop.find(
            {category:"Farmacia"}
        );
        res.json(shops);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

//funcion que devuleve todas las tiendas de la base por categoria "Supermercado"
shopsCtrl.getShopsSuperMarket = async (req, res) => {
    try {
        const shops = await Shop.find(
            {category:"Supermercado"}
        );
        res.json(shops);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

//funcion que devuleve todas las tiendas de la base por categoria "Restaurant"
shopsCtrl.getShopsRestaurant = async (req, res) => {
    try {
        const shops = await Shop.find(
            {category:"Restaurant"}
        );
        res.json(shops);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

//funcion que devuleve todas las tiendas de la base por categoria "Shopping"
shopsCtrl.getShopsShopping = async (req, res) => {
    try {
        const shops = await Shop.find(
            {category:'Shopping'}
        );
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
        
        const { shopname, idUser, category, photo, adrress, email } = req.body;
        console.log(shopname)

        const newShop = new Shop({ 
            shopname,
            idUser, 
            category, 
            photo,
            adrress,
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
    const { shopname, idUser, category, photo, email } = req.body;
    await Shop.findByIdAndUpdate(req.params.id, {
        shopname,
        category,
        photo,
        email
    });
    res.json('Shop Updated');
}



module.exports = shopsCtrl;