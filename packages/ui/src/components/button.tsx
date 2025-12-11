import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed gap-2 whitespace-nowrap [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-stone-900 text-white hover:bg-stone-800 focus:ring-stone-900 shadow-lg shadow-stone-900/10",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 shadow-lg shadow-red-600/10",
        outline:
          "bg-transparent border border-stone-300 text-stone-700 hover:border-stone-800 hover:text-stone-900 focus:ring-stone-200",
        secondary:
          "bg-white text-stone-900 hover:bg-stone-50 border border-stone-200 shadow-sm focus:ring-stone-200",
        ghost:
          "text-stone-600 hover:text-stone-900 hover:bg-stone-100",
        link: "text-stone-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "px-5 py-2.5 text-sm",
        sm: "px-3 py-1.5 text-sm",
        lg: "px-8 py-3.5 text-base",
        icon: "size-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
