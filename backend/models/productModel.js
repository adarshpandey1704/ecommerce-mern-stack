import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            maxLength: 10000000
        },
        category: {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        quantity: {
            type: Number
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        shipping: {
            required: true,
            type: Boolean
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product',productSchema);

export default Product;

