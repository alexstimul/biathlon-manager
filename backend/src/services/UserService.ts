import { User } from "../models/types"

export class UserService {
    async authUser(email: string): Promise<User> {
        return {} as User
    }

    async createUser(user: Partial<User>): Promise<User> {
        return {} as User
    }

    async getUser(login: string): Promise<User> {
        return {} as User
    }
}

export const userService = new UserService()
