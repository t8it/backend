const express = require ('express');
const router = express.Router();
//const mongosse = require('mongosse');
//obtengo el modelo que definimos y desde User hago 
//consultas a la base de datos
const User = require ('../models/users');

//funcion que devuleve todos los usuario de la base
router.get('/users/signin', async (req, res )=>{
   const users = await Users.find();
   res.json(users);
});

//funcion que devuleve un  usuario de la base
router.get('/:id', async (req, res )=>{
   const users = await Users.findById(req.params.id);
   res.json(users);
});


//funcion que agrega usuario neuvo datos a la base  
router.post('/', async (req, res )=>{
   const { username , 
           name ,
           surname ,
           address ,
           date ,
           dni ,
           email }  =  req.body;
   const users = new Users ({ username , 
      name ,
      surname ,
      address ,
      date ,
      dni ,
      email });
      await users.save();        
           
     res.json('usuario guardado');
  
});


//funcion que modifica in usuario de la base con el id de usuario   
router.put('/:id', async (req, res )=>{
   const { username , name  }  =  req.body;
   const newUsers = new Users ({ username , name });
      await Users.findByIdAndUpdate(req.params.id, newUsers);        
           
     res.json('usuario modificado');
  
});


//funcion que elimina un  usuario de la base con el id de usuario   
router.delete('/:id', async (req, res )=>{
      await Users.findByIdAndRemove(req.params.id);        
           
     res.json('usuario eliminado');
  
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