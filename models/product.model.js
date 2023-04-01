import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    category:{
        type: Array,
        required: true,
        trim: true
    },
    image:{
        type: Array,
        default:["https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"]
    },
    brand:{
        type: String,
        required: true,
        trim: true
    },
    rating:{
        type: Number,
        trim: true,
        default: 0
    },
    numReviews:{
        type: Number,
        trim: true,
        default: 0
    },
    countInStock:{
        type: Number,
        trim: true,
        default: 0
    }
},
    { timestamps: true }
)

const productModel = mongoose.model('product', productSchema)

export default productModel