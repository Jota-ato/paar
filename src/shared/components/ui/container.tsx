import { cn } from "@/shared/utils/styles";
import { ReactNode } from "react";

export function Container({
    children,
    className
}: {
    children?: ReactNode
    className?: string
}) {
    return (
        <div
            className={cn("w-[85%] max-w-2xl mx-auto", className)}
        >
            {children}
        </div>
    )
}