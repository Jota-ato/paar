"use client"
import { Home, Image, PenBox, User } from "lucide-react";
import { Card } from "../ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/utils/styles";
import { ElementType } from "react";
import { Route } from "next";
import { Container } from "../ui/container";
import { isActive } from "@/shared/utils/pathname";

export type NavItem = {
    href: Route;
    icon: ElementType;
    label: string;
    exact?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
    { href: "/app",         icon: Home,   label: "Inicio",    exact: true },
    { href: "/app/notes",    icon: PenBox, label: "Notas" },
    { href: "/app/memories", icon: Image,  label: "Recuerdos" },
    { href: "/app/user",     icon: User,   label: "Perfil" },
]

export function MobileNavigation() {
    const pathname = usePathname()

    return (
        <Container className="bg-transparent sticky bottom-0 py-4 flex items-center justify-center md:hidden">
            <Card className="flex flex-row bg-surface/80 w-full items-center justify-evenly p-2">
                {NAV_ITEMS.map(({ href, icon: Icon, label, ...item }) => {
                    const active = isActive({ href, ...item, label }, pathname)
                    return (
                        <Link
                            key={href}
                            href={href}
                            aria-label={label}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                                "p-2 rounded-full transition-colors",
                                active
                                    ? "bg-surface-hover/70 text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Icon />
                        </Link>
                    )
                })}
            </Card>
        </Container>
    )
}