import { Heading } from "@/shared/components/typography/heading";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";

export default function Landing() {
    return (
        <PageWPadding>
            <Container>
                <Heading>¡Bienvenido a Paar!</Heading>
            </Container>
        </PageWPadding>
    )
}