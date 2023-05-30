import z from "zod";

export interface DeletePostInputDTO {
    id: string
}

export const DeletePostSchema = z.object({
    id: z.string({
        invalid_type_error: "id deve ser string"})
    .min(4, "id precisa ter no mínimo 4 caracteres")
}).transform(data => data as DeletePostInputDTO)