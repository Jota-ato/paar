import { requireAuth } from "@/lib/auth-server";
import { AppSideBar } from "@/shared/components/controls/app-side-bar";
import { MobileNavigation } from "@/shared/components/controls/mobile-navigation";
import { SidebarProvider, SidebarTrigger } from "@/shared/components/ui/sidebar";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AppLayout({
    children
}: {
    children: ReactNode
}) {

    const { session } = await requireAuth()
    if (!session) {
        return redirect("/auth/sign-in")
    }

    return (
        <section
            className="h-full flex flex-col"
        >
            <SidebarProvider>
                <AppSideBar />
                <main className="flex-1">
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
            <MobileNavigation />
        </section>
    );
}