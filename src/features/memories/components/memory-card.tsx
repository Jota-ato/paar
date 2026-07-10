import { Button } from "@/shared/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { MemoryWithUser } from "../types/memories.types";
import { Badge } from "@/shared/components/ui/badge";

export function MemoryCard({
    memory: { image, date, id, title, description, user }
}: {
    memory: MemoryWithUser
}) {
    return (
        <Card className="pt-0">
            <Link href={`/app/memories/${id}/memory`}>
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
                <CardDescription className="space-y-2">
                    <p> {format(date, "dd/MM/yyyy")}</p>
                    <p className="line-clamp-2">{description}</p>
                    <Badge
                        variant="outline"
                    >
                        {user.name}
                    </Badge>
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button
                    className="w-full"
                    variant="link"
                >
                    <Link
                        href={`/app/memories/${id}/memory`}
                    >
                        Revivir el momento
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}