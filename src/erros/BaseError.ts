export class BaseError extends Error{
    constructor(
        private statusCode: number,
        message: string
    ){
        super(message)
    }
}