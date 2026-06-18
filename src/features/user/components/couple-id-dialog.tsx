"use client"

import { cn } from "@/shared/utils/styles"
import { useUserStore } from "../stores/user-store"
import { Card } from "@/shared/components/ui/card"
import { Container } from "@/shared/components/ui/container"
import { Button } from "@/shared/components/ui/button"
import { connectCoupleIdAction, generateCoupleIdAction } from "../actions/user-actions"
import { Separator } from "@/shared/components/ui/separator"
import { useState } from "react"
import { Copy, Link2 } from "lucide-react"
import { User } from "../types/user.types"

function CoupleCode({ 
    code 
}: { 
    code: string 
}) {
    const [copied, setCopied] = useState(false)

    const copy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground">Tu código</p>
            <button
                onClick={copy}
                className="flex items-center justify-between gap-2 bg-surface-hover rounded-lg px-4 py-3 w-full hover:opacity-80 transition-opacity"
            >
                <span className="font-mono text-sm tracking-widest">{code}</span>
                <Copy className={cn("w-4 h-4 shrink-0", copied ? "text-foreground" : "text-muted-foreground")} />
            </button>
            {copied && <p className="text-xs text-muted-foreground text-center">Copiado</p>}
        </div>
    )
}

function ConnectForm({
    user
}: {
    user: User
}) {
    const [code, setCode] = useState("")
    const [loading, setLoading] = useState(false)

    const connect = async () => {
        if (!code.trim()) return
        setLoading(true)
        await connectCoupleIdAction(user, code)
        setLoading(false)
    }

    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground">Código de tu pareja</p>
            <div className="flex gap-2">
                <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Pega el código aquí"
                    className="flex-1 bg-surface-hover rounded-lg px-4 py-3 text-sm focus:outline-none placeholder:text-muted-foreground font-mono tracking-widest"
                />
                <Button
                    onClick={connect}
                    disabled={!code.trim() || loading}
                    variant="outline"
                    className="shrink-0"
                >
                    <Link2 className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}

export function CoupleIdDialog() {
    const { isOpen, user, toggleOpen, setUser } = useUserStore()

    const close = () => {
        toggleOpen()
        setUser(null)
    }

    const generateCoupleId = async () => {
        if (!user) return
        await generateCoupleIdAction(user)
    }

    if (!user) return null

    return (
        <div
            className={cn(
                isOpen ? "opacity-100 visible" : "opacity-0 invisible",
                "fixed inset-0 z-20 flex items-center justify-center bg-black/50 transition-all duration-300"
            )}
            onClick={close}
        >
            <Container>
                <div
                    onClick={(e) => e.stopPropagation()}
                >
                    <Card
                        className="z-30 flex flex-col gap-6"
                    >
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pareja</p>
                            <h2 className="text-lg font-semibold">Conecta con tu pareja</h2>
                        </div>

                        {user.coupleId ? (
                            <CoupleCode code={user.coupleId} />
                        ) : (
                            <Button className="w-full" onClick={generateCoupleId} variant="outline">
                                Generar mi código
                            </Button>
                        )}

                        <Separator />

                        <ConnectForm user={user} />
                    </Card>
                </div>
            </Container>
        </div>
    )
}