import { cn } from "@/shared/utils/styles"
import { ReactNode } from "react"

export function Card({
    children,
    className,
    outline = false
}: {
    children: ReactNode
    className?: string
    outline?: boolean
}) {
    return (
        <div className={cn(
            "rounded-md shadow-md py-4 px-6 border border-surface-muted",
            outline ? "bg-transparent" : "bg-surface",
            className)}
        >
            {children}
        </div>
    )
}