import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/utils/styles";

const buttonVariants = cva(
    [
        "inline-flex items-center justify-center gap-2",
        "whitespace-nowrap",
        "font-medium",
        "transition-all duration-200",
        "cursor-pointer",
        "select-none",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-ring",
        "focus-visible:ring-offset-2",

        "disabled:pointer-events-none",
        "disabled:opacity-50",

        "[&_svg]:pointer-events-none",
        "[&_svg]:size-4",
        "[&_svg]:shrink-0",
    ],
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-primary-foreground hover:bg-primary/90",

                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/90",

                outline:
                    "border border-secondary text-secondary bg-transparent hover:bg-background/20",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",

                link:
                    "text-secondary underline-offset-4 hover:underline",
            },

            size: {
                sm: "h-8 rounded-sm px-3 text-sm",

                default:
                    "h-10 rounded-md px-4",

                lg:
                    "h-12 rounded-lg px-6 text-base",

                icon:
                    "size-10 rounded-lg",
            },
        },

        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(
                buttonVariants({
                    variant,
                    size,
                }),
                className
            )}
            {...props}
        />
    );
}