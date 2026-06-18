import { ConnectCoupleCard } from "@/features/user/components/connect-couple-card"
import { CoupleIdDialog } from "@/features/user/components/couple-id-dialog"
import { UserCard } from "@/features/user/components/user-card"
import { SettingsItem, UserLinksSection } from "@/features/user/components/user-links-section"
import { requireAuth } from "@/lib/auth-server"
import { Heading } from "@/shared/components/typography/heading"
import { Container } from "@/shared/components/ui/container"
import { PageWPadding } from "@/shared/components/ui/page-w-padding"
import { Separator } from "@/shared/components/ui/separator"
import { redirect } from "next/navigation"

const SETTINGS_SECTIONS: {
  title: string,
  items: SettingsItem[]
}[] = [
  {
    title: "Cuenta",
    items: [
      { label: "Ver perfil", href: "/user" },
      { label: "Configuración", href: "/user/settings" },
    ],
  },
  {
    title: "Pareja",
    items: [
      { label: "Ver perfil de tu pareja", href: "/user" },
      { label: "Información de pareja", href: "/user" },
    ],
  },
  {
    title: "App",
    items: [
      { label: "Acerca de", href: "/user" },
      { label: "Créditos", href: "/user" },
    ],
  },
] as const

export default async function UserPage() {
  const { session } = await requireAuth()
  console.log(session)
  if (!session) return redirect("/auth/sign-in")

  const { user } = session
  const name = user.name.split(" ")[0]

  return (
    <PageWPadding>
      <Container>
        <Heading>Hola {name}</Heading>
        <Separator className="my-4" />
        <UserCard user={user} />

        <ConnectCoupleCard
          user={user}
        />

        <section className="mt-4 flex flex-col gap-4">
          {SETTINGS_SECTIONS.map((section) => (
            <UserLinksSection
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </section>
      </Container>
      <CoupleIdDialog />
    </PageWPadding>
  )
}