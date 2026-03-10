import { cn } from "@/lib/utils"

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  wide?: boolean
}

export function PageContainer({ children, className, wide }: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 py-16 md:px-10 lg:py-24",
        wide ? "max-w-6xl" : "max-w-5xl",
        className
      )}
    >
      {children}
    </div>
  )
}
