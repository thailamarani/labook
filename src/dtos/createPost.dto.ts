import z from "zod";

export interface CreatePostInputDTO{
    id: string,
    name: string,
    email: string,
    createdAt: string
}

export const CreatePostSchema = z.object({
    id: z.string({
        invalid_type_error: "id deve ser string"})
        .min(4, "id precisa ter no mínimo 4 caracteres"),
    name: z.string({
        invalid_type_error: "name deve ser string"})
        .min(2, "name precisa ter no mínimo 2 caracteres"),
    email: z.string({
        invalid_type_error: "email deve ser string"})
    .min(2, "email precisa ter no mínimo 2 caracteres"),
    createdAt: z.string({
        invalid_type_error: "createdAt deve ser string"})
    .min(4, "createdAt precisa ter no mínimo 4 caracteres")
}).transform(data => data as CreatePostInputDTO)