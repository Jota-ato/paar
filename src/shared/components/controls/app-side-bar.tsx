"use client"

import Link from "next/link"
import { Heading } from "../typography/heading"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, useSidebar } from "../ui/sidebar"
import { NAV_ITEMS } from "./mobile-navigation"
import { isActive } from "@/shared/utils/pathname"
import { usePathname } from "next/navigation"
import { cn } from "@/shared/lib/utils"

export function AppSideBar() {

  const pathname = usePathname()
  const { open } = useSidebar()

  return (
    <Sidebar className="border-none" collapsible="icon">
      <SidebarHeader className="p-4">
        <Heading level={2}>
          {open ? "Paar" : "P"}
        </Heading>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Navegación
          </SidebarGroupLabel>
          <SidebarMenu>
            {NAV_ITEMS.map(item => {
              const active = isActive(item, pathname)
              return (
                <SidebarMenuItem
                  key={item.href}
                >
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "p-2 rounded-full transition-colors flex items-center gap-2 text-sm",
                      active
                        ? "bg-surface-hover/70 text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <item.icon className="size-4"/>
                    {open && <span>{item.label}</span>}
                  </Link>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}