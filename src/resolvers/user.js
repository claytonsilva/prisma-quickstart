// eslint-disable-next-line no-unused-vars
import { Context } from '../index'
// eslint-disable-next-line no-unused-vars
import { UserSubscriptionPayload, UserSubscriptionWhereInput } from '../../generated'

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

/**
 * subscriptions
 */

export const userSubscription = {
  /**
   *
   * @param {any} root
   * @param {{where: UserSubscriptionWhereInput}} args
   * @param {Context} context
   * @returns {UserSubscriptionPayload}
   */
  subscribe: (root, { where }, context) => {
    return context.prisma.$subscribe
      .user(where)
  },
  resolve: payload => {
    return payload
  }
}
