import { Save, Trash } from "lucide-react";
import { BackLink } from "@/shared/components/ui/back-link";

export function MemoryFormHeader() {
    return (
        <nav className="flex items-center justify-between gap-2">
            <BackLink href="/memories" />
            <div className="flex items-center gap-4">
                <Save className="stroke-muted-foreground w-5 h-5 hover:stroke-accent cursor-pointer transition-all duration-200" strokeWidth={1.5} />
                <Trash className="stroke-muted-foreground w-5 h-5 hover:stroke-destructive cursor-pointer transition-all duration-200" strokeWidth={1.5} />
            </div>
        </nav>
    )
}