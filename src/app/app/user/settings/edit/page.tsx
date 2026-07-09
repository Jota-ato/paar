import { requireAuth } from "@/lib/auth-server";
import { Heading } from "@/shared/components/typography/heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import Image from "next/image";
import { redirect } from "next/navigation";
import { format } from "date-fns"
import { UserDataForm } from "@/features/user/components/user-data-form";
import { BackLink } from "@/shared/components/ui/back-link";

export default async function EditProfilePage() {

    const { session } = await requireAuth()

    if (!session) redirect("/auth/sign-in")
    const { user } = session

    return (
        <PageWPadding>
            <Container>
                <Heading className="flex items-center"><BackLink href="/app/user/settings/edit" /> Editar perfil</Heading>
                <section className="w-full h-40 flex flex-col items-center justify-center gap-4">
                    <Image
                        src={user.image!}
                        alt="Foto de perfil"
                        width={100}
                        height={100}
                        priority
                        loading="eager"
                        className="rounded-full"
                    />
                </section>
                <section>
                    <Card>
                        <CardHeader>
                            <CardTitle>Edita tus datos</CardTitle>
                            <CardDescription>Te uniste el {format(user.createdAt, "dd/MM/yyyy")}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <UserDataForm
                                user={user}
                            />
                        </CardContent>
                    </Card>
                </section>
            </Container>
        </PageWPadding>
    )
}