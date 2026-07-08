"use client"
import { FieldSet } from "@/shared/components/ui/field";
import { ImageUploader } from "@/shared/components/upload/image-uploader";
import { Input } from "@/shared/components/ui/input";
import { DatePicker } from "@/shared/components/forms/date-picker";
import { useMemoryStore } from "../stores/memories-store";
import { Memory } from "@/db/schema";

export function MemoryForm({
    dbMemory
}: {
    dbMemory?: Memory
}) {

    const {
        memory,
        setMemory
    } = useMemoryStore()

    if (dbMemory) setMemory({...dbMemory})

    return (
        <form>
            <FieldSet className="p-0">
                <Input
                    className="w-full bg-transparent! rounded-none border-0 text-xl p-0 pb-1 focus:outline-none "
                    placeholder="Nuevo recuerdo"
                    value={memory.title}
                    onChange={(e) => setMemory({ ...memory, title: e.target.value })}
                />
                <DatePicker
                    date={memory.date ?? undefined}
                    setDate={(date) => setMemory({ ...memory, date: date ?? null })}
                />
                <ImageUploader
                    image={memory.image}
                    onChange={(image) => setMemory({ ...memory, image: image ?? "" })}
                />
                <textarea
                    className="w-full min-h-60 focus:outline-none resize-none"
                    placeholder="Descripción del recuerdo"
                    value={memory.description}
                    onChange={(e) => setMemory({ ...memory, description: e.target.value })}
                />
            </FieldSet>
        </form>
    )
}