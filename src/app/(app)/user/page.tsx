import { ConnectCoupleCard } from "@/features/user/components/connect-couple-card"
import { CoupleIdDialog } from "@/features/user/components/couple-id-dialog"
import { UserCard } from "@/features/user/components/user-card"
import { SettingsItem, UserLinksSection } from "@/features/user/components/user-links-section"
import { userService } from "@/features/user/services/user-service"
import { requireAuth } from "@/lib/auth-server"
import { Heading } from "@/shared/components/typography/heading"
import { Card, CardContent } from "@/shared/components/ui/card"
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
      { label: "Créditos", href: "/credits" },
    ],
  },
] as const

export default async function UserPage() {
  const { session } = await requireAuth()
  if (!session) return redirect("/auth/sign-in")

  const { user } = session
  const name = user.name.split(" ")[0]

  const couple = user.coupleId ?
    await userService.getUserByCoupleId(user.coupleId, user.id)
    : null

  return (
    <PageWPadding>
      <Container>
        <Heading>Hola {name}</Heading>
        <Separator className="my-4" />
        {!couple && <UserCard user={user} />}

        {couple ? (
          <div className="my-4 flex flex-col">
            <Card className="bg-linear-to-r from-paar-blue via-paar-pink to-paar-purple">
              <CardContent className="grid grid-cols-9 gap-4">
                <div className="col-span-4 flex flex-col gap-4 p-4 items-center">
                  <Image width={100} height={100} src={couple.image!} alt={user.name} className="w-16 h-16 rounded-full" />
                  <p className="text-xs text-center">{couple.name}</p>
                </div>
                <div className="flex items-center justify-center py-1">
                  <Heart className="w-4 h-" />
                </div>
                <div className="col-span-4 flex flex-col gap-4 p-4 items-center">
                  <Image width={100} height={100} src={user.image!} alt={couple.name} className="w-16 h-16 rounded-full" />
                  <p className="text-xs text-center">{user.name}</p>
                </div>
              </CardContent>
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