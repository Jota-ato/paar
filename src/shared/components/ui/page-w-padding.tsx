import { cn } from "@/shared/utils/styles"
import { ReactNode } from "react"

export function PageWPadding({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("h-full py-8 md:py-12", className)}>
      {children}
    </div>
  )
}