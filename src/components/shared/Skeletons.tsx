import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

// Product Card Skeleton
export function ProductCardSkeleton() {
  return (
    <Card className="glass-panel border-border/50 overflow-hidden">
      <Skeleton className="h-64 w-full rounded-t-lg" />
      <CardContent className="space-y-4 p-6">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <Skeleton className="h-10 w-full rounded-lg" />
      </CardContent>
    </Card>
  )
}

// Products Grid Skeleton
export function ProductsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}

// Hero Section Skeleton
export function HeroSkeleton() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-24 pb-16">
      <div className="mx-auto max-w-7xl space-y-6 px-6 text-center">
        <Skeleton className="mx-auto h-4 w-32" />
        <Skeleton className="mx-auto h-16 w-3/4" />
        <Skeleton className="mx-auto h-6 w-2/3" />
        <div className="flex justify-center gap-4">
          <Skeleton className="h-12 w-32 rounded-lg" />
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

// Stats Section Skeleton
export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2 text-center">
          <Skeleton className="mx-auto h-12 w-24" />
          <Skeleton className="mx-auto h-4 w-20" />
        </div>
      ))}
    </div>
  )
}

// Contact Form Skeleton
export function ContactFormSkeleton() {
  return (
    <Card className="glass-panel border-border">
      <CardHeader>
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-64" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-32 w-full rounded-md" />
        </div>
        <Skeleton className="h-12 w-full rounded-lg" />
      </CardContent>
    </Card>
  )
}

// Dealer Card Skeleton
export function DealerCardSkeleton() {
  return (
    <Card className="glass-panel border-border/50 overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <CardContent className="space-y-4 p-6">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      </CardContent>
    </Card>
  )
}

// Page Loading Skeleton
export function PageLoadingSkeleton() {
  return (
    <div className="bg-background-dark min-h-screen">
      <HeroSkeleton />
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <StatsSkeleton />
        </div>
      </div>
    </div>
  )
}

// Table Skeleton
export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-4">
      <div className="border-border flex gap-4 border-b pb-4">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="border-border/50 flex gap-4 border-b py-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      ))}
    </div>
  )
}
