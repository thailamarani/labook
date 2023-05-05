import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    public getUsers() {
        const userBusiness = new UserBusiness()
        const output = userBusiness.getUsers
    }
}