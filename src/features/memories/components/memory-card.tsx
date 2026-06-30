import { Button } from "@/shared/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Memory } from "@/db/schema";

export function MemoryCard({
    memory: { image, date, id, title}
}: {
    memory: Memory
}) {
    return (
        <Card className="pt-0">
            <Link href={`/memories/${id}/memory`}>
                <Image
                    src={image!}
                    width={1280}
                    height={720}
                    alt={`Memory of ${title}`}
                    className="relative aspect-video w-full h-60 object-cover"
                />
            </Link>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {format(date ? new Date(date) : new Date(), "dd/MM/yyyy")}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button
                    className="w-full"
                    variant="link"
                >
                    <Link
                        href={`/memories/${id}/memory`}
                    >
                        Revivir el momento
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}