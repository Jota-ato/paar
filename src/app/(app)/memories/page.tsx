
import { MemoryCard } from "@/features/memories/components/memory-card";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";


export default function MemoriesPage() {
  return (
    <PageWPadding>
      <Container className="space-y-8">
        <MemoryCard 
          image="/img/memory.jpg"
          date="2025-04-10"
        />
        <MemoryCard
          image="/img/memory2.jpg"
          date="2026-04-26"
        />
        <MemoryCard 
          image="/img/memory3.jpg"
          date="2026-08-24"
        />
        <MemoryCard 
          image="/img/memory4.jpg"
          date="2026-10-23"
        />
      </Container>
    </PageWPadding>
  )
}