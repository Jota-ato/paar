"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/shared/components/ui/field";
import { ImageUploader } from "@/shared/components/upload/image-uploader";
import { Input } from "@/shared/components/ui/input";
import { DatePicker } from "@/shared/components/forms/date-picker";
import { initialMemory, useMemoryStore } from "../stores/memories-store";
import { Memory } from "@/db/schema";
import { useEffect } from "react";
import { Textarea } from "@/shared/components/ui/textarea";

export function MemoryForm({
    dbMemory
}: {
    dbMemory?: Memory
}) {

    const {
        memory,
        setMemory
    } = useMemoryStore()

    useEffect(() => {
        if (dbMemory) {
            setMemory({ ...dbMemory });
        } else {
            setMemory({
                ...initialMemory
            })
        }
    }, [dbMemory?.id]);

    return (
        <form>
            <FieldSet className="p-0">
                <FieldGroup>
                    <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
                        <Field>
                            <FieldLabel className="sr-only" htmlFor="title">Título del recuerdo</FieldLabel>
                            <Input
                                id="title"
                                name="title"
                                className="w-full bg-transparent! rounded-none border-0 text-xl! p-0 pb-1 focus:outline-none "
                                placeholder="Nuevo recuerdo"
                                value={memory.title}
                                onChange={(e) => setMemory({ ...memory, title: e.target.value })}
                            />
                        </Field>
                        <Field>
                            <FieldLabel className="sr-only" htmlFor="date">Date</FieldLabel>
                            <DatePicker
                                date={memory.date ?? undefined}
                                setDate={(date) => setMemory({ ...memory })}
                            />
                        </Field>
                    </div>

                    <ImageUploader
                        image={memory.image}
                        onChange={(image) => setMemory({ ...memory, image: image ?? "" })}
                    />
                    <Textarea
                        className="w-full min-h-60 focus:ring-0! focus:outline-none! resize-none! bg-transparent! border-none!"
                        placeholder="Descripción del recuerdo"
                        value={memory.description}
                        onChange={(e) => setMemory({ ...memory, description: e.target.value })}
                    />
                </FieldGroup>
            </FieldSet>
        </form>
    )
}