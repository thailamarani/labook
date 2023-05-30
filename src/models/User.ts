export interface TokenPayload {
    id: string,
    creator_id: string,
    content: string,
    likes: string,
    dislikes: string,
    created_at: string,
    updated_at: string
}

export interface SignupOutputDTO {
    message: string,
    token: string
}

export class User {
    constructor(
        private id: string,
        private creator_id: string,
        private content: string,
        private likes: string,
        private dislikes: string,
        private created_at: string,
        private updated_at: string
    ) { }

    public getDBModel(){
        return{
            id: this.id,
            creator_id: this.creator_id,
            content: this.content,
            likes: this.likes,
            dislides: this.dislikes,
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }

    public getId(): string {
        return this.id
    }
    public setId(newId: string): void {
        this.id = newId
    }

    public getCreatorId(): string {
        return this.creator_id
    }
    public setCreatorId(newCreatorId: string): void {
        this.creator_id = newCreatorId
    }

    public getContent(): string {
        return this.content
    }
    public setContent(newContent: string): void {
        this.content = newContent
    }

    public getLikes(): string {
        return this.likes
    }
    public setLikes(newLikes: string): void {
        this.likes = newLikes
    }

    public getDislikes(): string {
        return this.dislikes
    }
    public setDislikes(newDislikes: string): void {
        this.dislikes = newDislikes
    }

    public getCreatedAt(): string {
        return this.created_at
    }
    public setCreatedAt(newCreatedAt: string): void {
        this.created_at = newCreatedAt
    }

    public getUpdatedAt(): string {
        return this.updated_at
    }
    public setUpdatedAt(newUpdatedAt: string): void {
        this.updated_at = newUpdatedAt
    }
}

export interface UserDBResponse{
    id: string,
    creator_id: string,
    content: string,
    likes: string,
    dislikes: string,
    created_at: string,
    updated_at: string
}