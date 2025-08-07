'use client'

import { Tldraw, createTLStore, defaultShapeUtils } from '@tldraw/tldraw'
import { useUpdateMyPresence } from '../../../../liveblocks.config'
import { useEffect, useMemo } from 'react'

export default function TldrawEditor() {
  // Liveblocks storage for shared document
  // const shapes = useStorage((root) => root.shapes)

  // Liveblocks presence for cursor
  const updateMyPresence = useUpdateMyPresence()

  const store = useMemo(() => createTLStore({ shapeUtils: defaultShapeUtils }), [])

  // Optionally: Sync local cursor to presence
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      updateMyPresence({ cursor: { x: e.clientX, y: e.clientY } })
    }

    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [updateMyPresence]);

  return <Tldraw store={store} />
}
