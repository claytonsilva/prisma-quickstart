// eslint-disable-next-line no-unused-vars
import { Context } from '../index'

/**
 * query users
 * @param {any} root
 * @param {any} args
 * @param {Context} context
 * @returns FragmentableArray<Company>
 */
export const users = (root, args, context, info) => {
  return context.prisma.users(args)
}
