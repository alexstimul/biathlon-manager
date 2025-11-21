import { supabase } from "../database/supabase"
import { UserDB } from "../models/database"
import { User } from "../models/types"

export class UserService {
    private _tableName = "user"

    private _transformDatabaseUserToUser(databaseUser: UserDB): User {
        return {
            id: databaseUser.id,
            firstName: databaseUser.first_name,
            lastName: databaseUser.last_name,
            login: databaseUser.login,
            email: databaseUser.email,
            createdAt: new Date(databaseUser.created_at),
        }
    }

    async authUser(email: string): Promise<User> {
        const { data: user, error } = await supabase.from(this._tableName).select().eq("email", email).single()

        if (error) throw error

        return this._transformDatabaseUserToUser(user)
    }

    async createUser(user: Partial<User>): Promise<User> {
        return {} as User
    }

    async getUser(login: string): Promise<User> {
        const { data: user, error } = await supabase.from(this._tableName).select().eq("login", login).single()

        if (error) throw error

        return this._transformDatabaseUserToUser(user)
    }
}

export const userService = new UserService()
