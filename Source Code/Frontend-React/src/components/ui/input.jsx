import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-gray-300 flex h-9 w-full min-w-0 rounded-md border bg-gray-50 px-3 py-1 text-base shadow-xs transition-[color,box-shadow,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-[#4A6CF7] focus-visible:ring-[#4A6CF7]/20 focus-visible:ring-[3px] focus-visible:bg-white",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          "dark:bg-gray-800 dark:border-gray-700 dark:focus-visible:bg-gray-900",
          className,
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
