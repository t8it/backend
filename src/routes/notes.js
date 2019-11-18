const express = require ('express');
const router = express.Router();


router.get('/notes/productos', (req, res) =>{

    res.send('Ingresando a productos ');
});



module.exports= router;