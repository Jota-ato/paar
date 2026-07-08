import { MemoryForm } from "@/features/memories/components/memory-form";
import { MemoryFormHeader } from "@/features/memories/components/memory-form-header";
import { requireAuth } from "@/lib/auth-server";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import { redirect } from "next/navigation";

export default async function CreateMemoryPage() {

    const { session } = await requireAuth()
    if (!session) redirect("/auth/sign-in")

    const { user } = session

    return (
        <PageWPadding>
            <Container className="space-y-6">
                <MemoryFormHeader
                    user={user}
                />
                <MemoryForm />
            </Container>
        </PageWPadding>
    )
}