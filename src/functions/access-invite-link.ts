import { db } from "../drizzle/client"
import { subscriptions } from "../drizzle/schema/subscriptions"
import { redis } from "../redis/client"

interface AccessInvteLinkParams {
  subscriberId: string
}

export async function accessInviteLink( {
  subscriberId
}: AccessInvteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}