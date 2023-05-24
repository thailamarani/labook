import { BaseError } from "./BaseError";

export class InvalidPostError extends BaseError {
    constructor(
        message: string = "Dados inválidos"
    ){
        super(400, message)
    }
}