import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primarybg dark:bg-white text-primary-foreground dark:hover:bg-white/90 hover:bg-primarybg/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primarybg border-input bg-background hover:bg-accent hover:text-primarybg",
        secondary: "bg-secondarybg text-white hover:bg-secondarybg/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-blog-blue underline-offset-4 hover:underline",
        plain: "outline-none border-0",
        rounded_primary_light:
          "rounded-3xl bg-primarybg text-primary-foreground  hover:bg-primarybg/90",
        rounded_primary_dark:
          "rounded-3xl bg-white text-primary-foreground  hover:bg-white/90",
      },
      size: {
        default: "h-10 inter-500 px-4 py-1",
        sm: "h-9 rounded-md inter-500 px-3",
        lg: "h-11 rounded-md inter-500 px-8",
        icon: "h-10 w-10",
        rounded: "h-auto px-5 inter-500  py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
