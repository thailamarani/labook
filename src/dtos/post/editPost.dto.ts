import z from "zod";

export interface EditPostInputDTO {
    id: string,
    name?: string,
    email?: string,
    createdAt?: string
}

export const EditPostSchema = z.object({
    id: z.string({
        invalid_type_error: "id deve ser string"})
    .min(4, "id precisa ter no mínimo 4 caracteres"),
    name: z.string({
        invalid_type_error: "name deve ser string"})
    .min(2, "name precisa ter no mínimo 2 caracteres")
    .optional(),
    email: z.string({
        invalid_type_error: "email deve ser string"})
    .min(2, "email precisa ter no mínimo 2 caracteres")
    .optional(),
    createdAt: z.string({
        invalid_type_error: "createdAt deve ser string"})
    .min(4, "createdAt precisa ter no mínimo 4 caracteres")
    .optional()
}).transform(data => data as EditPostInputDTO)