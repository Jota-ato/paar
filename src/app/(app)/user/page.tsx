import { requireAuth } from "@/lib/auth-server";
import { Heading } from "@/shared/components/typography/heading";
import { Card } from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import { Separator } from "@/shared/components/ui/separator";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function UserPage() {

  const { session } = await requireAuth()

  if (!session) {
    return redirect("/auth/sign-in")
  }

  const { user } = session
  const name = user.name.split(' ')[0]

  console.log(user.image)

  return (
    <PageWPadding>
      <Container>
        <Heading>Hola {name}</Heading>
        <Separator className="my-4" />
        <Card className="flex gap-4 py-2">
          <div>
            <Image 
              width={100}
              height={100}
              src={user.image!}
              alt={`Foto de ${name}`}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center">
            <p className="text-xs">
              {user.name}
            </p>
          </div>
        </Card>
      </Container>
    </PageWPadding>
  )
}