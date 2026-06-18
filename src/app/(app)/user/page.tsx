import { UserCard } from "@/features/user/components/user-card";
import { requireAuth } from "@/lib/auth-server";
import { Heading } from "@/shared/components/typography/heading";
import { Card } from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import { Separator } from "@/shared/components/ui/separator";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function UserPage() {

  const { session } = await requireAuth()

  if (!session) {
    return redirect("/auth/sign-in")
  }

  const { user } = session
  const name = user.name.split(' ')[0]

  return (
    <PageWPadding>
      <Container>
        <Heading>Hola {name}</Heading>
        <Separator className="my-4" />
        <UserCard user={user} />

        <section className="mt-8 flex flex-col justify-center gap-4">
          <Heading level={2}>Cuenta</Heading>
          <Card className="rounded-md p-0">
            <Link
              className="block px-4 py-4 text-sm border-b last-of-type:border-0 border-muted-foreground"
              href="/user"
            >
              Ver perfil
            </Link>
            <Link
              className="block px-4 py-4 text-sm border-b last-of-type:border-0 border-muted-foreground"
              href="/user/settings"
            >
              Configuración
            </Link>
          </Card>
          <Heading level={2}>Pareja</Heading>
          <Card className="rounded-md p-0">
            <Link
              className="block px-4 py-4 text-sm border-b last-of-type:border-0 border-muted-foreground"
              href="/user"
            >
              Ver perfil de tu pareja
            </Link>
            <Link
              className="block px-4 py-4 text-sm border-b last-of-type:border-0 border-muted-foreground"
              href="/user"
            >
              Conectar con tu pareja
            </Link>
            <Link
              className="block px-4 py-4 text-sm border-b last-of-type:border-0 border-muted-foreground"
              href="/user"
            >
              Información de pareja
            </Link>
          </Card>
          <Heading level={2}>App</Heading>
          <Card className="rounded-md p-0">
            <Link
              className="block px-4 py-4 text-sm border-b last-of-type:border-0 border-muted-foreground"
              href="/user"
            >
              Acerca de
            </Link>
            <Link
              className="block px-4 py-4 text-sm border-b last-of-type:border-0 border-muted-foreground"
              href="/user"
            >
              Créditos
            </Link>
          </Card>
        </section>
      </Container>
    </PageWPadding>
  )
}