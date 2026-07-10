import { requireAuth } from "@/lib/auth-server";
import { CardHeading } from "@/shared/components/typography/card-heading";
import { Heading } from "@/shared/components/typography/heading";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
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
          <CardHeader>
            <CardTitle>
              ¿Cómo te sientes hoy?
            </CardTitle>
            <CardDescription>Estado de ánimo</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              asChild
              size="sm"
            >
              <Link
                href="/app/daily-feelings"
              >
                Ir al cuestionario
              </Link>
            </Button>
          </CardContent>
        </Card>
      </Container>
    </PageWPadding>
  );
}
