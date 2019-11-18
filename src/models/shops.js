const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShopsSchema = new Schema ({
    //idShops: { type: ObjectId, reqired: true},

         idShops: { type: String, reqired: true},
         idUser: { type: String, reqired: true},
         name: { type: String, reqired: true},
         address: { type: String, reqired: true},
         item: { type: String, reqired: true},
         status: { type: String, reqired: true},
         date: { type: Date, reqired: true},
         email: { type: String, reqired: true}
})

module.exports= mongoose.model('Shops', UserSchema);
