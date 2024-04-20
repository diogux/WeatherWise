import * as React from "react"

import { cn } from "@/lib/utils"

const Label = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <label
        className={cn(
            "block text-sm font-medium text-muted-foreground",
            className
        )}
        ref={ref}
        {...props} />
    );
    })

Label.displayName = "Label"
export { Label }
