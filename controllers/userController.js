import User from "../models/user.js";
import { hash, compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { cloudinary } from "../config/cloudinary.js"


const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            throw new Error("This fields are required")
        }

        const existingUser = await User.findOne({ $or: [{ username }, { email }] })

        if (existingUser) {
            throw new Error("User already exist with this cridentials")
        }

        const hashedPassword = await hash(password, 10)

        const newUser = new User({
            username, email, password: hashedPassword
        })

        const savedUser = await newUser.save()

        res.status(200).send({ message: "Account created successfully!", user: savedUser })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            throw new Error("User not found")
        }
        //comparing the user passwords
        const isMatch = await compare(password, user.password)

        if (!isMatch) {
            throw new Error("Passwords don't match")
        }

        const token = jwt.sign({
            userId: user._id, email: user.email, username: user.username
        }, process.env.JWT_SECRET, { expiresIn: "30d" })

        res.status(200).send({
            token, id: user.id
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { userId } = req.user

        // console.log(userId);

        if (userId.toString() !== id) {
            throw new Error("You can only update your account!")
        }

        let profileUrl = ""

        if (req.file) {
            //check if the profile picture was provied

            const image = await cloudinary.uploader.upload(req.file.path)

            profileUrl = image.secure_url //get the secure url of the uploaded image
        }

        const { profilePic, ...others } = req.body

        const updatedFields = { ...others }//create a copy if the others files

        if (profileUrl) {

            //add the profile image to the update files
            updatedFields.profilePicture = profileUrl
        }


        //update the user in the database
        const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
            new: true
        })

        res.status(200).send({ user: updatedUser })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const updateUserPassword = async (req, res) => {
    try {
        const { id } = req.params
        const { userId } = req.user
        const { currentPassword, newPassword } = req.body

        if (userId.toString() !== id) {
            throw new Error("You can only update your account!")
        }

        const user = await User.findById(userId)

        if (!user) {
            throw new Error("User not found")
        }

        const isMatch = await compare(currentPassword, user.password)

        if (!isMatch) {
            throw new Error("Passwords don't match")
        }

        const hashePassword = await hash(newPassword, 10)

        user.password = hashePassword

        user.save()
        res.status(200).send({ message: "Password updated succesfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getUser = async (req, res) => {
    try {
        const { userId } = req.params
        const user = await User.findById(userId)

        if (!user) {
            throw new Error("User not found")
        }

        //removing sensitive data from the user object
        const { password, friendRequests, ...userData } = user.toObject()

        res.status(200).send({ user: userData })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const sendFriendRequest = async (req, res) => {
    try {
        const { id } = req.params//id of the recipient
        const { userId } = req.user//id of the current user

        if (userId.toString() === id) {
            throw new Error("You cant send a friend request to yourself!")
        }

        //checking if the recipient user exist
        const recipient = await User.findById(id)
        //checking if the current user exist
        const currentUser = await User.findOne(userId)

        if (!currentUser && !recipient) {
            throw new Error("User on found")
        }

        const existingFriendRequest = recipient.friendRequests.find((request) => request.friendUser === userId.toString())

        if (existingFriendRequest) {
            throw new Error("You have already sent a request to this user")
        }

        const existingFriends = currentUser.friends.find((friend) => friend.friendUser === recipient._id.toString())

        if (existingFriends) {
            throw new Error("You're already friend to this user")
        }

        recipient.friendRequests.push({ friendUser: userId.toString() })

        await recipient.save()

        res.status(200).send({ message: "friend request successfully send!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const acceptFriendRequest = async (req, res) => {
    try {
        const { id } = req.params//id of the recipient
        const { userId } = req.user//id of the current user

        if (userId.toString() === id) {
            throw new Error("You cant send a friend request to yourself!")
        }

        //checking if the recipient user exist
        const recipient = await User.findById(id)
        //checking if the current user exist
        const currentUser = await User.findOne(userId)

        if (!currentUser && !recipient) {
            throw new Error("User on found")
        }

        const friendRequest = currentUser.friendRequests.find((request) => request.friendUser === recipient._id.toString())

        if (!friendRequest) {
            throw new Error("There is no friend request from this user")
        }

        const existingFriends = currentUser.friends.find((friend) => friend.friendUser === recipient._id.toString())


        if (existingFriends) {
            throw new Error("You're already friend to this user")
        }

        //accept the friend request by adding both to each other's friend array
        currentUser.friends.push({ friendUser: id })
        recipient.friends.push({ friendUser: userId.toString() })

        //update the friend request to aprove
        friendRequest.isApproved = true

        //save the changes to sender and current user documents
        await Promise.all([currentUser.save(), recipient.save()])

        return res.status(200).send({ message: "Friend request Accepted!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getAlluserFriendRequest = async (req, res) => {
    try {
        const { userId } = req.user

        const user = await User.findById(userId).populate({
            path: "friendRequests.friendUser",
            select: "username profile"
        });

        const friendRequests = user.friendRequests || []


        const pendingRequest = friendRequests.filter((request) => !request.isApproved)

        res.status(200).send({ friendRequests: pendingRequest })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.user
        const { id } = req.params

        if (userId.toString() !== id) {
            throw new Error("You can only delete your profile")
        }

        await User.findByIdAndDelete(userId)

        res.status(200).send({ message: "Account Deleted" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export { createUser, loginUser, updateUser, updateUserPassword, getAlluserFriendRequest, getUser, sendFriendRequest, acceptFriendRequest, deleteUser }