import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted/50",
        className
      )}
      {...props}
    />
  )
}

// Product Card Skeleton
function ProductCardSkeleton() {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[350px]">
      <div className="glass-panel border-border rounded-xl overflow-hidden">
        {/* Image placeholder */}
        <Skeleton className="h-[200px] sm:h-[250px] rounded-none" />
        
        {/* Content */}
        <div className="p-5 space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
          
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          
          <div className="flex gap-2">
            <Skeleton className="h-5 w-12 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-14 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Horizontal Scroll Section Skeleton
function HorizontalScrollSkeleton() {
  return (
    <div className="h-screen flex flex-col justify-center bg-background section-padding-x">
      {/* Header */}
      <div className="mb-10 container-max">
        <Skeleton className="h-5 w-24 mb-3 rounded-full" />
        <Skeleton className="h-12 w-96 max-w-full" />
      </div>
      
      {/* Cards */}
      <div className="flex gap-6 pl-6 sm:pl-10 lg:pl-20">
        {[1, 2, 3, 4].map((i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}

// Anatomy Section Skeleton
function AnatomySkeleton() {
  return (
    <div className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-8">
          <Skeleton className="h-4 w-40 mx-auto mb-3" />
          <Skeleton className="h-10 w-80 max-w-full mx-auto mb-2" />
          <Skeleton className="h-4 w-96 max-w-full mx-auto" />
        </div>
        
        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left panel */}
          <div className="lg:col-span-4 space-y-2 order-2 lg:order-1">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-24 w-full rounded-lg" />
            ))}
          </div>
          
          {/* Right panel - Image */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <Skeleton className="aspect-square lg:aspect-[5/4] w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Hero Section Skeleton
function HeroSkeleton() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <Skeleton className="h-8 w-40 rounded-full mb-8" />
      <Skeleton className="h-20 w-[500px] max-w-full mb-4" />
      <Skeleton className="h-20 w-[400px] max-w-full mb-8" />
      <Skeleton className="h-6 w-96 max-w-full mb-12" />
      <div className="flex gap-4">
        <Skeleton className="h-12 w-40 rounded-full" />
        <Skeleton className="h-12 w-32 rounded-full" />
      </div>
    </div>
  )
}

export { 
  Skeleton, 
  ProductCardSkeleton, 
  HorizontalScrollSkeleton, 
  AnatomySkeleton,
  HeroSkeleton 
}
