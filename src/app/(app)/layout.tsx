import { requireAuth } from "@/lib/auth-server";
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
        <div
        >
            {children}
        </div>
    );
}