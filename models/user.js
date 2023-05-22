import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, },
    profilePicture: { type: String, default: "https://res.cloudinary.com/dvfeybrvk/image/upload/v1682258754/download_pdurif.png", },
    friendRequests: [
        {
            friendUser: { type: String, require: true, },
            isApproved: { type: Boolean, default: false, }
        }
    ],
    friends: [
        {
            friendUser: { type: String, require: true, },
        }
    ],
    description: {
        type: String
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

export default User