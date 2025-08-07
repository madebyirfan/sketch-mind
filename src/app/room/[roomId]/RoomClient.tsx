// File: app/room/[roomId]/RoomClient.tsx
'use client'

import dynamic from 'next/dynamic'
import { RoomProvider } from '../../../../liveblocks.config'
import '@tldraw/tldraw/tldraw.css'

// Dynamically import the editor
const TldrawEditor = dynamic(() => import('./TldrawEditor'), { ssr: false })

export default function RoomClient({ roomId }: { roomId: string }) {
  return (
    <RoomProvider id={roomId || 'default-room'}>
      <div className="w-full h-screen">
        <TldrawEditor />
      </div>
    </RoomProvider>
  )
}
