// var Contactos = require('../models/users');
var bodyParser = require('body-parser');

let users = [
  {"user": 1},      
  {"user": 2}
];

let getUsers = (req, res) =>
{      
    console.log("GET Users ");
    // res.status(200).send(users
    // );
    res.json({
        "users": users
    });
    //Listar resultados
    // Contactos.find(function(err, listaContactos) {
    //     //devuelvo resultado query   
    //     //console.log(listaContactos); 
    //     res.status(200).send(listaContactos);
    //     //si hay error
    //     (err)=>{
    //         res.status(500).send(err);
    //         console.log(err);
    //     }
    // });          
};

let setUser = (req,res) =>
{
    console.log(req.body);
    // var newUser = User({
      let newUser = {
        username: req.body.username,
        name: req.body.name,
        surname: req.body.surname,
        address: req.body.domicilio,
        fecha: req.body.fecha,
        dni: req.body.dni,
        mail: req.body.mail
    };
    //);
    // newUser.save().
    then
    (
        (newUser)=>
        {
            res.status(200).send(newUser); //devuelvo resultado query       
        },
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    ) 
}

module.exports = {getUsers, setUser};