import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String,
    },
    mobile: {
        type: Number
    },
    address: {
        type: String
    },
    pincode: {
        type: Number
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    landmark: {
        type: String
    },
    AddressType: {
        type: String,
        enum: ['home', 'office', 'other'],
        default: 'home'
    }

},
    { timestamps: true }
)

const userModel = mongoose.model('user', userSchema)

export default userModel