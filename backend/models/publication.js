import mongoose from 'mongoose';

let PublicationSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    views : {
        type : Number,
        default: 0
    }
},{
    timestamps: true
})

let Publication = mongoose.model('publication',PublicationSchema) ;

export default Publication ;