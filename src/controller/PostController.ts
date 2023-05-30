import { PostBusiness } from "../business/PostBusiness";
import { Request, Response } from "express";
import { EditPostSchema } from "../dtos/post/editPost.dto";
import { PostInputDTO } from "../dtos/post/getPost.dto";
import { CreatePostSchema } from "../dtos/post/createPost.dto";
import { DeletePostSchema } from "../dtos/post/deletePost.dto";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }

    public getPosts = async (req: Request, res: Response) => {
        try {
            const input: PostInputDTO = {
                q: req.query.q as string
            }
            const result = await this.postBusiness.getPosts(input)
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

    public createPosts = async (req: Request, res: Response) => {
        try{
            const input = CreatePostSchema.parse({
            id: req.body.name,
            name: req.body.id,
            email: req.body.email,
            createdAt: req.body.createdAt
            })

            const result = await this.postBusiness.createPosts(input)

            res.status(201).send(result)
        
        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                res.status(400).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    
    }

    public editPosts = async (req: Request, res: Response) => {
        try{
            const input = EditPostSchema.parse({
                id: req.params.id,
                name: req.body.name,
                email: req.body.email,
                createdAt: req.body.createdAt
            })

            const result = await this.postBusiness.editPosts(input)
            res.status(200).send(result)
        
        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                res.status(400).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public deletePosts = async (req: Request, res: Response) => {
        try{
            const input = DeletePostSchema.parse ({
                id: req.params.id 
            })

            const result = await this.postBusiness.deletePost(input)

            res.status(200).send(result)
        
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