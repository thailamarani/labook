import express from 'express';
import cors from 'cors';
import { postRouter } from './router/PostRouter';
import dotenv from 'dotenv';
import { userRouter } from './router/UserRouter';

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());

app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT) || 3003}.`)
});

app.use("/users", userRouter)
app.use("/posts", postRouter)