export interface PostDB {
    id: string,
    creator_id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string
}

export interface PostDBWithCreatorName {
    id: string,
    creator_id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string,
    creator_name: string
}

export interface PostModel {
    id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string,
    creator: {
        id: string,
        name: string
    }
}

export interface LikeDislikeDB {
    user_id: string,
    post_id: string,
    like: number
}

export enum POST_LIKE {
    ALREADY_LIKED = "ALREADY LIKED",
    ALREADY_DISLIKED = "ALREADY DISLIKED"
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private likes: number,
        private dislikes: number,
        private createdAt: string,
        private updatedAt: string,
        private creatorId: string,
        private creatorName: string
    ) { }

    public getDBModel() {
        return {
            id: this.id,
            creatorId: this.creatorId,
            content: this.content,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        }
    }

    public getId(): string {
        return this.id
    }
    public setId(newId: string): void {
        this.id = newId
    }

    public getContent(): string {
        return this.content
    }
    public setContent(newContent: string): void {
        this.content = newContent
    }

    public getLikes(): number {
        return this.likes
    }
    public setLikes(newLikes: number): void {
        this.likes = newLikes
    }

    public addLike = (): void => {
        this.likes++
    }

    public removeLike = (): void => {
        this.likes--
    }

    public getDislikes(): number {
        return this.dislikes
    }
    public setDislikes(newDislikes: number): void {
        this.dislikes = newDislikes
    }

    public addDislike = (): void => {
        this.dislikes++
    }
    
    public removeDislike = (): void => {
        this.dislikes--
    }

    public getCreatedAt(): string {
        return this.createdAt
    }
    public setCreatedAt(newCreatedAt: string): void {
        this.createdAt = newCreatedAt
    }

    public getUpdatedAt(): string {
        return this.updatedAt
    }
    public setUpdatedAt(newUpdatedAt: string): void {
        this.updatedAt = newUpdatedAt
    }

    public getCreatorId(): string {
        return this.creatorId
    }
    public setCreatorId(newCreatorId: string): void {
        this.creatorId = newCreatorId
    }

    public getCreatorName(): string {
        return this.creatorName
    }
    public setCreatorName(newCreatorName: string): void {
        this.creatorName = newCreatorName
    }



    public toDBModelPost(): PostDB {
        return {
            id: this.id,
            creator_id: this.creatorId,
            content: this.content,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        }
    }

    public toBusinessModelPost(): PostModel {
        return {
            id: this.id,
            content: this.content,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.createdAt,
            updated_at: this.updatedAt,
            creator: {
                id: this.creatorId,
                name: this.creatorName
            }
        }
    }
}