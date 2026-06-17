import { cn } from "@/shared/utils/styles"
import { ReactNode } from "react"

export function Card({ 
    children, 
    className 
}: { 
    children: ReactNode
    className?: string 
}) {
    return (
        <div className={cn("rounded shadow-md py-4 px-6 bg-surface border border-surface-muted", className)}>
            {children}
        </div>
    )
}