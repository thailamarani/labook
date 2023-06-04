import { BaseDatabase } from "./BaseDatabase";
import { LikeDislikeDB, POST_LIKE, PostDB, PostDBWithCreatorName } from "../models/Post"
import { UserDatabase } from "./UserDatabase";

export class PostDatabase extends BaseDatabase {
    public static POSTS_TABLE = "posts"
    public static LIKES_DISLIKES_TABLE = "likes_dislikes"

    public insertPost = async (postDB: PostDB): Promise<void> => {
        await BaseDatabase
            .connection(PostDatabase.POSTS_TABLE)
            .insert(postDB)
    }

    public getPostsWithCreatorName = async (): Promise<PostDBWithCreatorName[]> => {
        const result = await BaseDatabase
            .connection(PostDatabase.POSTS_TABLE)
            .select(
                `${PostDatabase.POSTS_TABLE}.id`,
                `${PostDatabase.POSTS_TABLE}.content`,
                `${PostDatabase.POSTS_TABLE}.likes`,
                `${PostDatabase.POSTS_TABLE}.dislikes`,
                `${PostDatabase.POSTS_TABLE}.created_at`,
                `${PostDatabase.POSTS_TABLE}.updated_at`,
                `${UserDatabase.USERS_TABLE}.name as creator_name`
            )
            .join(
                `${UserDatabase.USERS_TABLE}`,
                `${PostDatabase.POSTS_TABLE}.creator_id`,
                "=",
                `${UserDatabase.USERS_TABLE}.id`
            )

        return result as PostDBWithCreatorName[]
    }

    public findPostById = async (id: string): Promise<PostDB | undefined> => {
        const [result] = await BaseDatabase
            .connection(PostDatabase.POSTS_TABLE)
            .select()
            .where({ id })

        return result as PostDB | undefined
    }

    public updatePost = async (postDB: PostDB): Promise<void> => {
        await BaseDatabase
            .connection(PostDatabase.POSTS_TABLE)
            .update(postDB)
            .where({ id: postDB.id })
    }

    public deletePostById = async (id: string): Promise<void> => {
        await BaseDatabase
            .connection(PostDatabase.POSTS_TABLE)
            .delete()
            .where({ id })
    }

    public findPostWithCreatorById = async (id: string): Promise<PostDBWithCreatorName | undefined> => {
        const [result] = await BaseDatabase
            .connection(PostDatabase.POSTS_TABLE)
            .select(
                `${PostDatabase.POSTS_TABLE}.id`,
                `${PostDatabase.POSTS_TABLE}.content`,
                `${PostDatabase.POSTS_TABLE}.likes`,
                `${PostDatabase.POSTS_TABLE}.dislikes`,
                `${PostDatabase.POSTS_TABLE}.created_at`,
                `${PostDatabase.POSTS_TABLE}.updated_at`,
                `${UserDatabase.USERS_TABLE}.name as creator_name`
            ).join(
                `${UserDatabase.USERS_TABLE}`,
                `${PostDatabase.POSTS_TABLE}.creator_id`,
                "=",
                `${UserDatabase.USERS_TABLE}.id`
            )
            .where({ [`${PostDatabase.POSTS_TABLE}.id`]: id })

        return result as PostDBWithCreatorName | undefined
    }

    public findLikeDislike = async (likeDislikeDB: LikeDislikeDB): Promise<POST_LIKE | undefined> => {
        const [result]: Array<LikeDislikeDB | undefined> = await BaseDatabase
            .connection(PostDatabase.LIKES_DISLIKES_TABLE)
            .select()
            .where({
                user_id: likeDislikeDB.user_id,
                post_id: likeDislikeDB.post_id
            })

        if (result === undefined) {
            return undefined
        } else if (result.like === 1) {
            return POST_LIKE.ALREADY_LIKED
        } else {
            return POST_LIKE.ALREADY_DISLIKED
        }
    }

    public removeLikeDislike = async (likeDislikeDB: LikeDislikeDB): Promise<void> => {
        await BaseDatabase
            .connection(PostDatabase.LIKES_DISLIKES_TABLE)
            .delete()
            .where({
                user_id: likeDislikeDB.user_id,
                post_id: likeDislikeDB.post_id
            })
    }

    public updateLikeDislike = async (likeDislikeDB: LikeDislikeDB): Promise<void> => {
        await BaseDatabase
            .connection(PostDatabase.LIKES_DISLIKES_TABLE)
            .update(likeDislikeDB)
            .where({
                user_id: likeDislikeDB.user_id,
                post_id: likeDislikeDB.post_id
            })
    }

    public insertLikeDislike = async (likeDislikeDB: LikeDislikeDB): Promise<void> => {
        await BaseDatabase
            .connection(PostDatabase.LIKES_DISLIKES_TABLE)
            .insert(likeDislikeDB)
    }
}