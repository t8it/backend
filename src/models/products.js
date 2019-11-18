const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema ({
    idProduct: { type: ObjectId, reqired: true},
    idShops: { type: ObjectId, reqired: true},
    status: { type: String, reqired: true},
    descrip: { type: String, reqired: true},
    price: { type: String, reqired: true},
    status: { type: String, reqired: true},
    imagen: { type: String, reqired: true},
    })

module.exports= mongoose.model('Product', UserSchema);
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