import { CardHeading } from "@/shared/components/typography/card-heading";
import { Heading } from "@/shared/components/typography/heading";
import { Card } from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";

export default function DailyFeelingsPage() {
    return (
        <PageWPadding>
            <Heading className="text-center">¿Cómo te sientes hoy?</Heading>
            <Container className="mt-8">
                <Card>
                    <CardHeading>Estado de ánimo</CardHeading>
                </Card>
            </Container>
        </PageWPadding>
    )
}