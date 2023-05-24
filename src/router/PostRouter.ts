import express from "express";
import { PostController } from "../controller/PostController";
import { PostBusiness } from "../business/PostBusiness";
import { PostDatabase } from "../database/PostDatabase";

export const postRouter = express.Router()
const postController = new PostController(
    new PostBusiness(
        new PostDatabase))

postRouter.get("/", postController.getPosts)
postRouter.post("/", postController.createPosts)
postRouter.put("/", postController.editPosts)
postRouter.delete("/", postController.deletePosts)