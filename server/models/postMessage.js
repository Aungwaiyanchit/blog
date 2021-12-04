import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    imageUrl: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;