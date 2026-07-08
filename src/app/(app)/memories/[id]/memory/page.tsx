import { MemoryForm } from "@/features/memories/components/memory-form";
import { MemoryFormHeader } from "@/features/memories/components/memory-form-header";
import { memoriesService } from "@/features/memories/services/memories-service";
import { requireAuth } from "@/lib/auth-server";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import { notFound } from "next/navigation";

export default async function MemoryPage({
  params
}: {
  params: Promise<{ id?: string }>
}) {

  const { id } = await params;
  const { session } = await requireAuth();
  if (!session) notFound();

  const { user } = session;

  if (!id) notFound()

  const memory = await memoriesService.getMemoryById(id, user.id)

  return (
    <PageWPadding>
      <Container className="space-y-6">
        <MemoryFormHeader
          user={user}
        />
        <MemoryForm
          key={memory?.id ?? "new"}
          dbMemory={memory}
        />
      </Container>
    </PageWPadding>
  )
}