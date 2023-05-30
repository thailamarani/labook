import { PostDatabase } from "../database/PostDatabase";
import { PostInputDTO } from "../dtos/post/getPost.dto";
import { Post, PostDBResponse } from "../models/Post";
import { CreatePostInputDTO } from "../dtos/post/createPost.dto";
import { EditPostInputDTO } from "../dtos/post/editPost.dto";
import { DeletePostInputDTO } from "../dtos/post/deletePost.dto";

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase
    ) { }

    public getPosts = async (input: PostInputDTO): Promise<PostDBResponse[]> => {
        const { q } = input
        let postDB: PostDBResponse[]
        if(q){
            postDB = await this.postDatabase.getPostByName(q)
        } else {
            postDB = await this.postDatabase.getAllPosts()
        }

        return postDB
    }

    public createPosts = async (input: CreatePostInputDTO) => {
        const { id, name, email, createdAt } = input

        const IdExists = await this.postDatabase.getPostById(id)

        const newPost = new Post(id, name, email, createdAt)

        const result = await this.postDatabase.createPost(newPost)

        return "Post criado com sucesso!"
    }

    public editPosts = async (input: EditPostInputDTO): Promise<string> => {
        const { id, name, email, createdAt } = input

        const isPostIdValid = await this.postDatabase.getPostById(id)

        if(!isPostIdValid){
            throw new Error("id não existe")
        }

        const post = new Post(id, name || isPostIdValid.name, email || isPostIdValid.email, createdAt || isPostIdValid.created_at)

        const postDB: PostDBResponse = {
            id: post.getId(),
            name: post.getName(),
            email: post.getEmail(),
            created_at: post.getCreatedAt()
        }

        await this.postDatabase.editPostById(postDB)

        const result = "Post alterado com sucesso!"

        return result
    }

    public deletePost = async (input: DeletePostInputDTO): Promise<string> => {
        const { id } = input

        const isPostIdValid = await this.postDatabase.getPostById(id)

        if(!isPostIdValid){
            throw new Error("id não encontrado")
        }

        await this.postDatabase.deletePostById(id)

        return "Post deletado com sucesso!"
    }
}