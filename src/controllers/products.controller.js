const productsCtrl = {};

const Product = require('../models/products');

//funcion que devuleve todos los productos de la base 
productsCtrl.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

//funcion que devuleve todos los productos activos 
productsCtrl.getProductsActive = async (req, res) => {
    try {
        const products = await Product.find(
            {status:"Activo"}
        );
        res.json(products);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};


//funcion que devuleve todos los productos inactivos 
productsCtrl.getProductsInactive = async (req, res) => {
    try {
        const products = await Product.find(
            {status:"Inactivo"}
        );
        res.json(products);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};


 
//funcion que crea un PRODUCTO
productsCtrl.createProduct = async (req, res) => {
    try {
        
        const { title, idShops, descrip, price, image } = req.body;
        console.log(title)

        const newProduct  = new Product({ 
            title,
            idShops, 
            descripy, 
            price,
            image      
        
        });
        await newProduct.save();
        res.json('New Product added');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

//funcion muestra un prodcuto  de la base  
productsCtrl.getProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findById(id);
    res.json(Product);
}



//funcion que elimina un producto
productsCtrl.deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Shop.findByIdAndDelete(id)
    res.json('Prodcut Deleted');
}


//funcion que modifica un producto de la base
productsCtrl.updateProduct = async (req, res) => {
    const { title, descrip, price, image } = req.body;
    await Product.findByIdAndUpdate(req.params.id, {
        title,
        descrip,
        price,
        image
    });
    res.json('Product Updated');
}



module.exports = productsCtrl;