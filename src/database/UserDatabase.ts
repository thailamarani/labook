import { BaseDatabase } from "./BaseDatabase";
import { User, UserDBResponse} from "../models/User";

export class UserDatabase extends BaseDatabase{
    static USERS_TABLE = "users"

    public getUserByName = async (q: string): Promise<UserDBResponse[]> => {
        const result: UserDBResponse[] = await BaseDatabase.connection(UserDatabase.USERS_TABLE)
        .where({name: q})

        return result
    }

    public getAllUsers = async () => {
        const result = await BaseDatabase.connection(UserDatabase.USERS_TABLE)
        return result
    }
}