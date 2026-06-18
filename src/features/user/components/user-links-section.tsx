import { Heading } from "@/shared/components/typography/heading"
import { Card, CardContent } from "@/shared/components/ui/card"
import { UserLinks } from "./settings-link"
import { Route } from "next"

export type SettingsItem = {
    label: string
    href: Route
}

export function UserLinksSection({
    title,
    items
}: {
    title: string
    items: SettingsItem[]
}) {
    return (
        <div className="flex flex-col gap-2">
            <Heading level={2}>{title}</Heading>
            <Card className="p-0">
                <CardContent>
                    {items.map(({ label, href }) => (
                        <UserLinks key={`${href}-${Math.random()}`} href={href}>
                            {label}
                        </UserLinks>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}