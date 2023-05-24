import { BaseDatabase } from "./BaseDatabase";
import { Post, PostDBResponse } from "../models/Post"

export class PostDatabase extends BaseDatabase{
    static POSTS_TABLE = "posts"

    public getPostByName = async (q: string): Promise<PostDBResponse[]> => {
        const result: PostDBResponse[] = await BaseDatabase.connection(PostDatabase.POSTS_TABLE)
        .where({name: q})

        return result
    }

    public getPostById = async (id: string): Promise<PostDBResponse> => {
        const [result]: PostDBResponse[] = await BaseDatabase.connection(PostDatabase.POSTS_TABLE)
        .where({id})

        return result
    }

    public getAllPosts = async () => {
        const result = await BaseDatabase.connection(PostDatabase.POSTS_TABLE)
        return result
    }

    public createPost = async (post: Post): Promise<void> => {
        await BaseDatabase.connection(PostDatabase.POSTS_TABLE).insert(post.getDBModel())
    }

    public editPostById = async (post: PostDBResponse): Promise<void> => {
        await BaseDatabase.connection(PostDatabase.POSTS_TABLE)
        .update({
            name: post.name,
            email: post.email,
            created_at: post.created_at
        }).where({
            id: post.id
        })
    }

    public deletePostById = async (id: string): Promise<void> => {
        await BaseDatabase.connection(PostDatabase.POSTS_TABLE)
        .del().where({id})
    }
}