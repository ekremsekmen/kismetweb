import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative flex min-h-[60vh] items-center justify-center pt-24 pb-16">
        <div className="mx-auto w-full max-w-7xl px-6 text-center sm:px-10 lg:px-20">
          {/* Badge Skeleton */}
          <Skeleton className="mx-auto mb-4 h-6 w-32 rounded-full" />

          {/* Title Skeleton */}
          <Skeleton className="mx-auto mb-4 h-16 w-3/4 sm:h-20" />
          <Skeleton className="mx-auto mb-8 h-16 w-1/2 sm:h-20" />

          {/* Description Skeleton */}
          <Skeleton className="mx-auto mb-2 h-6 w-full max-w-2xl" />
          <Skeleton className="mx-auto mb-8 h-6 w-3/4 max-w-xl" />

          {/* Button Skeleton */}
          <div className="flex justify-center gap-4">
            <Skeleton className="h-12 w-40 rounded-full" />
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="border-border border-t py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          {/* Stats Skeleton */}
          <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton className="mx-auto mb-2 h-12 w-24" />
                <Skeleton className="mx-auto h-4 w-20" />
              </div>
            ))}
          </div>

          {/* Cards Skeleton */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-panel rounded-xl p-6">
                <Skeleton className="mb-4 h-48 w-full rounded-lg" />
                <Skeleton className="mb-2 h-6 w-3/4" />
                <Skeleton className="mb-1 h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loading Indicator */}
      <div className="fixed right-8 bottom-8 z-50">
        <div className="bg-background/90 border-border flex items-center gap-3 rounded-full border px-4 py-2 shadow-lg backdrop-blur-sm">
          <div className="flex gap-1">
            <div
              className="bg-primary h-2 w-2 animate-bounce rounded-full"
              style={{ animationDelay: '0ms' }}
            />
            <div
              className="bg-primary h-2 w-2 animate-bounce rounded-full"
              style={{ animationDelay: '150ms' }}
            />
            <div
              className="bg-primary h-2 w-2 animate-bounce rounded-full"
              style={{ animationDelay: '300ms' }}
            />
          </div>
          <span className="text-muted-foreground text-sm">Yükleniyor...</span>
        </div>
      </div>
    </div>
  )
}
