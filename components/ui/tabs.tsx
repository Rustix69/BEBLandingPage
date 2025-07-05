import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <div className="w-full flex justify-center">
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "flex flex-row items-center justify-center gap-4 md:gap-6 py-3 px-2 md:px-6 w-full overflow-x-auto scrollbar-hide",
        className
      )}
      {...props}
    />
  </div>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const isActive = props["data-state"] === "active";
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "font-playfair font-bold text-lg md:text-xl px-7 py-2 md:px-10 md:py-3 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bebl-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-bebl-orange text-white shadow-lg ring-2 ring-bebl-orange/30"
          : "bg-transparent text-bebl-orange hover:bg-bebl-orange/10 hover:text-[#934616]",
        className
      )}
      {...props}
      asChild
    >
      <motion.button
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        whileTap={{ scale: 0.97 }}
        animate={isActive ? { scale: 1.08, opacity: 1, boxShadow: "0 4px 24px 0 #b45f1d33" } : { scale: 1, opacity: 0.85, boxShadow: "0 0px 0px 0 transparent" }}
        className="relative"
      >
        {props.children}
      </motion.button>
    </TabsPrimitive.Trigger>
  );
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
