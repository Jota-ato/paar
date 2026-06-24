import { cn } from "@/shared/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Route } from "next";
import Link from "next/link";

export function BackLink({
    href,
    className,
}: {
    href: Route
    className?: string
}) {
  return (
    <Link
        href={href}
    >
        <ChevronLeft className={cn("mr-2 h-5 w-5", className)} />
    </Link>
  )
}