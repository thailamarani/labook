import { UserDatabase } from "../database/UserDatabase"
import { UserInputDTO } from "../dtos/user/getUser.dto"
import { UserDBResponse } from "../models/User"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase
    ) { }

    public getUsers = async (input: UserInputDTO): Promise<UserDBResponse[]> => {
        const { q } = input
        let userDB: UserDBResponse[]
        if(q){
            userDB = await this.userDatabase.getUserByName(q)
        } else {
            userDB = await this.userDatabase.getAllUsers()
        }
        return userDB
    }
}