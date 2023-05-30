import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../dtos/user/getUser.dto";


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public getUsers = async (req: Request, res: Response) => {
        try {
            const input: UserInputDTO = {
                q: req.query.q as string
            }
            const result = await this.userBusiness.getUsers(input)
            res.status(200).send({result})
        
        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                res.status(400).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
}