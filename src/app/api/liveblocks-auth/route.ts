// File: app/api/liveblocks-auth/route.ts

import { Liveblocks } from "@liveblocks/node";
import { cookies } from "next/headers";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(request: Request) {
  const { room } = await request.json();
    // Retrieve session cookie
  const sessionCookie = (await cookies()).get("session-id")?.value;

    // Simulate a user lookup
    const user = sessionCookie
      ? { id: "user_123", metadata: {  name: "Peter", avatar: "https://example.com/avatar.jpg", role: "admin" } }
      : { id: "guest_456", metadata: { name: "Guest", role: "viewer" } };

  const session = liveblocks.prepareSession(user.id, {
    userInfo: user.metadata,
  });

  session.allow(room, session.FULL_ACCESS);

  const { body, status } = await session.authorize();
  return new Response(body, { status });
}
