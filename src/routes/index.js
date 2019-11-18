const express = require ('express');
const router = express.Router();

router.get('/', (req, res) =>{

    res.send('Index hello word');
});

router.get('/about ', (req, res) =>{

    res.send('Abaout');
});
module.exports= router;