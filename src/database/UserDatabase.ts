import { BaseDatabase } from "./BaseDatabase";
import { User, UserDB } from "../models/User";

export class UserDatabase extends BaseDatabase {
    public static USERS_TABLE = "users"

    public insertUser = async (userDB: UserDB): Promise<void> => {
        await BaseDatabase
            .connection(UserDatabase.USERS_TABLE)
            .insert(userDB)
    }

    public findUserByEmail = async (email: string): Promise<UserDB | undefined> => {
        const [userDB] = await BaseDatabase
            .connection(UserDatabase.USERS_TABLE)
            .select()
            .where({ email: email })

        return userDB as UserDB | undefined
    }
}