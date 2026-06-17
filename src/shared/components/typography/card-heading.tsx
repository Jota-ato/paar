import { cn } from "@/shared/utils/styles";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
    className?: string
}

export function CardHeading({ children, className }: Props) {
    
    return (
        <p className={cn(
            "font-bold text-base sm:text-lg",
            className
        )}>
            {children}
        </p>
    )
}