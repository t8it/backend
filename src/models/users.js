const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({

     //    idUser: { type: ObjectId, reqired: true},     
     username: {
        type: String,
        required: true,
        unique: true,
        trim: true},
         dni: { type: String, reqired: true},
         pass: { type: String, reqired: true},
         status: { type: String, default: "Activo"},
         typeUsers: { type: String, default: "Consumidor Final"},
         email: { type: String, reqired: true},
         date: { type: Date, default: Date.now}
     },
         {
            timestamps: true
        });


module.exports= mongoose.model('User', UserSchema);
