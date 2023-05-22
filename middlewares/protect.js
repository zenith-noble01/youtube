import jwt from "jsonwebtoken"
import User from "../models/user.js"

const protect = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "")

        // console.log(token);

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decodedToken.userId)

        if (!user) {
            throw new Error("Invalid token")
        }

        req.user = { userId: user._id }

        next()
    } catch (error) {
        res.status(401).send({ message: error.message })
    }
}

export { protect }