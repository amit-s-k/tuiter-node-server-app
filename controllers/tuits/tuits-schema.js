import mongoose from "mongoose";
const schema = mongoose.Schema(

    {
        _id: Number,
        topic: String,
        userName: String,
        image: String,
        title:String,
        tweets: String,
        avatarIcon: String,
        username: String,
        handle: String,
        postContent:String,
        time:String,
        postImage:String,
        postImageCaption:String,
        postImageText:String,
        replies:Number,
        retuits:Number,
        tuit: String,
        likes: Number,
        unlike:Number,
        liked: Boolean,
    }
);
export default schema;