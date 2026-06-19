import { z } from "zod"

export const userSchema = z.object({
    name: z
        .string({ error: "Nombre requerido" })
        .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
    description: z
        .string()
        .nullable()
})

export type UserInput = z.infer<typeof userSchema>