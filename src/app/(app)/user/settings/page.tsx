import { AccountControls } from "@/features/user/components/account-controls";
import { UserCard } from "@/features/user/components/user-card";
import { requireAuth } from "@/lib/auth-server";
import { Heading } from "@/shared/components/typography/heading";
import { Button } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import { Separator } from "@/shared/components/ui/separator";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
    // 1. Verificación de Autenticación en Servidor
    const { session } = await requireAuth()

    if (!session) {
        return redirect("/auth/sign-in")
    }

    const { user } = session

    return (
        <PageWPadding>
            <Container className="space-y-8">
                {/* Cabecera Principal */}
                <div className="space-y-1">
                    <Heading level={1} className="text-3xl font-extrabold tracking-tight">
                        Configuración de cuenta
                    </Heading>
                    <p className="text-sm text-muted-foreground">
                        Administra la información de tu perfil, tus credenciales de acceso y tus opciones de seguridad.
                    </p>
                </div>
                <Separator />

                {/* Sección 1: Información de Perfil */}
                <section className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-1">
                        <Heading level={2} className="text-lg font-bold tracking-tight">
                            Información de usuario
                        </Heading>
                        <p className="text-xs text-muted-foreground">
                            Tus datos básicos de identificación pública.
                        </p>
                    </div>
                    <div className="space-y-3 md:col-span-2">
                        <UserCard user={user} />
                        <div className="flex justify-end">
                            <Button
                                variant="outline"
                                size="sm"
                            >
                                Editar datos de perfil
                            </Button>
                        </div>
                    </div>
                </section>

                <Separator />

                <section className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-1">
                        <Heading level={2} className="text-lg font-bold tracking-tight">
                            Seguridad y Controles
                        </Heading>
                        <p className="text-xs text-muted-foreground">
                            Opciones para administrar el acceso y estado de tu cuenta.
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <AccountControls />
                    </div>
                </section>

            </Container>
        </PageWPadding>
    )
}