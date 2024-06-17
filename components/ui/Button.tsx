import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center    font-bold  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  ",
  {
    variants: {
      variant: {
        default: "bg-emerald-800 text-primary-foreground hover:bg-primary/70",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/70",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: " justify-center rounded-full text-primary-foreground  hover:bg-primary hover:text-primary-foreground ",
        link: "text-primary-foreground underline-offset-4 hover:underline",
        link1: "text-green-900 underline-offset-4 hover:underline",
        link2: " text-black  text-left underline-offset-4 hover:underline",
        text1: "justify-center text-primary-foreground underline-offset-4 ",
        menubutton: "justify-center bg-emerald-800 rounded-full text-primary-foreground hover:bg-primary/70",
        dropbutton:"justify-center bg-emerald-950 text-primary-foreground hover:bg-emerald-900 border-4 border-green-800 ",
        backbutton:"justify-center bg-emerald-600 text-primary-foreground hover:bg-emerald-900  border-4 border-green-800 ",
        simpleboxbutton:"justify-center bg-emerald-800 rounded-lg text-primary-foreground hover:bg-emerald-600",
        
        

      },
      size: {
        default: "h-10 px-4 py-2",
        ssm:"h-[4rem] w-[4rem] text-2xl  font-bold subpixel-antialiased ",
        sm: "h-12 font-medium  text-left px-10",
        mm:"h-12 font-semibold  text-left px-10",
        lg: "h-16 rounded-full tracking-tighter text-lg font-bold px-6 ",
        xlg:'h-30 w-8 mt-8 tracking-tighter font-extrabold  text-4xl text-center leading-8 px-10',
        xxlg:'h-30 w-8 ml-10 rounded-none tracking-tighter font-bold  leading-6 text-2xl text-left px-10',
        icon: "h-10 w-10 mb-12vh",
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
