import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    featureimg: {
        type: Array,
        default: ["https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"]
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        trim: true,
        default: 0
    },
    numReviews: {
        type: Number,
        trim: true,
        default: 0
    },
    countInStock: {
        type: Number,
        trim: true,
        default: 0
    },
    reviews: [{
        name: { type: String },
        rating: { type: Number },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now }
    }],
    color: {
        type: Array,
    },
    size: {
        type: Array
    },
    type: {
        type: String,
    },
    metaTags: {
        type: Array
    }
},
    { timestamps: true }
)

const productModel = mongoose.model('product', productSchema)

export default productModel
