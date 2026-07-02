import { MemoryForm } from "@/features/memories/components/memory-form";
import { MemoryFormHeader } from "@/features/memories/components/memory-form-header";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";

export default function CreateMemoryPage() {
    return (
        <PageWPadding>
            <Container className="space-y-6">
                <MemoryFormHeader />
                <MemoryForm />
            </Container>
        </PageWPadding>
    )
}