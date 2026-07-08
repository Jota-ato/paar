"use client"

import { UploadDropzone, uploadFiles } from "@/shared/utils/uploadthing"
import { useState } from "react"
import { toast } from "sonner"
import { ImageIcon, X, CheckCircle2, Loader2 } from "lucide-react"
import Image from "next/image";
import { compressImage } from "@/shared/lib/image-compresor"

export function ImageUploader({
    onChange,
    image
}: {
    onChange: (url: string | null) => void
    image?: string
}) {
    const imageUrl = image ?? null
    const [isUploading, setIsUploading] = useState(false)
    const [isCompressing, setIsCompressing] = useState(false)

    const handleChange = async (files: File[]) => {
        if (!files || files.length === 0) return

        try {
            setIsCompressing(true)
            const compressedFiles = await Promise.all(
                files.map(async (file) => {
                    return await compressImage(file, {
                        maxSizeMB: 0.8,
                        maxWidthOrHeight: 1440,
                    })
                })
            )
            setIsCompressing(false)

            setIsUploading(true)
            toast.info("Iniciando subida al storage...")

            const res = await uploadFiles("paarUploader", {
                files: compressedFiles,
            })

            setIsUploading(false)

            const fileUrl = res?.[0]?.ufsUrl
            if (fileUrl) {
                onChange(fileUrl)
                toast.success("Imagen optimizada y subida correctamente")
            }
        } catch (error: any) {
            setIsCompressing(false)
            setIsUploading(false)
            const errorMessage = error?.message ?? "Error desconocido en el proceso"
            toast.error(`Error en el proceso: ${errorMessage}`)
            console.error("Upload error under the hood:", error)
        }
    }

    const isLoadingState = isUploading || isCompressing

    return (
        <div className="space-y-2">

            {imageUrl ? (
                <div className="relative group rounded-xl overflow-hidden border border-border h-60 w-full">
                    <Image
                        src={imageUrl}
                        fill
                        alt="Imagen subida"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                onChange(null)
                            }}
                            className="flex items-center gap-1.5 text-xs font-medium bg-white text-black rounded-lg px-3 py-1.5 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                            <X className="size-3.5" />
                            Cambiar imagen
                        </button>
                    </div>
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        <CheckCircle2 className="size-3" />
                        Subida
                    </div>
                </div>
            ) : (
                <UploadDropzone
                    endpoint="paarUploader"
                    onChange={handleChange}
                    content={{
                        label: isCompressing
                            ? "Optimizando peso de la imagen..."
                            : isUploading
                                ? "Subiendo imagen..."
                                : "Arrastra una imagen aquí",
                        allowedContent: "PNG, JPG o WEBP",
                        button() {
                            if (isCompressing) return "Procesando..."
                            if (isUploading) return "Subiendo..."
                            return "Seleccionar archivo"
                        },
                        uploadIcon: () => isLoadingState ? (
                            <Loader2 className="size-8 text-primary animate-spin" />
                        ) : (
                            <ImageIcon className="size-8 text-muted-foreground" />
                        )
                    }}
                    appearance={{
                        container: `
                            relative flex flex-col items-center justify-center
                            border-2 border-dashed rounded-xl
                            h-40 w-full cursor-pointer
                            transition-colors duration-200
                            ${isUploading
                                ? "border-primary/50 bg-primary/5"
                                : "border-border hover:border-primary/50 hover:bg-muted/50"
                            }
                        `,
                        uploadIcon: "size-8 text-muted-foreground mb-1",
                        label: "text-sm font-medium text-foreground mt-1",
                        allowedContent: "text-xs text-muted-foreground mt-0.5",
                        button: `
                            mt-3 px-4 py-1.5 rounded-lg text-xs font-semibold
                            bg-primary text-primary-foreground
                            hover:opacity-90 transition-opacity
                            disabled:opacity-50
                        `,
                    }}
                    onUploadBegin={() => {
                        setIsUploading(true)
                        toast.info("Subiendo imagen...")
                    }}
                    onClientUploadComplete={(res) => {
                        setIsUploading(false)
                        onChange(res[0].ufsUrl)
                        toast.success("Imagen subida correctamente")
                    }}
                    onUploadError={() => {
                        setIsUploading(false)
                        toast.error(`Error al subir`)
                    }}
                />
            )}
        </div>
    )
}