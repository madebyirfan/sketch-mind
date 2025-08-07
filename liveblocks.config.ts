// File: liveblocks.config.ts
import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

// Use the custom auth endpoint
const client = createClient({
  authEndpoint: "/api/liveblocks-auth", // This calls your route.ts file
});

// public key is not needed for server-side operations, but you can still use it if you want to access public data
// Uncomment the following lines if you need to use the public key in your client-side code

// const client = createClient({
//   publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
// });

export const {
  RoomProvider,
  useMutation,
  useStorage,
  useUpdateMyPresence,
  useOthers,
  useSelf,
  suspense,
} = createRoomContext(client);
export { client };
