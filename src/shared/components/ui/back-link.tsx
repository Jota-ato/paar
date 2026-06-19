import { ChevronLeft } from "lucide-react";
import { Route } from "next";
import Link from "next/link";

export function BackLink({
    href
}: {
    href: Route
}) {
  return (
    <Link
        href={href}
    >
        <ChevronLeft className="mr-2 h-5 w-5" />
    </Link>
  )
}