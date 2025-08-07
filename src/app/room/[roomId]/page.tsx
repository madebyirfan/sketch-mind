// src/app/room/[roomId]/page.tsx

import { Metadata } from 'next'
import RoomClient from './RoomClient'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ roomId: string }>
}): Promise<Metadata> {
  const { roomId } = await params
  return {
    title: `Room - ${roomId}`,
    description: 'Live collaborative drawing room',
  }
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ roomId: string }>
}) {
  const { roomId } = await params

  return <RoomClient roomId={roomId} />
}

