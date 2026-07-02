import { MemoryCard } from "@/features/memories/components/memory-card";
import { memoriesService } from "@/features/memories/services/memories-service";
import { requireAuth } from "@/lib/auth-server";
import { Heading } from "@/shared/components/typography/heading";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { PageWPadding } from "@/shared/components/ui/page-w-padding";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function MemoriesPage() {
  const { session } = await requireAuth();
  if (!session) redirect("/auth/sign-in");

  const { user } = session;

  // Estado: Usuario sin pareja vinculada
  if (!user.coupleId) {
    return (
      <PageWPadding>
        <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
          <Heading level={1}>No estás vinculado aún</Heading>
          <p className="text-muted-foreground max-w-sm text-balance">
            Para empezar a compartir y guardar tus momentos especiales, necesitas conectarte con tu pareja.
          </p>
          {/* Aquí podrías agregar un botón de acción en el futuro: <Link href="/vinculo">Vincularme</Link> */}
        </Container>
      </PageWPadding>
    );
  }

  const memories = await memoriesService.getCoupleMemories(user.coupleId, user);

  return (
    <PageWPadding>
      <Container className="space-y-8">
        {/* Cabecera de la página */}
        <div className="space-y-1">
          <Heading level={1}>Nuestros Recuerdos</Heading>
          <p className="text-muted-foreground text-sm">
            Un espacio dedicado a los momentos más importantes que han compartido.
          </p>
        </div>

        {/* Listado de recuerdos o Estado Vacío */}
        {memories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>
                <Heading level={2} className="text-lg font-medium text-foreground">No tienes recuerdos aún</Heading>
              </CardTitle>
              <CardDescription>
                ¡El historial está en blanco! Comienza a añadir tus fotos y momentos favoritos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant={"outline"}
              >
                <Link href="/memories/create">
                  Crear Recuerdo
                </Link> 
              </Button>
            </CardContent>
          </Card>
        )}
      </Container>
    </PageWPadding>
  );
}