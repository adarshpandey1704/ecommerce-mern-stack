import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
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
    password: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    role: {
        type: Number,
        required: true
    },
    salt: String,
    history: {
        type: Array,
        default: []
    }
},
{
   timestamps : true
}
);

const User = mongoose.model('User',userSchema);

export default User;