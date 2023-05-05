export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private created_at: string
    ) { }

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