const express = require ('express');
const router = express.Router();
//const mongosse = require('mongosse');
//obtengo el modelo que definimos y desde User hago 
//consultas a la base de datos
const User = require ('../models/users');
router.get('/users/signin', async (req, res )=>{
   const users = await users.fund();
   console.log(users);
   res.json('se recibio la peticion');


});


router.post('/', async (req, res )=>{
   const users = await users.fund();
   console.log(req.body);
   res.json('received ok ');
  
});


//router.get('/users/signin', (req, res) => {
//    User.find(function(err, users){
//       console.log(users);
//    });
//     res.json({
//        username:'Api Barbara!'
//
//     });
    
//});

//
//router.get('/users/signin', (req, res) =>{//
//
//    res.send('Ingresando a la app ');
//});

//router.get('/users/singup', (req, res) =>{
//
//    res.send('Formulario de autenticacion');
//});

module.exports= router;