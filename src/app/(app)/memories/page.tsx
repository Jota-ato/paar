
import { MemoryCard } from "@/features/memories/components/memory-card";
import { memoriesRepository } from "@/features/memories/services/memories-repository";
import { memoriesService } from "@/features/memories/services/memories-service";
import { requireAuth } from "@/lib/auth-server";
import { Heading } from "@/shared/components/typography/heading";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import { redirect } from "next/navigation";


export default async function MemoriesPage() {

  const { session } = await requireAuth()
  if (!session) redirect("/auth/sign-in")

  const { user } = session

  if (!user.coupleId) {
    return (
      <PageWPadding>
        <Container className="space-y-8">
          <Heading>No estas vinculado aún</Heading>
        </Container>
      </PageWPadding>
    )
  }

  const memories = await memoriesService.getCoupleMemories(user.coupleId, user)

  return (
    <PageWPadding>
      <Container className="space-y-8">
        {memories.length ? 
        (
          memories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))
        ) : (
          <p>No tienes recuerdos aún</p>
        )}
      </Container>
    </PageWPadding>
  )
}