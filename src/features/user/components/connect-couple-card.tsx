"use client"
import { Button } from "@/shared/components/ui/button"
import { Card } from "@/shared/components/ui/card"
import { useUserStore } from "../stores/user-store"
import { User } from "../types/user.types"

export function ConnectCoupleCard({
    user
}: {
    user: User
}) {

    const { toggleOpen, setUser } = useUserStore()

    return (
        <Card className="my-4">
            <Button
                className="w-full"
                onClick={() => {
                    setUser(user)
                    toggleOpen()
                }}
            >
                Conectar con tu pareja
            </Button>
        </Card>
    )
}