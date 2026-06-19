"use client"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
    FieldSet
} from "@/shared/components/ui/field"
import { Input } from "@/shared/components/ui/input"
import { User } from "../types/user.types"
import { Textarea } from "@/shared/components/ui/textarea"
import { Button } from "@/shared/components/ui/button"
import { useForm } from "react-hook-form"
import { UserInput, userSchema } from "../schemas/user-schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { showResponse } from "@/shared/utils/client-actions"
import { updateUserAction } from "../actions/user-actions"
import { Spinner } from "@/shared/components/ui/spinner"
import { toast } from "sonner"

export function UserDataForm({
    user
}: {
    user: User
}) {

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<UserInput>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: user.name,
            description: user.description
        }
    })

    const editUser = async (data: UserInput) => {
        showResponse(await updateUserAction(user, data))
    }

    return (
        <form
            onSubmit={handleSubmit(editUser)}
        >
            <FieldSet>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="name">Nombre</FieldLabel>
                        <Input
                            className="text-sm"
                            id="name"
                            placeholder="nombre"
                            {...register("name")}
                        />
                        {errors.name &&
                            <FieldError>
                                {errors.name.message}
                            </FieldError>
                        }
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="description">Descripción</FieldLabel>
                        <Textarea
                            className="text-sm"
                            id="description"
                            placeholder="Descripción"
                            {...register("description")}
                        />
                        {errors.description &&
                            <FieldError>
                                {errors.description.message}
                            </FieldError>
                        }
                    </Field>
                </FieldGroup>
                <FieldSeparator />
                <Button
                    type="submit"
                >
                    {isSubmitting ? <p className="flex items-center gap-2"><Spinner/>Guardando...</p> : 'Guardar'}
                </Button>
            </FieldSet>
        </form>
    )
}