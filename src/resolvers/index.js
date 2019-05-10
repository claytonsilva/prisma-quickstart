import { users } from './user'
import { users as userBinding } from './user_binding'

const resolvers = {
  Query: {
    users
  }
}

const resolversBind = {
  Query: {
    users: userBinding
  }
}

export { resolvers, resolversBind }
