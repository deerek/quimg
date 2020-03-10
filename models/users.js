const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    id: String,
    createdAt: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    followersCount: Number,
    // followers: [],
    followingCount: Number,
    // following: [],
    postsCount: Number,
    // posts: [],
    likesCount: Number,
    // likes: [],
    avatar: String,
    bio: String,
    isLoggedIn: Boolean,
    lastLogin: String
});

module.exports = mongoose.model("User", userSchema);



        ////////////// THIS IS HOW TO DO FOLLOWS
// let UserSchema = new mongoose.Schema(
//     {
//         name: String,
//         email: String,
//         provider: String,
//         provider_id: String,
//         token: String,
//         provider_pic: String,
//         followers: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'User'
//             }
//         ],
//         following: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'User'
//             }
//         ]
//     }
// )
// UserSchema.methods.follow = function (user_id) {
//     if (this.following.indexOf(user_id) === -1) {
//         this.following.push(user_id)        
//     }
//     return this.save()
// }
// UserSchema.methods.addFollower = function (fs) {
//     this.followers.push(fs)        
// }
// module.exports = mongoose.model('User', UserSchema)