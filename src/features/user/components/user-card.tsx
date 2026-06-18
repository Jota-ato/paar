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
        <Card outline className="flex gap-4 py-2 rounded-md">
            <div>
                <Image
                    width={100}
                    height={100}
                    src={user.image!}
                    alt={`Foto de ${user.name}`}
                    className="w-10 h-10 rounded-full"
                />
            </div>
            <Separator orientation="vertical" />
            <div className="flex items-center">
                <p className="text-xs">
                    {user.name}
                </p>
            </div>
        </Card>
    )
}