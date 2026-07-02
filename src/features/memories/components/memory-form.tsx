"use client"
import { FieldSet } from "@/shared/components/ui/field";
import { ImageUploader } from "@/shared/components/upload/image-uploader";
import { Input } from "@/shared/components/ui/input";
import { DatePicker } from "@/shared/components/forms/date-picker";


export function MemoryForm() {
    return (
        <form>
            <FieldSet>
                <Input
                    className="w-full bg-transparent! rounded-none border-0 text-xl p-0 pb-1 focus:outline-none "
                    placeholder="Nueva memoria"
                />
                <DatePicker />
                <ImageUploader
                    onChange={(url) => console.log(url)}
                />
                <textarea
                    className="w-full min-h-60 focus:outline-none resize-none"
                    placeholder="Descripción de la memoria"
                />
            </FieldSet>
        </form>
    )
}