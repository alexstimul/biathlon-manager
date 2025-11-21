import express from "express"
import { userController } from "../controllers/UserController"

const router = express.Router()

const USER_PATH = "/"

router.get(USER_PATH, userController.getUser)
router.post(USER_PATH + "auth", userController.authUser)
router.post(USER_PATH + "register", userController.createUser)

export default router
