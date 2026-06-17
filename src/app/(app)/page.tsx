import { requireAuth } from "@/lib/auth-server";
import { CardHeading } from "@/shared/components/typography/card-heading";
import { Heading } from "@/shared/components/typography/heading";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import { Separator } from "@/shared/components/ui/separator";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {

  const { session } = await requireAuth()
  if (!session) {
    return redirect("/auth/sign-in")
  }

  return (
    <PageWPadding>
      <Container>
        <Card>
          <p className="text-xs text-muted-foreground">Estado de ánimo</p>
          <CardHeading>¿Cómo te sientes hoy?</CardHeading>
          <Separator className="my-2" />
          <Button
            variant="outline"
            asChild
            size="sm"
          >
            <Link
              href="/daily-feelings"
            >
              Ir al cuestionario
            </Link>
          </Button>
        </Card>
      </Container>
    </PageWPadding>
  );
}
