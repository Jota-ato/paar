import { HeartHandshake, Code2, Palette, Sparkles } from "lucide-react";

import { Heading } from "@/shared/components/typography/heading";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import { BackLink } from "@/shared/components/ui/back-link";

const creditSections = [
    {
        title: "Colaboradores",
        description: "Personas que impulsan este proyecto",
        icon: HeartHandshake,
        people: ["Julio César", "Valeria Estrada"],
    },
    {
        title: "Programación",
        description: "Desarrollo y experiencia de uso",
        icon: Code2,
        people: ["Julio César"],
    },
    {
        title: "Diseño",
        description: "Estética y dirección visual",
        icon: Palette,
        people: ["Julio César", "Valeria Estrada"],
    },
] as const;

export default function CreditsPage() {
    return (
        <PageWPadding>
            <Container className="py-8 sm:py-12">
                <BackLink href="/app/user" className="-mt-4 mb-4" />
                <div className="space-y-6">
                    <header className="rounded-2xl border border-border/70 bg-linear-to-br from-primary/10 via-background to-muted/70 p-6 shadow-sm sm:p-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-sm text-muted-foreground">
                            <Sparkles className="h-4 w-4 text-primary" />
                            Equipo Paar
                        </div>
                        <Heading className="mt-4">Créditos</Heading>
                        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
                            Este espacio reconoce a las personas que hicieron posible esta experiencia, con cariño y atención a los detalles.
                        </p>
                    </header>

                    <div className="grid gap-4 md:grid-cols-3">
                        {creditSections.map((section) => {
                            const Icon = section.icon;

                            return (
                                <Card key={section.title} className="h-full border-border/70 bg-background/80 shadow-sm">
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-full bg-primary/10 p-2 text-primary">
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <CardTitle>{section.title}</CardTitle>
                                                <CardDescription>{section.description}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {section.people.map((person) => (
                                                <li
                                                    key={person}
                                                    className="flex items-center gap-2 rounded-md bg-muted/40 px-3 py-2 text-sm"
                                                >
                                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                                    {person}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="rounded-xl border border-dashed border-border/70 bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
                        Hecho con cariño para acompañar momentos especiales y fortalecer los vínculos.
                    </div>
                </div>
            </Container>
        </PageWPadding>
    );
}