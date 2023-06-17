import mongoose from 'mongoose';

const shippingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 12
    },
    email: {
        type:String,
        required: true,
        unique: 32
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    landmark: {
        type: String
    },
    pincode: {
        type: Number,
        required: true
    }
},
{
   timestamps : true
}
);

const Shipping = mongoose.model('Shipping',shippingSchema);

export default Shipping;