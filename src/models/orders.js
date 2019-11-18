const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema ({

         //idOrder: { type: ObjectId, reqired: true},
         idUsername: { type: String, reqired: true},
         idShops: { type: String, reqired: true},
         dateEntry: { type: String, reqired: true},
         dateExit: { type: String, reqired: true},
         //productList: { type: Array<cant  {type: Integer, reqired: true},
         //                           price {type: Integer, reqired: true},
         //                           descrip{type String, reqired: true,}
         //                           >, reqired: true},
         email: { type: String, reqired: true},
         status: { type: String, reqired: true},
         price: { type: Integer, reqired: true},
         cant: { type: Integer, reqired: true},
         total: { type: Integer, reqired: true}


   
})

module.exports= mongoose.model('Order', UserSchema);
