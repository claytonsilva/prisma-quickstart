import { Request } from 'express'
import { Prisma } from '../generated/index'

/**
 * Interface context for the database and the requisitions.
 *
 * @export
 * @interface Context
 */
export interface Context {
  prisma: Prisma
  request: Request
}
