// src/app/room/[roomId]/loading.tsx

export default function RoomLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-4xl space-y-6">
        {/* Title Skeleton */}
        <div className="h-8 w-1/2 bg-gray-200 rounded animate-pulse"></div>

        {/* Toolbar Skeleton */}
        <div className="flex gap-4">
          <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Canvas Skeleton */}
        <div className="h-[500px] bg-gray-100 border rounded-lg animate-pulse"></div>

        {/* Sidebar or Chat Skeleton */}
        <div className="h-64 bg-gray-100 border rounded-lg animate-pulse"></div>
      </div>
    </div>
  )
}
