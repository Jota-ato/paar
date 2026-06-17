import { cn } from "@/shared/utils/styles";
import { ElementType, ReactNode } from "react";

type Props = {
    children: ReactNode
    level?: 1 | 2 | 3 | 4 | 5 | 6
    className?: string
}

export function Heading({ children, level = 1, className }: Props) {

    const Tag: ElementType = `h${level}`

    const sizeMap: Record<number, string> = {
        1: 'text-2xl sm:text-3xl',
        2: 'text-xl sm:text-2xl',
        3: 'text-lg sm:text-xl',
        4: 'text-base sm:text-lg',
        5: 'text-sm sm:text-base',
        6: 'text-xs sm:text-sm',
    }
    
    return (
        <Tag className={cn(
            "font-bold uppercase text-center",
            sizeMap[level], className
        )}>
            {children}
        </Tag>
    )
}