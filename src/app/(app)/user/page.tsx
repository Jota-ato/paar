import { ConnectCoupleCard } from "@/features/user/components/connect-couple-card"
import { CoupleIdDialog } from "@/features/user/components/couple-id-dialog"
import { UserCard } from "@/features/user/components/user-card"
import { SettingsItem, UserLinksSection } from "@/features/user/components/user-links-section"
import { userService } from "@/features/user/services/user-service"
import { requireAuth } from "@/lib/auth-server"
import { Heading } from "@/shared/components/typography/heading"
import { Card } from "@/shared/components/ui/card"
import { Container } from "@/shared/components/ui/container"
import { PageWPadding } from "@/shared/components/ui/page-w-padding"
import { Separator } from "@/shared/components/ui/separator"
import { Heart } from "lucide-react"
import Image from "next/image"
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
  if (!session) return redirect("/auth/sign-in")

  const { user } = session
  const name = user.name.split(" ")[0]

  const couple = user.coupleId ?
    await userService.getUserByCoupleId(user.coupleId)
    : null

  return (
    <PageWPadding>
      <Container>
        <Heading>Hola {name}</Heading>
        <Separator className="my-4" />
        {!couple && <UserCard user={user} />}

        {couple ? (
          <div className="my-4 flex flex-col">
            <Card outline className="flex flex-col rounded-md divide-y divide-muted-foreground/20">
              <div className="flex gap-4 p-4 items-center">
                <Image width={40} height={40} src={user.image!} alt={user.name} className="w-10 h-10 rounded-full" />
                <p className="text-sm">{user.name}</p>
              </div>
              <div className="flex items-center justify-center py-1">
                <Heart className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="flex gap-4 p-4 items-center">
                <Image width={40} height={40} src={couple.image!} alt={couple.name} className="w-10 h-10 rounded-full" />
                <p className="text-sm">{couple.name}</p>
              </div>
            </Card>
          </div>
        ) : (
          <ConnectCoupleCard
            user={user}
          />
        )}

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