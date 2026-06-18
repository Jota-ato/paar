import { Card } from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import Image from "next/image";
import { User } from "../types/user.types";

export function UserCard({
    user
}: {
    user: User
}) {
    return (
        <Card className="flex flex-row gap-4 rounded-md">
            <div className="pl-4">
                <Image
                    width={100}
                    height={100}
                    src={user.image!}
                    alt={`Foto de ${user.name}`}
                    className="w-10 h-10 rounded-full"
                />
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col items-start justify-center">
                <p className="text-sm">
                    {user.name}
                </p>
                <p className="text-xs text-muted-foreground">
                    {user.email}
                </p>
            </div>
        </Card>
    )
}