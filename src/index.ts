import express from 'express';
import cors from 'cors';
import { postRouter } from './router/PostRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
});

app.use("/posts", postRouter)