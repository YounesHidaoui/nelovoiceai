import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "filter: drop-shadow(rgba(169, 252, 129, 0.5) 0px 0px 25px); background-image: linear-gradient(115deg, rgb(46, 46, 46), rgba(46, 46, 46, 0.82)); border: 1px solid rgba(255, 255, 255, 0.24); font-size: 14px; width: 160px; height: 160px; border-radius: 50%; cursor: pointer;",
  {
    variants: {
      variant: {
        default: "filter: drop-shadow(rgba(169, 252, 129, 0.5) 0px 0px 25px); background-image: linear-gradient(115deg, rgb(46, 46, 46), rgba(46, 46, 46, 0.82)); border: 1px solid rgba(255, 255, 255, 0.24); font-size: 14px; width: 160px; height: 160px; border-radius: 50%; cursor: pointer;",
        destructive: "filter: drop-shadow(rgba(169, 252, 129, 0.5) 0px 0px 25px); background-image: linear-gradient(115deg, rgb(46, 46, 46), rgba(46, 46, 46, 0.82)); border: 1px solid rgba(255, 255, 255, 0.24); font-size: 14px; width: 160px; height: 160px; border-radius: 50%; cursor: pointer;",
        outline: "filter: drop-shadow(rgba(169, 252, 129, 0.5) 0px 0px 25px); background-image: linear-gradient(115deg, rgb(46, 46, 46), rgba(46, 46, 46, 0.82)); border: 1px solid rgba(255, 255, 255, 0.24); font-size: 14px; width: 160px; height: 160px; border-radius: 50%; cursor: pointer;",
        secondary: "filter: drop-shadow(rgba(169, 252, 129, 0.5) 0px 0px 25px); background-image: linear-gradient(115deg, rgb(46, 46, 46), rgba(46, 46, 46, 0.82)); border: 1px solid rgba(255, 255, 255, 0.24); font-size: 14px; width: 160px; height: 160px; border-radius: 50%; cursor: pointer;",
        ghost: "filter: drop-shadow(rgba(169, 252, 129, 0.5) 0px 0px 25px); background-image: linear-gradient(115deg, rgb(46, 46, 46), rgba(46, 46, 46, 0.82)); border: 1px solid rgba(255, 255, 255, 0.24); font-size: 14px; width: 160px; height: 160px; border-radius: 50%; cursor: pointer;",
        link: "filter: drop-shadow(rgba(169, 252, 129, 0.5) 0px 0px 25px); background-image: linear-gradient(115deg, rgb(46, 46, 46), rgba(46, 46, 46, 0.82)); border: 1px solid rgba(255, 255, 255, 0.24); font-size: 14px; width: 160px; height: 160px; border-radius: 50%; cursor: pointer;",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
