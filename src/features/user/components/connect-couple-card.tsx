"use client"
import { Heart } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import { Card } from "@/shared/components/ui/card"
import { useUserStore } from "../stores/user-store"
import { User } from "../types/user.types"

export function ConnectCoupleCard({ user }: { user: User }) {
    const { toggleOpen, setUser } = useUserStore()

    return (
        <Card className="my-4 flex flex-col items-center gap-3 py-6">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center">
                    <Heart className="w-4 h-4 text-muted-foreground" />
                </div>
            </div>
            <div className="text-center">
                <p className="text-sm font-medium">Aún no tienes pareja conectada</p>
                <p className="text-xs text-muted-foreground mt-1">Genera un código y compártelo</p>
            </div>
            <Button
                variant="outline"
                className="mt-1"
                onClick={() => {
                    setUser(user)
                    toggleOpen()
                }}
            >
                Conectar con mi pareja
            </Button>
        </Card>
    )
}