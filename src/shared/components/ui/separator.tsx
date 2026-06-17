import { cn } from "@/shared/utils/styles"

export function Separator({
  className,
  orientation = "horizontal"
}: {
  className?: string
  orientation?: "horizontal" | "vertical"
}) {
  return (
    <div className={cn(
      orientation === "horizontal" ?
        "h-px w-full " :
        "self-stretch w-px",
      "bg-muted-foreground rounded",
      className)
    }
    >

    </div>
  )
}