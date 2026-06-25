import { Button } from "@/shared/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

export function MemoryCard({
    image,
    date
}: {
    image?: string
    date?: string
}) {
    return (
        <Card className="pt-0">
            <Link href="/memories/1/memory">
                <Image
                    src={image!}
                    width={1280}
                    height={720}
                    alt="Memory image"
                    className="relative z-20 aspect-video w-full h-60 object-cover"
                />
            </Link>
            <CardHeader>
                <CardTitle>Un momento muy bello</CardTitle>
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
                        href="/memories/1/memory"
                    >
                        Revivir el momento
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}