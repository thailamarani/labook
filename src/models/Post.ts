export class Post {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private created_at: string
    ) { }

    public getDBModel(){
        return{
            id: this.id,
            name: this.name,
            email: this.email,
            created_at: this.created_at
        }
    }

    public getId(): string {
        return this.id
    }
    public setId(newId: string): void {
        this.id = newId
    }

    public getName(): string {
        return this.name
    }
    public setName(newName: string): void {
        this.name = newName
    }

    public getEmail(): string {
        return this.email
    }
    public setEmail(newEmail: string): void {
        this.email = newEmail
    }

    public getCreatedAt(): string {
        return this.created_at
    }
    public setCreatedAt(newCreatedAt: string): void {
        this.created_at = newCreatedAt
    }
}

export interface PostDBResponse{
    id: string,
    name: string,
    email: string,
    created_at: string
}