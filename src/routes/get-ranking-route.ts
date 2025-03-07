import { z } from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { getSubscriberInvitesCount } from '../functions/get-subscriber-invites-count';
import { getRanking } from '../functions/get-ranking';

export const getRankingRoute: FastifyPluginAsyncZod = async (app) => {
  app.get('/ranking', {
    schema: {
      summary: 'Get the ranking of the top 3 subscribers',
      tags: ['referral'],
      response: {
        200: z.object({
          ranking: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              score: z.number()
            })
          )
        })
      }
    }
  },
  async request => {
    const { rankingWithScore } = await getRanking()

    return { ranking: rankingWithScore }
  
  })
  
}