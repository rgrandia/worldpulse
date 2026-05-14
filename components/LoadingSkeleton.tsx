export function HeroSkeleton() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shimmer bg-white/[0.03]" style={{ minHeight: '480px' }}>
      <div className="h-full flex flex-col justify-end p-10">
        <div className="w-24 h-5 rounded-full bg-white/10 mb-4" />
        <div className="w-3/4 h-8 rounded-lg bg-white/10 mb-3" />
        <div className="w-1/2 h-8 rounded-lg bg-white/[0.07] mb-6" />
        <div className="w-2/3 h-4 rounded bg-white/5 mb-2" />
        <div className="w-1/2 h-4 rounded bg-white/5 mb-8" />
        <div className="flex gap-3">
          <div className="w-24 h-8 rounded-full bg-white/10" />
          <div className="w-20 h-8 rounded-full bg-white/[0.05]" />
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
      <div className="h-44 sm:h-52 w-full shimmer bg-white/[0.04]" />
      <div className="p-5 space-y-3">
        <div className="flex justify-between">
          <div className="w-20 h-3 rounded bg-white/10 shimmer" />
          <div className="w-14 h-3 rounded bg-white/[0.06] shimmer" />
        </div>
        <div className="space-y-2">
          <div className="w-full h-4 rounded bg-white/[0.08] shimmer" />
          <div className="w-5/6 h-4 rounded bg-white/[0.06] shimmer" />
          <div className="w-3/4 h-4 rounded bg-white/[0.04] shimmer" />
        </div>
        <div className="w-full h-3 rounded bg-white/[0.04] shimmer" />
        <div className="w-4/5 h-3 rounded bg-white/[0.03] shimmer" />
        <div className="flex justify-between pt-2 border-t border-white/5">
          <div className="w-16 h-3 rounded bg-white/[0.05] shimmer" />
          <div className="w-20 h-3 rounded bg-white/[0.07] shimmer" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
