import { requireAuth } from "@/lib/auth-server";
import { Navigation } from "@/shared/components/controls/navigation";
import { PageTransition } from "@/shared/components/ui/page-transition";
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
            <main className="flex-1 overflow-auto">
                <PageTransition>
                    {children}
                </PageTransition>
            </main>
            <Navigation />
        </section>
    );
}