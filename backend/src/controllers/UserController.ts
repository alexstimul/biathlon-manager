import express from "express"
import { userService } from "../services/UserService"

export class UserController {
    async authUser(req: express.Request, res: express.Response) {
        try {
            const { email } = req.body
            const user = await userService.authUser(email)
            res.json(user)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Failed to auth user" })
        }
    }

    async createUser(req: express.Request, res: express.Response) {
        try {
            const { user } = req.body
            const newUser = await userService.createUser(user)
            res.json(newUser)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Failed to create user" })
        }
    }

    async getUser(req: express.Request, res: express.Response) {
        try {
            const { login } = req.body
            const user = await userService.getUser(login)
            res.json(user)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Failed to get user" })
        }
    }
}

export const userController = new UserController()
