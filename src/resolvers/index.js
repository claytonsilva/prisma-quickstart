import { users, userSubscription } from './user'
import { users as userBinding } from './user_binding'

const resolvers = {
  Query: {
    users
  },
  Subscription: {
    user: userSubscription
  }
}

const resolversBind = {
  Query: {
    users: userBinding
  }
}

export { resolvers, resolversBind }
