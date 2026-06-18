import { requireAuth } from "@/lib/auth-server";
import { Heading } from "@/shared/components/typography/heading";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import { redirect } from "next/navigation";

export default async function SettingsPage() {

    const { session } = await requireAuth()

    if (!session) {
        return redirect("/auth/sign-in")
    }

    const { user } = session

    return (
        <PageWPadding>
            <Container>
                <Heading>Configuración de cuenta</Heading>
            </Container>
        </PageWPadding>
    )
}