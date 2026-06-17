import { requireAuth } from "@/lib/auth-server";
import { Heading } from "@/shared/components/typography/heading";
import { Button } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";
import { redirect } from "next/navigation";

export default async function Home() {

  const { session } = await requireAuth()
  if (!session) {
    return redirect("/auth/sign-in")
  }

  const { user } = session

  return (
    <section className="min-h-screen py-8 md:py-12">
      <Container>
        <Heading>Welcome {user.name.split(' ')[0]}</Heading>
      </Container>
    </section>
  );
}
