import { UserDatabase } from "../database/UserDatabase";

export class UserBusiness{
    public getUsers() {
    const userDatabase = new UserDatabase()
    const output = userDatabase.findUsers}}