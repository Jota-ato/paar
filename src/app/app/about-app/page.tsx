import { Heading } from "@/shared/components/typography/heading";
import { BackLink } from "@/shared/components/ui/back-link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import { Separator } from "@/shared/components/ui/separator";
import {
    Heart,
    Sparkles,
    SmilePlus,
    HandHeart,
    NotebookPen,
    Camera,
} from "lucide-react";

const features = [
    {
        icon: SmilePlus,
        title: "Cómo te sientes",
        description: "Registra tu estado de ánimo cada día.",
        colorClass: "bg-paar-blue/15 text-paar-blue",
    },
    {
        icon: HandHeart,
        title: "Gratitud",
        description: "Pequeños gracias que no se pierden.",
        colorClass: "bg-paar-pink/15 text-paar-pink",
    },
    {
        icon: NotebookPen,
        title: "Notas compartidas",
        description: "Ideas y cosas que importan a los dos.",
        colorClass: "bg-paar-purple/15 text-paar-purple",
    },
    {
        icon: Camera,
        title: "Memorias",
        description: "Momentos que no quieren olvidar.",
        colorClass: "bg-paar-pink/12 text-paar-pink",
    },
];

export default function AboutApp() {
    return (
        <PageWPadding>
            <Container>
                <Heading className="flex items-center gap-2">
                    <BackLink href="/user" />
                    Acerca de la app
                </Heading>

                <section className="flex flex-col gap-0">

                    <div className="flex flex-col items-center text-center pt-4 pb-8 gap-4">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center"
                            style={{ background: "var(--paar-gradient)" }}>
                            <Heart className="w-7 h-7 fill-white" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <h2 className="text-4xl font-normal tracking-tight">
                                Paar
                            </h2>
                            <p className="text-base italic text-muted-foreground">
                                Two souls, one place.
                            </p>
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide border border-secondary text-secondary bg-secondary/10"
                        >
                            v1.0 · En desarrollo
                        </span>
                    </div>

                    <Separator />

                    <div className="py-6 flex flex-col gap-2">
                        <p className="text-xs font-medium tracking-widest uppercase text-border">
                            ¿Qué es Paar?
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Un espacio privado para dos — tranquilo e intencional, donde pueden
                            estar presentes el uno para el otro más allá del ruido del día a
                            día. Sin chats grupales. Sin distracciones. Solo ustedes.
                        </p>
                    </div>

                    <Separator />

                    <div className="py-6 flex flex-col gap-4">
                        <p className="text-xs font-medium tracking-widest uppercase text-border">
                            Qué puedes hacer
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {features.map(({ icon: Icon, title, description, colorClass }) => (
                                <Card
                                    key={title}
                                >
                                    <CardHeader>
                                        <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${colorClass}`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <CardTitle className="text-sm font-medium text-foreground leading-snug">
                                            {title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                                            {description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <Separator />

                    {/* Made by */}
                    <div className="mt-6 bg-surface rounded-md p-4 flex items-center gap-4">
                        <div className="flex">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium z-10 -mr-2.5"
                                style={{ background: "rgba(139,124,246,0.22)", color: "var(--color-paar-blue)" }}>
                                V
                            </div>
                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium"
                                style={{ background: "rgba(245,154,207,0.22)", color: "var(--color-paar-pink)" }}>
                                J
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-medium uppercase text-muted-foreground mb-1">
                                Hecho con amor por
                            </p>
                            <p className="text-sm">
                                <span className="font-medium text-accent">Valeria & Julio</span>{" "}
                                Zavala Estrada
                            </p>
                        </div>
                    </div>

                </section>
            </Container>
        </PageWPadding>
    );
}