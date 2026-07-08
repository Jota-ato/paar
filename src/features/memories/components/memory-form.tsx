"use client"
import { FieldSet } from "@/shared/components/ui/field";
import { ImageUploader } from "@/shared/components/upload/image-uploader";
import { Input } from "@/shared/components/ui/input";
import { DatePicker } from "@/shared/components/forms/date-picker";
import { useMemoryStore } from "../stores/memories-store";

export function MemoryForm() {

    const {
        memoryTitle,
        memoryDate,
        memoryDescription,
        memoryImageUrl,
        setMemoryTitle,
        setMemoryDate,
        setMemoryDescription,
        setMemoryImageUrl
    } = useMemoryStore()

    return (
        <form>
            <FieldSet className="p-0">
                <Input
                    className="w-full bg-transparent! rounded-none border-0 text-xl p-0 pb-1 focus:outline-none "
                    placeholder="Nuevo recuerdo"
                    value={memoryTitle || ""}
                    onChange={(e) => setMemoryTitle(e.target.value)}
                />
                <DatePicker
                    date={memoryDate || undefined}
                    setDate={setMemoryDate}
                />
                <ImageUploader
                    image={memoryImageUrl || ""}
                    onChange={setMemoryImageUrl}
                />
                <textarea
                    className="w-full min-h-60 focus:outline-none resize-none"
                    placeholder="Descripción del recuerdo"
                    value={memoryDescription || ""}
                    onChange={(e) => setMemoryDescription(e.target.value)}
                />
            </FieldSet>
        </form>
    )
}