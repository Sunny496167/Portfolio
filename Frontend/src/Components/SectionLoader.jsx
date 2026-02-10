// Loading Skeleton Component
const SectionLoader = () => (
    <div className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="animate-pulse space-y-8">
                {/* Title Skeleton */}
                <div className="w-64 h-8 bg-gradient-to-r from-orange-500/20 to-orange-500/10 rounded-lg mx-auto loading-shimmer"></div>

                {/* Content Skeletons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass-card rounded-2xl p-6 h-64">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-xl mb-4 loading-shimmer"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-orange-500/20 rounded w-3/4 loading-shimmer"></div>
                                <div className="h-4 bg-orange-500/20 rounded w-1/2 loading-shimmer"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default SectionLoader;
