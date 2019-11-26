const express = require ('express');
const router = express.Router();


var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//obtengo el modelo que definimos y desde User hago 
//consultas a la base de datos
const { getUsers,createUser, deleteUser, getOneUser} = require('../controllers/users.controller');

//router.route =http://localhost:4000/
router.route('/usuario')
    .get(getUsers)
    .post(createUser);

router.route('/usuario/:id')
    .get(getOneUser)
    .delete(deleteUser);

module.exports = router;


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

//module.exports= router;

