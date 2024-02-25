import mongoose from 'mongoose';

let PublicationSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    image : {
        type: String,
        required: false
    },
    likesUser: {
        type: Array,
        default: [],
    },
    likes : {
        type : Number,
        default: 0
    },
    comments : {
        type : Array,
        default: []
    }
},{
    timestamps: true
})

let Publication = mongoose.model('publication',PublicationSchema) ;

export default Publication ;