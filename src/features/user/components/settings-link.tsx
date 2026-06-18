import { cn } from "@/shared/utils/styles"
import Link from "next/link"
import { Route } from "next"

export function UserLinks({
    href,
    children,
    className
}: {
    href: Route
    children: React.ReactNode
    className?: string
}) {
    return (
        <Link
            href={href}
            className={cn(
                "block px-4 py-4 text-sm border-b last-of-type:border-0 border-muted-foreground",
                className
            )}
        >
            {children}
        </Link>
    )
}