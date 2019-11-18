const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({

         username: { type: String, reqired: true},
         name: { type: String, reqired: true},
         surname: { type: String, reqired: true},
         address: { type: String, reqired: true},
         date: { type: String, reqired: true},
         dni: { type: String, reqired: true},
         email: { type: String, reqired: true}



})

module.exports= mongoose.model('User', UserSchema);
// class User {MODULE.EXPORT
//     username;
//     name;
//     surname;
//     address;
//     fecha;
//     dni;
//     mail;
// }

// module.exports = User;