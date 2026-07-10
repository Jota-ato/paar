"use client"
import { Save, Trash } from "lucide-react";
import { BackLink } from "@/shared/components/ui/back-link";
import { initialMemory, useMemoryStore } from "../stores/memories-store";
import { showResponse } from "@/shared/utils/client-actions";
import { createMemoryAction, deleteMemoryAction, updateMemoryAction } from "../actions/memories-actions";
import { User } from "@/features/user/types/user.types";
import { redirect } from "next/navigation";

export function MemoryFormHeader({
    user,
}: {
    user: User
}) {

    const {
        memory,
        setMemory
    } = useMemoryStore()

    const handleSave = async () => {
        if ("id" in memory && "createdBy" in memory) {
            showResponse(await updateMemoryAction(memory.id, memory, user.id))
        } else {
            showResponse(await createMemoryAction(memory, user.id))
        }
        setMemory({
            ...initialMemory
        })
        redirect("/app/memories")
    }

    const handleDelete = async () => {
        if (!memory.id) return
        showResponse(await deleteMemoryAction(memory.id, user.id))
        setMemory({
            ...initialMemory
        })
        redirect("/app/memories")
    }

    return (
        <nav className="flex items-center justify-between gap-2">
            <BackLink href="/app/memories" />
            <div className="flex items-center gap-4">
                <Save
                    aria-label="Guardar memoria"
                    className="stroke-muted-foreground w-5 h-5 hover:stroke-accent cursor-pointer transition-all duration-200"
                    strokeWidth={1.5}
                    onClick={handleSave}
                />
                <Trash
                    aria-label="Eliminar memoria"
                    className="stroke-muted-foreground w-5 h-5 hover:stroke-destructive cursor-pointer transition-all duration-200"
                    strokeWidth={1.5}
                    onClick={handleDelete}
                />
            </div>
        </nav>
    )
}