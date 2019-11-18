const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({

     //    idUser: { type: ObjectId, reqired: true},     
         username: { type: String, reqired: true},
         name: { type: String, reqired: true},
         surname: { type: String, reqired: false},
         address: { type: String, reqired: false},
         date: { type: Date, reqired: true},
         dni: { type: String, reqired: false},
         pass: { type: String, reqired: true},
         status: { type: String, reqired: false},
         typeUsers: { type: String, reqired: true},
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