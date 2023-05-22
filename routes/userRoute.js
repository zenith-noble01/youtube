import * as user from "../controllers/userController.js"
import { Router } from "express"
import { protect } from "../middlewares/protect.js"

const router = Router()

//register user route
router.post("/register", user.createUser)

//login user route
router.post("/login", user.loginUser)

//update user route
router.put("/:id", protect, user.updateUser)

//update user password user route
router.put("/updatepassword/:id", protect, user.updateUserPassword)

//get a user route
router.get("/u/:userId", user.getUser)

//sending  user friend request route
router.post("/:id/friend-request", protect, user.sendFriendRequest)

//accepting  user friend request route
router.post("/:id/friend-request/accept", protect, user.acceptFriendRequest)

//get all user friend request route
router.get("/friend-request", protect, user.getAlluserFriendRequest)

//delete user route
router.delete("/delete/:id", protect, user.deleteUser)

export default router